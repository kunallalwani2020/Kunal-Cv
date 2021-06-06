// save data in firebase 

function send(){
    var  name = document.getElementById('name');
    var email = document.getElementById('email');
    var Subject = document.getElementById('Subject');
    var message = document.getElementById('message');


   

    var data = {
        name: name.value,
        email: email.value,
        Subject: Subject.value,
        message: message.value,

        

    }
    //console.log(student)
    firebase.database().ref('Client Data').push(data)



  name.value="";
  email.value="";
  Subject.value="";
  message.value="";
}
