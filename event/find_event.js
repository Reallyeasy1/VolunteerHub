const fs = require('fs').promises;
// import {unstable_noStore as noStore} from "next/cache";

async function extractEventByEventName(event_name) {
    // Read the user_data.json file
    // noStore();
    // console.log('Reading user_data.json file...');

    const eventData = await fs.readFile('src/api/projects_data.json', 'utf8');

    // Parse the JSON data
    // console.log('Parsing JSON data...');
    const events = JSON.parse(eventData);
    
    // console.log(users['volunteers']);

    const event = events[event_name];

    // console.log(event);
//    console.log('reached here');
 

    return event;

} 

// console.log(extractEventByEventName('Project A'));

module.exports = {extractEventByEventName};





