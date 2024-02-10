const fs = require('fs').promises;
import {unstable_noStore as noStore} from "next/cache";
 

async function extractProjectsByUserId(userId) {

    // console.log(userId, "userId");
    // Read the user_data.json file
    noStore();
    // console.log('Reading user_data.json file...');
    const userData = await fs.readFile('src/api/user_data.json', 'utf8');

    // Parse the JSON data
    // console.log('Parsing JSON data...++++');
    // console.log(userData);
    const users = JSON.parse(userData);
    
    // console.log(users['volunteers']);

    const volunteers = users['volunteers'];

    const user_idx = binarySearch(volunteers, userId);

    // console.log(user_idx, "user_idx");
    
    const user = volunteers[user_idx]

    // Extract the projects associated with the user

    // console.log(user,'user');
    if(user){
    console.log('Extracting projects...');
    
    const projects = user['projects'];

        // console.log(projects,'projects');
    return projects;
    } else {
        return ['User not found'];
    }
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid]['volunteer_id'] === target) {
            return mid;
        } else if (arr[mid]['volunteer_id'] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return -1;
}

// console.log(extractProjectsByUserId(1));
module.exports = {extractProjectsByUserId};

