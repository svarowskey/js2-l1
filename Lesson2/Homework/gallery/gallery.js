class Gallery {
    constructor(images)
    {
        this.images = images;
    }
    
    render()
    {
        var result = "";
        for (let i = 0; i < this.images.length; i++) {
            result += `<a href="${this.images[i].max}">
                        <img src="${this.images[i].min}" 
                        height="200" width="200" title="Изображение ${i + 1}"></a>`;

            if ((i + 1) % 3 === 0) {
                result += '<br>';
            }
        }
        return result;
    }
}