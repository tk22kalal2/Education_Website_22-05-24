
        // JavaScript function to check if user.id is present in the URL
        window.onload = function() {
            // Get the URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const userId = urlParams.get('user.id');

            // Check if user.id exists
            if (!userId) {
                // Redirect to indexX.html if user.id is missing
                window.location.href = 'indexXX.html';
            }
        };
    
