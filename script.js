$(function() {
  $('span.test').click(function () {
    var test = $(this).parent().parent();
    var e = test.find('input').val();
    var a = 'aho';
});
  
});