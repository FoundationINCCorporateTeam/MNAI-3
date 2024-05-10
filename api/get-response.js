// get-response.js

// Function to make a GET request to the API endpoint
async function fetchResponse() {
    try {
        const response = await fetch('/api/get-response');
        if (!response.ok) {
            throw new Error('Failed to fetch response');
        }
        const data = await response.json();
        // Process the response data here
        console.log(data);
    } catch (error) {
        console.error('Error fetching response:', error.message);
    }
}

// Call the fetchResponse function to make the request
fetchResponse();
