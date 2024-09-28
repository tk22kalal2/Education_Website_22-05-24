document.addEventListener("DOMContentLoaded", function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user agent contains Telegram's in-app browser signature
    if (userAgent.includes("Telegram")) {
        // Redirect to the error page
        window.location.href = "error.html";
    }

    // Optionally, check the referrer for Telegram
    if (document.referrer && document.referrer.includes("t.me")) {
        // Redirect to the error page
        window.location.href = "error.html";
    }
});
