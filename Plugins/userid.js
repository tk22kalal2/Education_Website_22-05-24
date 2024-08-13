window.onload = function() {
    const storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
        window.location.href = 'indexX.html'; // Redirect if no user.id is available
    }

    // Optionally, append the user.id to any internal link to ensure continuity
    const links = document.querySelectorAll('a[href$="index.html"]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('user.id')) {
            link.setAttribute('href', `${href}?user.id=${storedUserId}`);
        }
    });
};
