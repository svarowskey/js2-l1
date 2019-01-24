$(document).ready(function () {
    //Экземпляр инпута
    let RespInp = new ResponseInput('Здесь вы можете написать свой отзыв:');
    RespInp.render('#respInp');

    //Экземпляр листа
    let RespList = new ResponseList();
    RespList.render($('.response_wrapper'));




});