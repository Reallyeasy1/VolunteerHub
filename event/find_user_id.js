const fs = require('fs').promises;

export async function findUserId(username){
    // Read the user_data.json file
    
    const userData = await fs.readFile('src/api/volunteer_id.json', 'utf8');

    // Parse the JSON data
    
    const users = JSON.parse(userData);

    return users[username];
    
  }
