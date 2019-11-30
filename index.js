$(function() {

//First I need to remove the default submit button behavior
$('#js-shopping-list-form').submit(event => {
    event.preventDefault();

//Now I need to create a new <li> inside the shopping list <ul class="shopping-list"
//when there is an item inside the input box (added required to input box)

const userListItem = $(this).find('#shopping-list-entry').val();

//Crate a new li in shopping list following a similar naming convention
//to the other li in the div thats prepended to the top of the list using
//the text gathered from the input box

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

//clear input to an empty string to add another list item

$('#shopping-list-entry').val('');

});


//Looks at the parent ul shopping list and on clicking the delete button,
//it looks for the closest list item element and removes it
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {

   $(this).closest('li').remove();
});


//Looks at the parent shopping list class and on a click of the
//shopping-item-delete button, we look at the closest li element
//to where we clicked, find the .shopping-item span class, and toggleClass
//the shopping-item-_checked class to add the line through
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });







//END    
});