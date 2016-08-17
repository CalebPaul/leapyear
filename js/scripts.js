$(document).ready(function() {
  $("#leap_form").submit(function(event) {
    var msgText="";
    var year=parseInt($("#year").val());
    if(leapyear(year)) {
      msgText="Yes it is a leap year. Jump for joy!";
    } else {
      msgText="No, it is not leap year, there will be no birthday party. :(";
    }
    $("#leap_results").text(msgText);
    event.preventDefault();
  });
});

function leapyear(year) {
  if (year%400===0) {
    return true;
  } else if (year%100===0) {
    return false;
  } else if (year%4===0) {
    return true;
  } else {
    return false;
  }
}
