class ResponseList {
    constructor() {
        this.id = 'respList';
        this.respItems = [];
        this.respCounter = 0;
        this.respContainer = null;
    }

    render($jQueryElement) {
        let $respDiv = $(`<div id="${this.id}" style="display: flex; flex-direction: column;" />`);

        let $respItemsDiv = $(`<div id="${this.id}_items" />`);

        $respItemsDiv.appendTo($respDiv);
        $respDiv.appendTo($jQueryElement);

        this.respContainer = $respItemsDiv;

        this.getItems();
    }

    getItems()
    {
        $.ajax({
            type: 'GET',
            url: 'json/responses_list.json',
            context: this,
            dataType: 'json',
            success: function (data) {

                for (let i = 0; i < data.comments.length; i++)
                {
                    let $respData = this.respContainer;

                    this.respItems.push(data.comments[i]);

                    // console.log(this.respItems[i].id_comment);

                    this.addReview(this.respItems[i].id_comment, this.respItems[i].text);
                }

            },
            error: function (error) {
                console.log('Ошибка', error);
            }
        });
    }

    addReview(id_user, text)
    {
        let counter = ++this.respCounter;
        let that = this;

        let $respDataItem = $('<div />', {
            style: 'padding: 5px; margin-bottom: 5px',
            'data-id': `review_${id_user}`,
            id: `review-item_${counter}`
        });

        let $apprBtn = $(`<button class="appr-resp" id="${counter}appr" style="margin: 5px;">Утвердить</button>`);
        let $remBtn = $(`<button class="rem-resp" id="${counter}del" style="margin: 5px;">Удалить</button>`);

        $respDataItem.append(`<p style="text-align: center">Отзыв #${counter}</p>`);
        $respDataItem.append(`<div style="width: 400px; padding: 10px; border: 1px solid blue" />`);
        $respDataItem.append($apprBtn);
        $respDataItem.append($remBtn);

        $respDataItem.appendTo(this.respCounter);


    }

    addResponse() {

    }

    delResponse() {

    }
}