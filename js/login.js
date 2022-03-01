var check=function(){
    if(document.getElementById('name').value=="admin"&&document.getElementById('pass').value=="admin"){
        alert("login succeeded as admin :");
        location.href="index.html";
    }
    else if(document.getElementById('name').value==document.getElementById('pass').value){
        alert("login succeeded  :");
        location.href="index.html";
    }
    else {
        alert("password is invalid");
        location.href="login.html";
    }
}