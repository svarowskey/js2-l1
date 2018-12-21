//Класс для пункта меню
function MenuItem(href, title) {
    this.href = href;
    this.title = title;

}

//Метод возвращает html код для конкретного пункта
MenuItem.prototype.renderItem = function () {
    // return '<li><a href="' + this.href + '">' + this.title + '</a></li>'; //ES5
    return `<li><a href="${this.href}"></a>${this.title}</li>`; //ES6
};

//TODO: удаление меню
Menu.prototype.remove = function () {
    var myMenu = document.getElementById(`${Menu.id}`);
    myMenu.innerHTML = '';
};