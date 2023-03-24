var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var Filter=document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  ;var newItem = document.getElementById('item').value

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}
//remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){

    if(confirm('Are You Sure')){
      var li=e.target.parentElement;
      itemList.removeChild(li);
    }
    
  }
}

//filter Items
function filterItems(e){
  //convert text to lower case
  var text=e.target.value.toLowercase();
  //Get lis
  var items=itemList.getElementsByTagName('li');
  
  // convert to array
  Array.from(items).forEach(function(items){
    var itemName=items.firstChild.textCOntent;
    if(itemName.toLowercase().indexOf(text)!=-1){
      items.style.display='block';
    }
    else{
      items.style.display='none';
    }
    
  });
}
