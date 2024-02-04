const filePaths = require('./fileList'); // Adjust the path if necessary

document.addEventListener("DOMContentLoaded", function () {
    // Fetch all HTML files and process them
    Promise.all(filePaths.map(fetchFileContent))
        .then(htmlArray => {
            // Concatenate HTML content from all files
            const combinedHtml = htmlArray.join("");

            // Extract keywords and corresponding URLs
            const keywordsAndUrls = extractKeywordsAndUrls(combinedHtml);

            // Set up event listener for the search input
            const searchInput = document.getElementById("searchInput");
            searchInput.addEventListener("input", function () {
                const searchTerm = searchInput.value.toLowerCase();

                if (searchTerm === "") {
                    // If search term is empty, hide the suggestion list
                    hideSuggestions();
                } else {
                    // Filter keywords based on the search term
                    const filteredKeywordsAndUrls = keywordsAndUrls.filter(entry => entry.keyword.includes(searchTerm));

                    // Display suggestions in the suggestion list
                    displaySuggestions(filteredKeywordsAndUrls);
                }
            });
        })
        .catch(error => console.error("Error fetching HTML files:", error));
});
