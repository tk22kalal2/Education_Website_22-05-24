window.onload = function() {
    // Extract user.id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user.id'); // Check for Telegram user id

    // Check if user.id is present in the URL
    if (userId) {
        // Redirect to indexx.html if user.id is found
        window.location.href = 'indexx.html';
    } else {
        // If no user.id is found, proceed with normal functionality (index.html)
        // Optional: You can leave the current page as it is without redirect
        // OR redirect to a different page if necessary
        console.log("No Telegram user.id found, loading site normally.");
    }

    // You can continue the rest of your logic here if needed
};
