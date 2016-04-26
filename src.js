$(document).ready(function(){
  var breakLength = 1;
  var sessionLength = 1;
  var currentLength = "breakLength";
  var mySession;
  $("#bm").click(function(){
    $('#bval').val(function(){
      breakLength = breakLength - 1;
      return breakLength;
    });
  });
  $("#bp").click(function(){
    $('#bval').val(function(){
      breakLength = breakLength + 1;
      return breakLength;
    });
  });
  $("#sm").click(function(){
    $('#sval').val(function(){
      sessionLength = sessionLength - 1;
      return sessionLength;
    });
  });
  $("#sp").click(function(){
    $('#sval').val(function(){
      sessionLength = sessionLength + 1;
      return sessionLength;
    });
  });
  
  function checkTime(val) {
    if(val < 10){
      val = "0"+ val;
    }
    return val;
  }
   
  function clock(mins,secs) {
    var minutes = setInterval(myMins, 60000);
    var seconds = setInterval(mySecs, 1000);
    function myMins() {
      if(mins) {
        mins--;
        secs = 60;
      }
    }
    
    function mySecs() {
      if(mins == 0 && secs == 0) {
        var wav = 'http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3';
        var audio = new Audio(wav);
			  audio.play();
        clearInterval(minutes);
        clearInterval(seconds);
        toggle();
      }
      else {
        secs--;
        var mySession = mins + " : " + checkTime(secs);
        $("#timer").text(mySession);
      }
    }
  }
   
  $(".circle").click(function() {
    toggle();  
  });
  
  function toggle() {
    if(currentLength === "sessionLength") {
      currentLength = "breakLength";
      $("#current").text('Break!');
      clock(breakLength-1,60);
    }
    else {
      currentLength = "sessionLength";
      $("#current").text('Session');
      clock(sessionLength-1,60);
    }
  }  
});