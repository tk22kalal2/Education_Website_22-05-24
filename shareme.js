
  const shareBtn = document.querySelector("#shareBtn");
  const copyLinkBtn = document.querySelector("#copyLinkBtn");
  const linkToCopy = "https://telegram.me/testingclonepavo_bot";

  // Web Share API for Share Button
  shareBtn.addEventListener("click", (event) => {
    if (navigator.share) {
      navigator.share({
        title: "Nextpulse Official Website",
        url: linkToCopy
      })
      .then(() => {
        console.log("Thanks for sharing");
      })
      .catch((err) => {
        console.log("Error using the Web Share API:");
        console.log(err);
      });
    } else {
      alert("Browser doesn't support this Web Share API");
    }
  });

  // Copy Link Functionality
  copyLinkBtn.addEventListener("click", (event) => {
    navigator.clipboard.writeText(linkToCopy)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.log("Failed to copy the link:", err);
      });
  });
