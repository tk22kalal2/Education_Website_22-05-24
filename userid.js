window.onload = function() {
    // Detect Telegram's in-app browser using the user agent string
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is using Telegram's in-app browser
    if (userAgent.toLowerCase().includes("telegram")) {
        // If Telegram browser is detected, redirect to indexx.html
        window.location.href = 'indexx.html';
        return; // Stop further execution to ensure redirection happens
    }

    // Continue with normal website logic if not Telegram browser
    // For example, handling user.id in URL or localStorage

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user.id');

    if (userId) {
        localStorage.setItem('userId', userId); // Store user.id in localStorage
    } else {
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
            // No user.id found, but do NOT redirect here, keep the user on the site
            console.log("No user.id found, but not redirecting.");
        }
    }

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
