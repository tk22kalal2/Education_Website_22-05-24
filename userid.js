window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user.id');

    if (!userId) {
        window.location.href = 'indexXX.html';
        return;
    }

    // Add user.id to all internal links
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Ensure the link is internal
        if (href && !href.includes('http') && !href.includes('user.id')) {
            if (href.includes('?')) {
                link.setAttribute('href', `${href}&user.id=${userId}`);
            } else {
                link.setAttribute('href', `${href}?user.id=${userId}`);
            }
        }
    });
};
