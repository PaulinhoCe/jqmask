/* Number mask: $(this).mask("##/##/####")
   http://gogs.com.br */
$.fn.extend({
  mask: function(string) {
    var value = "";

    if (window.event.keyCode >= 48 && window.event.keyCode <= 57) {
      var i = $(this).val().length;
      var text = string.substring(i);
      if (text.substring(0,1) != string.substring(0,1)) {
        value += text.substring(0,1);
      }
      $(this).val($(this).val() + value);
    } else {
      value = $(this).val();
      $(this).val(value.substring(0,value.length - 1));
    };
  }
});
