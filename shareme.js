
  const shareBtn = document.querySelector("#shareBtn");

  shareBtn.addEventListener("click", (event) => {
    if (navigator.share) {
      navigator.share({
        title: "Nextpulse Official Website",
        url: "https://telegram.dog/testingclonepavo_bot"
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
