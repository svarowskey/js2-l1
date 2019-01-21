class Response {
    constructor(id = 0, text = "") {
        this.id = id;
        this.textResp = text;
        this.responseItems = [];

        this.getResponses()
    }

    getResponses() {
        let appendId = `#responses`;

        $.ajax({
            type: 'GET',
            url: './json/responses_list.json',
            context: this,
            dataType: 'json',
            success: function (data) {
                let $response_Data = $('<div />', {
                    id: 'response_data',
                });

                // console.log(data.comments);

                for (let i = 0; i < data.comments.length; i++) {
                    $response_Data.append(
                        `<div class="response"><p><textarea class="response_text">${data.comments[i].text}</textarea></p>
                        <button class="likeResp" data-id="${data.comments[i].id_comment}">Like</button>
                        <button class="disResp" data-id="${data.comments[i].id}">Dislike</button></div>`);
                }

                $response_Data.appendTo(appendId);
            },
            error: function (error) {
                console.log('Ошибка', error);
            }
        });
    }

    render($jQueryElement) {
        let $responseItemsDiv = $('<div />', {
            id: `responses`
        });

        $responseItemsDiv.appendTo($jQueryElement);
    }

    addResponse() {

    }

    delResponse() {

    }
}