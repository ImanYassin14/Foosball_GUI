$(document).ready(function () {
  //  setInterval(function(){ 
       $.ajax({
                 data: {
                      position_x : $('#ball').css("left"),
                      position_y : $('#ball').css("top")
                 },
                 type : 'POST',
                 url : '/process',
                 success: function(data) {
                      if (typeof timy == "undefined")
                          $.getScript('movebal.js', function() {
                                 ball(data.direction , data.x , data.y , data.angle );
                          });
                      }
                  });
     //        }, 2000);
});
$(document).ready(function () {
   // setInterval(function(){ 
       $.ajax({
                 data: {
                      blue_stick : $('#defenceB').css("bottom"),
                      red_stick  : $('#defenceR').css("top")
                 },
                 type : 'POST',
                 url : '/stick',
                 success: function(data) {
                      if (typeof timy == "undefined")
                          $.getScript('movestick.js', function() {
                                 stick(data.stick_dirB , data.posB, data.stick_dirR , data.posR);
                          });
                      }
                  });
    //        }, 2000);
});