document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const referrer = document.referrer;
  const googleDomains = ["google.com", "google.co.in", "google.co.uk"];
  
  // Check if the user has visited from Google in this session
  const cameFromGoogle = sessionStorage.getItem("cameFromGoogle");

  // Determine if the referrer is from Google
  const fromGoogle = googleDomains.some((domain) => referrer.includes(domain));

  // Set the session storage flag if the user is coming from Google
  if (fromGoogle) {
    sessionStorage.setItem("cameFromGoogle", "true"); // Set session storage flag
  } else {
    // If not coming from Google, clear the flag
    sessionStorage.removeItem("cameFromGoogle");
  }

  // Show the pop-up only if the user is not from Google and the session flag is not set
  if (!fromGoogle) {
    popup.classList.add("active"); // Show the pop-up
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
});
