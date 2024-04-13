function clearInputField() {
    document.getElementById("sending").reset();
}

function checkFirstName() {
    var first = document.getElementById("firstName").value;
    var regex = /^[а-яА-Я\s]{2,15}$/;

    if (regex.test(first)) {
        document.getElementById("firstname_check").style.color = "green";
        document.getElementById("firstname_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("firstname_check").style.color = "red";
        document.getElementById("firstname_check").innerHTML = "От 2 до 15 символов";
        return false;
    }
}

function checkLastName() {
    var last = document.getElementById("lastName").value;
    var regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(last)) {
        document.getElementById("lastname_check").style.color = "green";
        document.getElementById("lastname_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("lastname_check").style.color = "red";
        document.getElementById("lastname_check").innerHTML = "От 2 до 20 символов";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{2})-\d{2}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_check").style.color = "green";
        document.getElementById("phone_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("phone_check").style.color = "red";
        document.getElementById("phone_check").innerHTML = "Номер в формате ХХХ-ХХ-ХХ";
        return false;
    }
}

function checkDestination() {
    var dest = document.getElementById("destination").value;
    var regex = /^[а-яА-Я\s.,\d ]{5,50}$/;

    if (regex.test(dest)) {
        document.getElementById("destionation_check").style.color = "green";
        document.getElementById("destionation_check").innerHTML = "✓";
        return true;
    } else {
        document.getElementById("destionation_check").style.color = "red";
        document.getElementById("destionation_check").innerHTML = "От 5 до 50 символов";
        return false;
    }
}


function orderInformation() {
    let firstname = document.getElementById('firstName').value;
    let lastname = document.getElementById('lastName').value;
    var destination = document.getElementById("destination").value;
    let phone = document.getElementById('phone').value;
    let quantity = document.getElementById('quantity').value;

    if (firstname != '' && lastname != '' && phone != '' && quantity != '') {
        document.getElementById('orderSummary').innerHTML = 'Привет, ' + firstname + ' ' + lastname + ' !';
        document.getElementById("orderSummary").innerHTML += "<p>Ваш заказ успешно оформлен. Мы свяжемся с вами как можно скорее. Ниже вы можете ознакомиться с подробностями вашего заказа: </p>";
        document.getElementById("orderSummary").innerHTML += "Пункт назначения: " + destination + ".</br>";
        document.getElementById('orderSummary').innerHTML += '<p>Номер телефона: ' + phone + '.</p>';
        document.getElementById('orderSummary').innerHTML += '<p>Вы заказали : ' + quantity + ' штук.<br />';
        document.getElementById("orderSummary").innerHTML += "<p style='font-weight: bold;'>Спасибо, что Вы пользуетесь услугами нашей компании ☻ </p>";
    } else {
        document.getElementById('orderSummary').style.color = 'red';
        document.getElementById('orderSummary').innerHTML = 'Заполните все поля';
    }
    
    alert('Ваш заказ оформлен. Подробна иноформация на странице')

    const text = document.getElementById("hidden");
    text.style.display = "block";
}