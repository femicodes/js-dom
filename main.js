let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');

// form submit
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems)

function addItem(e) {
    e.preventDefault();

    // get input value
    let newItem = document.querySelector('#item').value;
    
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e) {
    e.preventDefault();

    if (e.target.classList.contains('delete')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
    }
}

function filterItems(e) {
    e.preventDefault();

    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(item => {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}