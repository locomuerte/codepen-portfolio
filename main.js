var obraz = document.getElementById("headerImg2");
var portfolioImg = document.getElementById("portfolioImg1");
var obrazki = portfolioImg.querySelectorAll("img");

obraz.addEventListener("mouseover", blurA);



function blurA (){

    if (obraz.className === "blur"){

        obraz.className = "";
    }else {

        obraz.className = "blur";
    }
}

for (var i = 0; i < obrazki.length; i ++){

    obrazki[i].addEventListener("mouseover", blurB);
}

function blurB (){

    if(this.className === "pImg"){

        this.classList.toggle("blur");

    }else {

        this.classList.toggle("blur");
    }
};


var labelName = document.getElementById("labelName");
var labelEmail = document.getElementById("labelEmail");
var labelNumber = document.getElementById("labelNumber");
var labelMessage = document.getElementById("labelMessage");

var nameInput = document.getElementById("name");
nameInput.addEventListener("input", myFunc)

var emailInput = document.getElementById("email");
emailInput.addEventListener("input", myEmail)

var numberInput = document.getElementById("phoneNumber");
numberInput.addEventListener("input", myNumber);

var messageInput = document.getElementById("message");
messageInput.addEventListener("input", myMessage);

function myFunc (){

    console.log("name");
    labelName.style.fontSize = "20px";
    labelName.style.color = "#800080";
    labelName.innerHTML = "Name";
}

function myEmail (){

    console.log("email");
    labelEmail.style.fontSize = "20px";
    labelEmail.style.color = "#800080";
    labelEmail.innerHTML = "Email";
}

function myNumber (){

    console.log("number");
    labelNumber.style.fontSize = "20px";
    labelNumber.style.color = "#800080";
    labelNumber.innerHTML = "Number";
}

function myMessage (){

    console.log("message");
    labelMessage.style.fontSize = "20px";
    labelMessage.style.color = "#800080";
    labelMessage.innerHTML = "Message";
}
