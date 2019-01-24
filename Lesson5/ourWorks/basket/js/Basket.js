class Basket {
    constructor(idBasket)
    {
        this.id = idBasket;
        this.amount = 0; //Общая стоимость товаров
        this.basketItems = []; //Массив для хранения товаров

        //Получаем товары
        this.getItems();
    }

    getItems()
    {
        let appendId = `#${this.id}_items`;

        //Вариант 1
        //let self = this;

        $.ajax({
            type: 'GET',
            url: 'json/get_items.json',
            context: this, //Вариант 2
            dataType: 'json',
            success: function (data) {
                let $basketData = $('<div />', {
                    id: 'basket_data',
                });

                this.amount = data.amount; //Общая стоимость товаров в корзине

                for (let i = 0; i < data.basket.length; i++)
                {
                    this.basketItems.push(data.basket[i]);
                }
                console.log(data);
                $basketData.append(`<p>Всего товаров: ${data.amount !==0 ? this.basketItems.length : 0}</p>`);
                $basketData.append(`<p>Общая стоимость: ${this.amount}</p>`);

                $basketData.appendTo(appendId);
            },
            error: function (error) {
                console.log('Ошибка', error);
            }
        });
    }

    render($jQueryElement)
    {
        let $basketDiv = $('<div />', {
            id: this.id,
            text: 'Корзина'
        });

        let $basketItemsDiv = $('<div />', {
            id: `${this.id}_items`
        });

        $basketItemsDiv.appendTo($basketDiv);
        $basketDiv.appendTo($jQueryElement);
    }

    addProduct(idProduct, priceProduct)
    {
        let goodItem = {
            id_product: idProduct,
            price: priceProduct,
        };

        this.amount += priceProduct;

        this.basketItems.push(goodItem);
        this.refresh(); //Перерисовываем корзину
    }

    remove(idProduct)
    {
        console.log(this.basketItems);

        //Получаем индекс товара
        let indexGood = this.basketItems.findIndex(data => data.id_product === idProduct);
        console.log(this.basketItems);
        //Если индекс товара нашелся и массив не пустой и общая стоимость не равна нулю, тогда удаляем товар
        if ((indexGood !== -1) & (this.basketItems.length !== 0) & (this.amount !== 0)) {
            this.basketItems.splice(indexGood, 1);
            this.amount -= this.basketItems[indexGood].price;
        }

        //Обновляем корзину
        this.refresh();
    }

    refresh()
    {
        let $basketData = $('#basket_data');
        $basketData.empty(); //Очистка содержимого без его удаления

        $basketData.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
        $basketData.append(`<p>Общая стоимость: ${this.amount}</p>`);
    }
}