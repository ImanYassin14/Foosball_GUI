var square_top = 130;
var blue_move = 0;
var red_move = 0;
var height = 15 ;
var blue_height = 0;

/* blue team 
     top : 1 
     bottom : 2   
   red team 
      top : 3
      bottom : 4
*/
function Blue(t1 , t2 ,t3 ){
              document.getElementById('playerB1d').style.top = t1 +'px';
              document.getElementById('playerB2d').style.top = t2 +'px';
              document.getElementById('playerB3d').style.top = t3 +'px'; 
                          
              document.getElementById('playerB1d').style.backgroundImage = "url(player_2.png)" ;
              document.getElementById('playerB2d').style.backgroundImage = "url(player_2.png)" ;
              document.getElementById('playerB3d').style.backgroundImage = "url(player_2.png)" ; 
                                        
              document.getElementById('playerB1f').style.top = t1 +'px';
              document.getElementById('playerB2f').style.top = t2 +'px';
              document.getElementById('playerB3f').style.top = t3 +'px';    
              
              document.getElementById('playerB1f').style.backgroundImage = "url(player_2.png)" ;
              document.getElementById('playerB2f').style.backgroundImage = "url(player_2.png)" ;
              document.getElementById('playerB3f').style.backgroundImage = "url(player_2.png)" ; 
 }

function Red(t1,t2,t3) {
              document.getElementById('playerR1d').style.top = t1 +'px';
              document.getElementById('playerR2d').style.top = t2 +'px';
              document.getElementById('playerR3d').style.top = t3 +'px';
              
              document.getElementById('playerR1d').style.backgroundImage = "url(player1_2.png)";
              document.getElementById('playerR2d').style.backgroundImage = "url(player1_2.png)";
              document.getElementById('playerR3d').style.backgroundImage = "url(player1_2.png)";
              
              document.getElementById('playerR1f').style.top = t1 +'px';
              document.getElementById('playerR2f').style.top = t2 +'px';
              document.getElementById('playerR3f').style.top = t3 +'px';
              
              document.getElementById('playerR1f').style.backgroundImage = "url(player1_2.png)";
              document.getElementById('playerR2f').style.backgroundImage = "url(player1_2.png)";
              document.getElementById('playerR3f').style.backgroundImage = "url(player1_2.png)";
 }
function BlueMoveTop(x) {                
   var i = 0;
   var h =0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_top) {
       clearInterval(id);
     } else {
           i++; 
           h += 0.11;
           blue_move = x - i ;
           document.getElementById('defenceB').style.bottom = blue_move +'px';
           document.getElementById('forwardsB').style.bottom = blue_move +'px';
           if (x == 0 ){
              blue_height = 80 + h ;
              document.getElementById('defenceB').style.height = blue_height +'%';
              document.getElementById('forwardsB').style.height = blue_height +'%';
              Blue(155,285,420);                     
           }else if (x == 130){
              blue_height = 94.3 - h ;
              document.getElementById('defenceB').style.height = blue_height +'%';
              document.getElementById('forwardsB').style.height = blue_height +'%';   
              Blue(110,240,375);             
           }
       }
     }
   }
function BlueMoveBottom(x) {                
   var i = 0;
   var h = 0 ;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_top) {
       clearInterval(id);
     } else {
       i++; 
       h += 0.11;
       blue_move = x + i ;
       document.getElementById('defenceB').style.bottom = blue_move +'px';
       document.getElementById('forwardsB').style.bottom = blue_move +'px';
       if (x == 0 ){
              blue_height = 80 + h ;
              document.getElementById('defenceB').style.height = blue_height +'%';
              document.getElementById('forwardsB').style.height = blue_height +'%';
              Blue(155,285,420);
       }else if (x == -130){
              blue_height = 94.3 - h ;
              document.getElementById('defenceB').style.height = blue_height +'%';
              document.getElementById('forwardsB').style.height = blue_height +'%';  
              Blue(110,240,375);            
       }       
     }
   }
  }
function RedMoveTop(x) {                
   var i = 0;
   var h = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_top) {
       clearInterval(id);
     } else {
       i++; 
       h += 0.11;
       red_move = x - i ;
       document.getElementById('defenceR').style.top = red_move +'px';
       document.getElementById('forwardsR').style.top = red_move +'px';
       if (x == 0 ){
              blue_height = 80 + h ;
              document.getElementById('defenceR').style.height = blue_height +'%';
              document.getElementById('forwardsR').style.height = blue_height +'%';
              Red(165,300,430);
       }else if (x == 130){
              blue_height = 94.3 - h ;
              document.getElementById('defenceR').style.height = blue_height +'%';
              document.getElementById('forwardsR').style.height = blue_height +'%';  
              Red(120,250,385);            
       } 
     }
   }
 }
function RedMoveBottom(x) {                
   var i = 0;
   var h = 0;
   var id = setInterval(frame, 5);
   function frame() {
     if (i >= square_top) {
       clearInterval(id);
     } else {
           i++; 
           h += 0.11;
           red_move = x + i ;
           document.getElementById('defenceR').style.top = red_move +'px';
           document.getElementById('forwardsR').style.top = red_move +'px';
       if (x == 0 ){
              blue_height = 80 + h ;
              document.getElementById('defenceR').style.height = blue_height +'%';
              document.getElementById('forwardsR').style.height = blue_height +'%';
              Red (165,300,430);
       }else if (x == -130){
              blue_height = 94.3 - h ;
              document.getElementById('defenceR').style.height = blue_height +'%';
              document.getElementById('forwardsR').style.height = blue_height +'%';  
               Red(120,250,375);           
       } 
     }
   }
 }

function stick(direction1,y1,direction2,y2){ 
  pos_B = parseInt(y1 , 10);
  pos_R = parseInt(y2 , 10);
  
        if (direction1 == 1){ //  blue top 
          BlueMoveTop(pos_B);
        }
        if (direction1 == 2){  // blue bottom
            BlueMoveBottom(pos_B);
        }
        if (direction2 == 3){ // red top 
            RedMoveTop(pos_R);
        }
        if (direction2 == 4){ // red bottom
            RedMoveBottom(pos_R);
        }
    }