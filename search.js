document.addEventListener("DOMContentLoaded", function () {
    // Fetch all HTML files in the "plugins" folder with ".html" extension
    fetchHtmlFiles("plugins/*.html")
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

function fetchHtmlFiles(globPattern) {
    // Fetch all HTML files matching the glob pattern using fetch API
    return fetch(globPattern)
        .then(response => response.text())
        .catch(error => console.error("Error fetching HTML files:", error));
}

function extractKeywordsAndUrls(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const anchorElements = doc.querySelectorAll(".content-table td a");

    // Extract keywords and corresponding URLs from the anchor elements
    const keywordsAndUrls = Array.from(anchorElements).map(anchor => {
        return {
            keyword: anchor.textContent.toLowerCase(),
            url: anchor.getAttribute("href")
        };
    });

    return keywordsAndUrls;
}

function displaySuggestions(suggestions) {
    const suggestionList = document.getElementById("suggestionList");

    // Clear existing suggestions
    suggestionList.innerHTML = "";

    // Display new suggestions
    suggestions.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.textContent = entry.keyword;

        // Add click event listener to redirect to the URL when clicked
        listItem.addEventListener("click", function () {
            window.open(entry.url, "_blank");
        });

        suggestionList.appendChild(listItem);
    });
}

function hideSuggestions() {
    const suggestionList = document.getElementById("suggestionList");

    // Clear existing suggestions
    suggestionList.innerHTML = "";
}
