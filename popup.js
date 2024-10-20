document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  // Check the referrer
  const referrer = document.referrer;
  const googleDomains = ["google.com", "google.co.in", "google.co.uk"];

  let fromGoogle = googleDomains.some((domain) => referrer.includes(domain));

  // If the visitor is from a direct link or not from Google, show the popup
  if (!fromGoogle && !referrer) {
    popup.classList.add("active");
  }

  // Close the popup on button click
  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});
