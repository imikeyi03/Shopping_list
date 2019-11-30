$(function() {

//First I need to remove the default submit button behavior
$('#js-shopping-list-form').submit(event => {
    event.preventDefault();

//Now I need to create a new <li> inside the shopping list <ul class="shopping-list"
//when there is an item inside the input box

const userListItem = $(this).find('#shopping-list-entry').val();


//Crate a new li in shopping list following a similar naming convention
//to the other li in the div 
$('.shopping-list').prepend(
    `<li>
      <span class="shopping-item">${userListItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);

//clear input to add another list item

$('#shopping-list-entry').val('');

    });
});