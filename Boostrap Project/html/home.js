function sendEnquiry(){
    let params = {
        name : document.getElementById("fname").value,
        email : document.getElementById("mail").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_1rnd8v2","template_w1557uk",params).then(alert("Email has Been Sent!!"));
}

document.addEventListener("DOMContentLoaded",function(){
    const btn = document.getElementById("submit");
    const btnNews = document.getElementById("newsBtn");

    btnNews.addEventListener("click",function(){
        let name = document.getElementById("nameNews");
        let email = document.getElementById("emailNews");
        let error = document.getElementById("errorMessageNews");
        if(name.value === "" || email.value === ""){
            let errorMessage = "ERROR:Cannot leave empty spaces!";
            error.textContent = errorMessage;
            return;
        }else{
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(email.value)) {
                    error.textContent = "ERROR: Invalid email format!";
                    return;
                }else{
                    error.textContent = "";
                    alert("FORM SUBMITTED");
                    name.value = "";
                    email.value = "";
                    return;
                }
        }
    });

    btn.addEventListener("click",function(){
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let num = document.getElementById("number");
        let mail = document.getElementById("mail");
        let message = document.getElementById("message");
        if(fname.value === "" || lname.value === "" || isNaN(parseInt(num.value)) || mail.value === "" || message.value === ""){
            let error = "ERROR:Cannot leave empty spaces!";
            let errorMessage = document.getElementById("errorMessage");
            errorMessage.textContent = error;
            return;
        }else{
            if(parseInt(num.value)<0){
                let error = "ERROR:Cannot have negative Numbers!";
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.textContent = error;
                return;
            }else{
                let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(mail.value)) {
                    errorMessage.textContent = "ERROR: Invalid email format!";
                    return;
                }else{
                    errorMessage.textContent = "";
                    sendEnquiry();
                    fname.value = "";
                    lname.value = "";
                    num.value = "";
                    mail.value = "";
                    message.value = "";
                    return;
                }
            }
        }
    });
});