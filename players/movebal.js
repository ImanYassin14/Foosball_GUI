var square_height = 67;
var square_width = 78.8;
var move_left = 0;
var move_right = 0
var move_top = 0 ;
var move_bottom = 0 ; 
var x = 0 ;
var y=0;

var dist = Math.sqrt((Math.pow(square_height,2))+(Math.pow(square_width,2)));

function myMoveright(x,y) {                
   var i = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_width) {
       clearInterval(id);
     } else {
       i++; 
       move_right  = x + i;
       if( move_right > 1050 ) move_right = 636;
      document.getElementById('ball').style.left = move_right +'px';
      document.getElementById('ball').style.top = y +'px';
     }
   }
  }
function myMoveleft(x,y) {                
  
   var i = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_width) {
       clearInterval(id);
     } else {
       i++; 
       move_left  = x - i;
      if(move_left < 200) move_left = 636;
      document.getElementById('ball').style.left = move_left +'px';
      document.getElementById('ball').style.top = y +'px';
     }
   }
  }

function myMoveTopLeft(x,y,angle) {                
   var i = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_width) {
       clearInterval(id);
     } else {
       i++; 
      move_left = x - (dist*Math.cos(angle)) ;
      move_top = y -  (dist*Math.abs(Math.sin(angle))) ;
      if(move_left < 200 || move_top < 75) { move_left = 636; move_top = 296; }
     document.getElementById('ball').style.left = move_left +'px';
     document.getElementById('ball').style.top = move_top +'px';
     }
   }
  } 
function myMoveTopRight(x,y,angle) {                
   var i = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_width) {
       clearInterval(id);
     } else {
       i++; 
      move_right = x + (dist*Math.cos(angle)) ;
      move_top = y -  (dist*Math.abs(Math.sin(angle))) ;
       if( move_right > 1050 || move_top < 75 ) { move_right = 636; move_top = 296; }
     document.getElementById('ball').style.left = move_right +'px';
     document.getElementById('ball').style.top = move_top +'px';
     }
   }
  } 
  
function myMoveBottomLeft(x,y,angle) {                
   var i = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_width) {
       clearInterval(id);
     } else {
       i++; 
      move_left = x - (dist*Math.cos(angle)) ;
      move_bottom = y  +  (dist*Math.abs(Math.sin(angle))) ;
      if(move_left < 200 || move_bottom > 520  ) {move_left = 636; move_bottom = 296;}
     document.getElementById('ball').style.left = move_left +'px';
     document.getElementById('ball').style.top = move_bottom +'px';
     }
   }
  } 


function myMoveBottomRight(x,y,angle) {   
               
   var i = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_width) {
       clearInterval(id);
     } else {
       i++; 
      move_right = x + (dist*Math.cos(angle)) ;
      move_bottom = y +  (dist*Math.abs(Math.sin(angle)) );
       if( move_right > 1050 || move_bottom > 520 ) { move_right = 636; move_bottom = 296;}
     document.getElementById('ball').style.left = move_right +'px';
     document.getElementById('ball').style.top = move_bottom + 'px';
     }
   }
  } 



function ball(direction , pos_x , pos_y , angle ) {
  x = parseInt(pos_x , 10);
  y = parseInt(pos_y , 10);
  
  if(direction == 1 ){    // 1 move left one square 
     myMoveleft(x,y)
  }
  if(direction == 2){ // 2 move right one square 
       
       myMoveright(x,y);
 } 
  if(direction == 3){  // 3 move  top left
      myMoveTopLeft(x,y,angle);
  }
  if(direction == 4){
    myMoveBottomLeft(x,y,angle);   // 4 move bottom  left 
  }
  if(direction == 5){   // 5 move top right 
      myMoveTopRight(x,y,angle);
  }
  if(direction == 6){   // 6 move bottom right
      myMoveBottomRight(x,y,angle);
  }
}




