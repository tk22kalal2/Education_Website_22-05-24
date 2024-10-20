document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const referrer = document.referrer;
  const googleDomains = ["google.com", "google.co.in", "google.co.uk"];

  // Check if the user has visited from Google in this session
  const cameFromGoogle = sessionStorage.getItem("cameFromGoogle");

  // If they haven't been to the site from Google and the referrer is not from Google
  let fromGoogle = googleDomains.some((domain) => referrer.includes(domain));

  if (fromGoogle) {
    sessionStorage.setItem("cameFromGoogle", "true"); // Set session storage
  }

  // Show the pop-up only if they did not come from Google in this session
  if (!cameFromGoogle) {
    popup.classList.add("active");
    document.body.classList.add("popup-active"); // Disable background scroll
  }
});
