class ResponseInput {
    constructor(title)
    {
        this.title = title;
        this.textAreaID = 'resp-text';
    }

    render($jQueryElement)
    {
        let formStyles = 'display: flex; flex-direction: column; justify-content: space-around;';
        let textStyles = 'width: 100%; height: 200px; resize: none;';

        let $revForm = $(`<form action="#" class="rev-form" style="${formStyles}" />`);
        let $revLabel = $(`<label for="${this.textAreaID}">${this.title}</label>`);
        let $revTextarea = $(`<textarea id="${this.textAreaID}" style="${textStyles}"></textarea>`);
        let $revBtnAdd = $(`<button id="add-resp">Добавить отзыв</button>`);

        $revLabel.appendTo($revForm);
        $revTextarea.appendTo($revForm);
        $revBtnAdd.appendTo($revForm);

        $revForm.appendTo($jQueryElement);
    }
}