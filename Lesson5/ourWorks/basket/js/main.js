$(document).ready(function () {
    //Контейнер с товарами
    let $goodsContainer = $('#goods');

    //Создаем товары
    let good1 = new Good(123, 'Коврик для PC мыши', 400);
    good1.render($goodsContainer);

    let good2 = new Good(124, 'Клавиатура для PC мыши', 1000);
    good2.render($goodsContainer);

    //Создаем экземпляр корзины
    let basket = new Basket('basket');
    basket.render($('.basket_wrapper'));

    //Добавление товара в корзину
    $('.buygood').on('click', function () {
        let idProduct = parseInt($(this).attr('data-id'));
        let price = parseInt($(this).parent().find('.product-price').text());

        basket.addProduct(idProduct, price);
    });

    $('.removegood').on('click', function () {
        let idProduct = parseInt($(this).attr('data-id'));

        basket.remove(idProduct);
    });
});