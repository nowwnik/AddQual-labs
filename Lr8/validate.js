function clearInputField() {
    document.getElementById("sending").reset();
}

function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[а-яА-Я\s]{2,15}$/;

    if (regex.test(first)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "От 2 до 15 символов";
        return false;
    }
}

function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(last)) {
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "От 2 до 20 символов";
        return false;
    }
}

function checkDest() {
    var dest = document.getElementById("dest").value;
    var regex = /^[а-яА-Я\s.,\d ]{5,50}$/;

    if (regex.test(dest)) {
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "От 5 до 50 символов";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{2})-\d{2}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Некорректный номер";
        return false;
    }
}

function outputData() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var dest = document.getElementById("dest").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;
    var quantity = document.getElementById("quantity").value;
    var paymethod = document.getElementById("paymethod").value;

    if (first !== "" && last !== "" && dest !== "" && phone !== "" && date !== "" && time !== "" && quantity !== "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Привет, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Ваш заказ успешно оформлен. Мы свяжемся с вами как можно скорее. Ниже вы можете ознакомиться с подробностями вашего заказа: </p>";
        document.getElementById("summary").innerHTML += "<p>Номер телефона: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Пенкт назначения: " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Дата и время: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Количество персон: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Способ оплаты: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Спасибо, что Вы пользуетесь услугами нашей компании ☻ </p>";
    } else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Заполните все поля";
    }

    const text = document.getElementById("hidden");
    text.style.display = "block";
}