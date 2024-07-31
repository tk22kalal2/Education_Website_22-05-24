document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                alert("Screenshots are not allowed!");
            }
        });

        window.addEventListener('blur', function() {
            alert("Screenshots are not allowed!");
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === "PrintScreen") {
                event.preventDefault();
                alert("Screenshots are not allowed!");
            }
        });

        document.addEventListener('keyup', function(event) {
            if (event.key === "PrintScreen") {
                navigator.clipboard.writeText('')
                .then(() => {
                    alert('Screenshots are not allowed!');
                });
            }
        });
