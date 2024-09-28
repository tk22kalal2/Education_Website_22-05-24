window.onload = function() {
      var ua = navigator.userAgent || navigator.vendor || window.opera;

      // Detect Telegram in-app browser
      if (ua.indexOf('Telegram') > -1) {
        // You can either show a message or force the user to open in another browser
        alert("Please open this website in an external browser like Chrome or Safari.");
        
        // Optionally, automatically redirect to an external browser link
        window.location.href = "https://externalbrowserlink.com";
      }
    }
