window.onload = function() {
    // Detect if the user is coming from Telegram's in-app browser
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is using Telegram's in-app browser
    if (userAgent.includes('Telegram')) {
        // Redirect to indexx.html if opened from Telegram browser
        window.location.href = 'indexx.html';
        return; // Stop further execution to ensure redirection happens
    }

    // Continue with the rest of the functionality for non-Telegram users
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user.id');

    if (userId) {
        localStorage.setItem('userId', userId); // Store user.id in localStorage
    } else {
        const storedUserId = localStorage.getItem('userId');
        // Remove or comment out the redirect logic
        // if (!storedUserId) {
        //     window.location.href = 'index.html'; // Redirect if no user.id is available
        //     return;
        // }
    }

    // Now you can use userId or storedUserId as needed
    const activeUserId = userId || localStorage.getItem('userId');

    // Optional: Add user.id to all internal links
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Ensure the link is internal and not already containing user.id
        if (href && !href.includes('http') && !href.includes('user.id')) {
            if (href.includes('?')) {
                link.setAttribute('href', `${href}&user.id=${activeUserId}`);
            } else {
                link.setAttribute('href', `${href}?user.id=${activeUserId}`);
            }
        }
    });
};
