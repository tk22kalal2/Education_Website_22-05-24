document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const referrer = document.referrer;
  const googleDomains = ["google.com", "google.co.in", "google.co.uk"];

  let fromGoogle = googleDomains.some((domain) => referrer.includes(domain));

  // If the visitor is from a direct link or not from Google, show the pop-up
  if (!fromGoogle && !referrer) {
    popup.classList.add("active");
    document.body.classList.add("popup-active"); // Disable background scroll
  }
});
