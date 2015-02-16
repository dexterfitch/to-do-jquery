$(document).ready(function () {
  $('form#new-list').submit(function(event) {
    event.preventDefault();

    var inputTask = $('input#new-task').val();
    var newList = { task: inputTask };

    $('ul#tasks').append('<li><input type="checkbox" class="completed-task">' + ' ' + '<span class="task">' + newList.task + '</span></li>');

    $('input#new-task').val('');
  });

  $('form#list-items').submit(function(event) {
    event.preventDefault();
    
    $('#done-tasks h2').append();
    $('#done-tasks').show();
  });
});
