window.onload = function() {
    // Detect if the user is coming from Telegram
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (userAgent.includes('Telegram')) {
        // Redirect to indexx.html if opened from Telegram
        window.location.href = 'indeXx.html';
        return; // Stop further execution
    }

    // Regular logic for handling userId
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
