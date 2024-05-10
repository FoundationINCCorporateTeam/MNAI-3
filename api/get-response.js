// get-response.js

// Function to make a POST request to the Flask API endpoint
async function fetchResponse(question) {
    try {
        const response = await fetch('/api/get-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch response');
        }

        const responseData = await response.json();
        // Process the response data here
        console.log(responseData);
    } catch (error) {
        console.error('Error fetching response:', error.message);
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the value of the question input
    const questionInput = document.getElementById('question');
    const question = questionInput.value.trim();
    
    // Call fetchResponse function with the question
    fetchResponse(question);
}

// Add event listener to the form for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});
