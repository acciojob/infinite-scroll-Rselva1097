//your code here!

// Function to create and append a list item
function addListItem(content) {
    const list = document.getElementById('infi-list');
    const listItem = document.createElement('li');
    listItem.textContent = content;
    list.appendChild(listItem);
}

// Function to add initial list items
function addInitialItems() {
    for (let i = 1; i <= 10; i++) {
        addListItem(`Item ${i}`);
    }
}

// Function to add more list items
function addMoreItems() {
    const list = document.getElementById('infi-list');
    const currentItemCount = list.getElementsByTagName('li').length;
    for (let i = currentItemCount + 1; i <= currentItemCount + 2; i++) {
        addListItem(`Item ${i}`);
    }
}

// Check if the user has reached the end of the list
function checkScroll() {
    const list = document.getElementById('infi-list');
    if (list.scrollHeight - list.scrollTop === list.clientHeight) {
        addMoreItems();
    }
}

// Initialize the list with initial items
addInitialItems();

// Add scroll event listener to the list
document.getElementById('infi-list').addEventListener('scroll', checkScroll);
