var blogFilterButtons = document.getElementsByClassName("blog-list-filter");
var allButton = document.getElementById("all-filter");

$('#all-filter').on('click', function () {
  let buttons = blogFilterButtons;

  $('.post').collapse('show');

  this.classList.remove("btn-outline-primary");
  this.classList.add("btn-primary");

  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("btn-outline-primary");
    buttons[i].classList.add("btn-primary");
  }
});

$('button.blog-list-filter').on('click', function() {
  let target = ".collapse" + this.getAttribute('filtertarget');
  console.log('target: ' + target);
  let buttons = blogFilterButtons;

  $('.post').collapse('hide');
  $('.post').on('hidden.bs.collapse', function() {
    $(target).collapse('show');
  });

  allButton.classList.remove("btn-primary");
  allButton.classList.add("btn-outline-primary");
  this.classList.remove("btn-outline-primary");
  this.classList.add("btn-primary");

  for (i = 0; i < buttons.length; i++) {
    if (buttons[i] != this) {
      buttons[i].classList.remove("btn-primary");
      buttons[i].classList.add("btn-outline-primary");
    }
  }
});
