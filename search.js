document.addEventListener("DOMContentLoaded", function () {
    // Fetch the HTML content of 'anatomyp.html' using fetch API
    fetch("plugins/anatomyp.html")
        .then(response => response.text())
        .then(html => {
            // Extract keywords from the HTML content
            const keywords = extractKeywords(html);
            
            // Set up event listener for the search input
            const searchInput = document.getElementById("searchInput");
            searchInput.addEventListener("input", function () {
                const searchTerm = searchInput.value.toLowerCase();
                
                // Filter keywords based on the search term
                const filteredKeywords = keywords.filter(keyword => keyword.includes(searchTerm));
                
                // Display suggestions in the suggestion list
                displaySuggestions(filteredKeywords);
            });
        })
        .catch(error => console.error("Error fetching anatomyp.html:", error));
});

function extractKeywords(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const anchorElements = doc.querySelectorAll(".content-table td a");
    
    // Extract keywords from the anchor elements
    const keywords = Array.from(anchorElements).map(anchor => anchor.textContent.toLowerCase());
    
    return keywords;
}

function displaySuggestions(suggestions) {
    const suggestionList = document.getElementById("suggestionList");
    
    // Clear existing suggestions
    suggestionList.innerHTML = "";
    
    // Display new suggestions
    suggestions.forEach(suggestion => {
        const listItem = document.createElement("li");
        listItem.textContent = suggestion;
        suggestionList.appendChild(listItem);
    });
}
