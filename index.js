//add item
//inturupt form submission
$("#js-shopping-list-form").submit(
    event => {
        event.preventDefault();

         let newItemName = $("#shopping-list-entry").val();
       addItem(newItemName)
    }
)

function addItem(newItemName) {
    let item = $(`<li>
    <span class="shopping-item">${newItemName}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);  

  //setUpClickEvents(item);

  $(".shopping-list").append(item);
}

// function setUpClickEvents(item) {
//     let checkButton = item.find(".shopping-item-toggle")[0];
//     $(checkButton).on("click", function() {
//         $(item.find(".shopping-item")[0]).toggleClass("shopping-item__checked");
//     });


//     // add delete button
//     let deleteButton = item.find(".shopping-item-delete")[0];
//     $(deleteButton).on("click", function() {
//         $(item).remove();

//     })


// run setup click event on existing items 
$("ul").on('click', '.shopping-item-toggle', function(event){
    let liParent = $(this).closest('li')[0];
    let itemText = $(liParent).find('.shopping-item')[0];
    $(itemText).toggleClass("shopping-item__checked");
})


//delete
$("ul").on('click', '.shopping-item-delete', function(event) {
    let parent = $(this).closest('li')[0];
    $(parent).remove();
})
