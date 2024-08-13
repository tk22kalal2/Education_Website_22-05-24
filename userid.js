window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user.id');

    if (!userId) {
        window.location.href = 'indexX.html';
        return;
    }

    // Add user.id to all links leading to index.html
    const links = document.querySelectorAll('a[href$="index.html"]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        link.setAttribute('href', `${href}?user.id=${userId}`);
    });

    // If needed, handle other initialization logic here
};
