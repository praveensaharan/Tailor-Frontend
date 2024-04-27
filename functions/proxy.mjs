// netlify/functions/proxy.mjs

import axios from "axios";

// Define the handler function
const handler = async (event) => {
  try {
    // Make a request to the external API
    const response = await axios({
      method: event.httpMethod,
      url:
        "http://bestfit-env.eba-bevw7y45.us-east-1.elasticbeanstalk.com" +
        event.path,
      headers: event.headers,
      data: event.body,
    });

    // Return the response from the external API
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    // Return an error response if the request to the external API fails
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

// Export the handler function as default
export default handler;
