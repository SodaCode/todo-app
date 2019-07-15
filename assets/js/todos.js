//Check off Todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click on X to remove todo
$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //new todo text
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add it to ul
    $("ul").append("<li><span><i class='fa fa-trash '></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});