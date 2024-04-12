

function Send(){

  
   var name = document.getElementById("Name").value;
   var email = document.getElementById("Email").value;
   var contact = document.getElementById("Contact").value;
   var sub = document.getElementById("subject").value;
   var mess = document.getElementById("message").value;

   var body = "Name: " + name + "<br/> Email:" + email + "<br/> Contact Number:" + contact + "<br/> Message:" + mess;
    
   console.log(body);
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "iiesolution.care@gmail.com",
      Password : "8269BD6F2B93EE47958059F8FF31BBCCEA40",
 To : '	info@iiesolution.com',
 From : "iiesolution.care@gmail.com",
 Subject : sub,
 Body : body
}).then(
    message =>{
        if(message=='OK'){

            swal("Successfully", "Your Data Successfully Received", "success");
        }
        else{

            swal("Something Wrong", "Your Data is not Received", "error");
        }
    }
  );
}
