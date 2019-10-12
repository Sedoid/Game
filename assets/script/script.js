//alert('Js is running');

window.onload=function(){
    let runner = document.querySelector('#runner img');
   window.scrollBy(-100, 0); // Scroll 100px downwards
let move = 10;
  this.onkeypress=(event)=>{ 
      if(runner.getAttribute('src')=='assets/images/running/stance.gif'){
                runner.setAttribute('src','assets/images/running/runryurun.gif');
            let begin_message = document.querySelector('section:first-child aside');
            begin_message.style.display = 'none';
      };
     
       //alert(this);
       console.log(event.keyCode);
        move+=20;
       
         window.scrollTo(500,0);  
      runner.style.left=  `${move}px`; 
      
       //runner.style.transitionDuration= "0.01s";
  
    }

;

} 
  