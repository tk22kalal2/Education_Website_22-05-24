// Teacher data for search suggestions
const teachers = [
    { name: 'Dr. Govind Rai Garg', page: 'Plugins/pharmacologycb.html' },
    { name: 'Dr. Deepak Mehrah', page: 'Plugins/medicinep6.html' }
];

function showSuggestions() {
    const input = document.getElementById('teacherSearchInput').value.toLowerCase();
    const suggestionList = document.getElementById('teacherSuggestionList');
    suggestionList.innerHTML = ''; // Clear previous suggestions

    if (input) {
        teachers.forEach(teacher => {
            if (teacher.name.toLowerCase().includes(input)) {
                const listItem = document.createElement('li');
                listItem.textContent = teacher.name;
                listItem.onclick = () => {
                    window.location.href = teacher.page;
                };
                suggestionList.appendChild(listItem);
            }
        });
    }
}
