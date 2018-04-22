/* Click outside of the menu to close it while in mobile*/

$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});

