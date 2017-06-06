var interval;

function execute(clicked_id)
{
   var txtbx1 = document.getElementById('text1'),
    txtbx2 = document.getElementById('text2');

  if(interval){
    clearInterval(interval);
  }


switch(clicked_id)
 {
   case 'f':
    interval = setInterval(function(){
      
      var len= txtbx1.value.length;          
        if(len!=0){
      txtbx2.value += txtbx1.value.charAt(0);
      txtbx1.value = txtbx1.value.substr(1,len);}
        else{
             clearInterval(interval);
        }
        
    },1000);
    
   break;
     
   case 'r':
     interval = setInterval(function(){
     
         var len1= (txtbx2.value.length)-1;
		 console.log(len1);
         if(len1>=0){    
         txtbx1.value = txtbx2.value.charAt(len1) + txtbx1.value;
         txtbx2.value = txtbx2.value.substr(0,len1);}
          else{
             clearInterval(interval);
        }
          
         
    },1000);
     
    break;
     
 }
}
