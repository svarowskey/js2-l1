//Класс подменю
class SubMenu extends Menu{
    constructor(idSub, classSub, nameSub, items)
    {
        super();
        this.idSub = idSub;
        this.classSub = classSub;
        this.items = items;
        this.nameSub = nameSub;
    }

    renderSubMenu()
    {
        var result = `<li>${this.nameSub}<ul class="${this.classSub}" id="${this.idSub}">`;

        //Сами пункты меню
        for (var i = 0; i < this.items.length; i++) {
            result += this.items[i].renderItem();
        }

        result += '</ul></li>';
        return result;
    }
}