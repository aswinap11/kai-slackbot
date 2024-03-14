const { fetchDataFromDatabase } = require('./database');
// const { prompts } = require('./prompts');

const reqRes = async (app) => {
  const port = 3000;

  app.message(async ({ message, say, client }) => {
    try {

      //Get client userId and username
      const userInfo = await client.users.info({
        user: message.user,
        include: ['users.profile.email'],
      });
      const userName = userInfo.user.real_name || userInfo.user.name;
      const userEmail = userInfo.user.profile.email;

      //Fetch from DB, all users with this name
      const results = await fetchDataFromDatabase(userName);
      caller = results[0].emp_team;


      const codeRegex = /```(?:\w+\n)?([\s\S]+?)\n```/;
      const codeMatch = message.text.match(codeRegex);
    
      if (codeMatch) {
        const codeBlock = codeMatch[1];
        const processedCode = processCode(codeBlock);
        await say(`You provided the following code:\n${processedCode}`);
      }
      function processCode(code) {
        return `Processed Code:\n${code}`;
      }
    
      // switch(caller){
      //   case  1:
      //       say('dev call');
      //       //API CALL with
      //       // var promptt = prompts.devPrompt.text
            // const promptToModel = `${promptt} : ${message.text}`
      //       break;
      //   case 2:
      //       say('qa call');
      //       break;
      //   case 3:
      //       say('guest call');
      //       break;
      //   default :
      //       say('normal call');
      // }

      // Define the URL of the API endpoint
    const apiUrl = 'https://x8b6ozpxld.execute-api.us-west-2.amazonaws.com/default/askSomething';

    // Define the data to be sent in the request body
    const postData = {
      prompt: message.text,
    };

    // Make a POST request using the fetch() method
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify the content type as JSON
      },
      body: JSON.stringify(postData) // Convert the data to JSON string
    })
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        data = 
          {
            "text": data, 
            "blocks": [ 
              {
                "type": "section",
                "text": {
                  "type": "mrkdwn",
                  "text": data
                }
              }
            ]
          }
          say(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch operation
        console.error('There was a problem with the fetch operation:', error);
      });

   
    


    // await say(`Hello ${userName}, you're ${userEmail} and from Team DEV Team`);




    } catch (error) {
      console.log('err');
      console.error(error);
    }
  });
  await app.start(port);
  console.log('Slack Bot Connected!!');
};

module.exports = { reqRes };
