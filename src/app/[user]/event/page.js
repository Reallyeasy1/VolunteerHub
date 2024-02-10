// Purpose: This file is the main file for the event page. It takes in the user id and returns the events associated with the user in the form of Event components.
// import {unstable_noStore as noStore} from "next/cache";

// Takes in event name and returns the event object
// Fetches from the projects_data.json file
import {extractEventByEventName} from "./find_event.js";

// Takes in user id and returns the projects associated with the user in a list
// Fetches from the Users file
import {extractProjectsByUserId} from "./find_people.js";

import { findUserId } from './find_user_id.js';

export default function Page({ params }) {

  // noStore();

  // Gets the incomplete event details from Volunteer Database
  let user_id_2 = findUserId(params.user);
  let eventList = extractProjectsByUserId(user_id_2);
  
  // Gets the detailed event details from Projects Database
  // let eventListDetailed = eventList.map((event) => extractEventByEventName(event['event_name']));
  

  // Returns the list of events in the form of Event components
  return <div>
  {eventList.map((event) => <Event params ={event}></Event>)}
  </div>
  ;
  
 
  
}