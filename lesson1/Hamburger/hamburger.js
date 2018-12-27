"use strict";

function Hamburger(size, stuffing) {
    //Переменная для смены окружения
    var _this = this;

    //Массив с данными о Начинках
    this.topping = [];

    //Константы Гамбургера
    this.SIZE_SMALL = [50, 20];
    this.SIZE_LARGE = [100, 40];
    this.STUFFING_CHEESE = [10, 20];
    this.STUFFING_SALAD = [20, 5];
    this.STUFFING_POTATO = [15, 10];
    this.TOPPING_MAYO = [20, 5];
    this.TOPPING_SPICE = [15, 0];

    //Определение размера Гамбургера от значения атрибута size
    switch (size) {
        case "large": this.size = this.SIZE_LARGE; break;
        case "small": this.size = this.SIZE_SMALL; break;
        default: alert('Размер не задан!');
    }

    //Проверка на наличие элементов в массиве атрибута stuffing
    if (stuffing.length > 0) {

        //Массив с данными о Добавках
        this.stuffing = [];

        //Определение добавок Гамбургера от значений массива атрибута stuffing
        stuffing.forEach(function (item) {
            switch (item) {
                case "cheese": _this.stuffing.push(_this.STUFFING_CHEESE); break;
                case "salad": _this.stuffing.push(_this.STUFFING_SALAD); break;
                case "potato": _this.stuffing.push(_this.STUFFING_POTATO); break;
                default: alert('Не выбрана начинка!');
            }
        });
    } else {
        alert('Не выбрана ниодна начинка!');
    }
}

//Метод класса Гамбургер для добавления начинки
Hamburger.prototype.addTopping = function (topping) {

    //Добавление начинки в зависимости от значения атрибута topping
    switch (topping) {
        case "mayo": {
            console.log("Adding Mayonnaise");
            this.topping.push(this.TOPPING_MAYO);
            return true;
            break;
        }
        case "spice": {
            console.log("Adding Spice");
            this.topping.push(this.TOPPING_SPICE);
            return true;
            break;
        }
        default: alert('Не выбран topping!'); return false; break;
    }
};

//Метод класса Гамбургер для удаления начинки
Hamburger.prototype.removeTopping = function (topping) {

    //Удаление начинки в зависимости от значения атрибута topping
    switch (topping) {
        case "mayo": {
            console.log("deleting Mayonnaise");

            //Определенеи в каком элементе массива находится начинка "mayo"
            if (this.topping[0] === this.TOPPING_MAYO)
                return this.topping.shift();
            else if (this.topping[1] === this.TOPPING_MAYO)
                return this.topping.pop();
            else
                alert("You don't have this topping in Hamburger");
            break;
        }
        case "spice": {
            console.log("deleting Spice");

            //Определенеи в каком элементе массива находится начинка "spice"
            if (this.topping[0] === this.TOPPING_SPICE)
                return this.topping.shift();
            else if (this.topping[1] === this.TOPPING_SPICE)
                return this.topping.pop();
            else
                alert("You don't have this topping in Hamburger");
            break;
        }
    }
};

//Метод класса Гамбургер для получения данных о начинках
Hamburger.prototype.getToppings = function () {
    return this.topping;
};

//Метод класса Гамбургер для получения данных о размере
Hamburger.prototype.getSize = function () {
    return this.size;
};

//Метод класса Гамбургер для получения данных о добавках
Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
};

//Метод класса Гамбургер для расчета цены
Hamburger.prototype.calculatePrice = function () {

    //Получение данных о размере, добавках и начинках
    var sizeArr = this.getSize();
    var stuffArr = this.getStuffing();
    var toppArr = this.getToppings();

    //Определение стоимости за размер Габургера
    var sizePrice = parseInt(sizeArr[0]);

    var stuffPrice = 0;
    var toppPrice = 0;
    var resultPrice;

    //Определение стоимости за добавки в Гамбургере
    stuffArr.forEach(function (item) {
        stuffPrice += parseInt(item[0]);
    });

    //Определение стоимости за начинки в Гамбургере
    toppArr.forEach(function (item) {
        toppPrice += parseInt(item[0]);
    });

    //Определение полной стоимости Гамбургера
    resultPrice = sizePrice + stuffPrice + toppPrice;
    return resultPrice;
};

//Метод класса Гамбургер для расчета каллорий
Hamburger.prototype.calculateCalories = function () {

    //Получение данных о размере, добавках и начинках
    var sizeArr = this.getSize();
    var stuffArr = this.getStuffing();
    var toppArr = this.getToppings();

    //Определение калорийности от размера Габургера
    var sizeCal = parseInt(sizeArr[1]);

    var stuffCal = 0;
    var toppCal = 0;
    var resultCal;

    //Определение калорийности от добавок в Гамбургере
    stuffArr.forEach(function (item) {
        stuffCal += parseInt(item[1]);
    });

    //Определение калорийности от начинок в Гамбургере
    toppArr.forEach(function (item) {
        toppCal += parseInt(item[1]);
    });

    //Определение полной каллорийности Гамбургера
    resultCal = sizePrice + stuffPrice + toppPrice;
    return resultCal;
};

window.onload = function () {

    //Привязка к кнопке с id calculate
    var calcBtn = document.getElementById('calculate');

    //Добавление прослушивателя события нажатия на кнопку
    calcBtn.addEventListener('click', function () {
        //Привязка к полю с id result
        var result = document.getElementById('result');

        //Добавление в переменную chckdElems всех отмеченных пользователем элементов
        var chckdElems = document.querySelectorAll('input:checked');

        //Создание одномерного массива consist
        var consist = [];

        //Задание одномерного массива для 2 и 3 элемента массива consist
        consist[1] = [];
        consist[2] = [];

        //Перебор значений списка узлов chckdElems и упорядочивание их в массиве
        //consist[0] - соответствует размеру Гамбургера(String)
        //consist[1] - соответствует добавкам Гамбургера(Array)
        //consist[2] - соответствует начинкам Гамбургера(Array)
        chckdElems.forEach(function (item) {
            switch (item.id) {
                case "large": consist[0] = "large"; break;
                case "small": consist[0] = "small"; break;
                case "cheese": consist[1].push("cheese"); break;
                case "salad": consist[1].push("salad"); break;
                case "potato": consist[1].push("potato"); break;
                case "mayo": consist[2].push("mayo"); break;
                case "spice": consist[2].push("spice"); break;
            }
        });

        //Добавление текста в блок result с информацией по выбранным размерам, добавкам, начинкам и расчет полной стоимости и каллорий
        result.innerHTML = "Your personal burger:<br>Size: " + consist[0] + "<br>Stuffing: " + consist[1].join(", ");

        //Проверка на наличие начинки в бургере
        if (consist[2].length > 0) {
            result.innerHTML += "<br>Topping: " + consist[2].join(", ");
        }

    })
};