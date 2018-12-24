class Menu {
    constructor(myId, myClass, myItems)
    {
        this.id = myId;
        this.className = myClass;
        this.items = myItems;
    }

    render() {
        var result = `<ul class="${this.className}" id="${this.id}">`;



        //Сами пункты меню
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].classSub === 'sub-menu') {
                result += this.items[i].renderSubMenu();
            } else {
                result += this.items[i].renderItem();
            }

        }

        result += '</ul>';
        return result;
    }

    remove() {
        var myMenu = document.getElementById(`${this.id}`);
        myMenu.innerHTML = '';
    }
}