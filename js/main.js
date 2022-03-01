// var check=function(){
//     var fnamecheck = /^[A-Za-z. ]{3,20}$/;
//     if (fnamecheck.test(fname)) {
//         document.getElementById('usererror').innerHTML = "";
//       } else {
//         document.getElementById('usererror').innerHTML = "**User id is         invalid";
//         return false;
//       }
// }
const signUp = e => {
    let formData = {
        fname: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        pwd: document.getElementById('pwd').value,

        
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    // console.log(localStorage.getItem('formData'));
    dispData();
    e.preventDefault();
}

function dispData(){
    // console.log(localStorage.getItem('formData'));
    let {fname, email, pwd} = JSON.parse(localStorage.getItem('formData'));
    var output = document.getElementById('output');
    output.innerHTML = `
    
    <table>
        <tbody>
            <tr>
                <td>User Name</td>
                <td>${fname}</td>
            </tr>
           
            <tr>
                <td>Email Address</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>${pwd}</td>
            </tr>
        </tbody>
    </table>`;
}
dispData();
