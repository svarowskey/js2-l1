$(document).ready(function () {
    //Контейнер с отзывами
    let $responsesContainer = $('#responses');

    let response1 = new Response();
    response1.render($responsesContainer);

    $('.likeResp').on('click', function () {
        alert('hello');
    });
});