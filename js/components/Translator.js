class Translator {
    constructor(IDselector) {
        this.IDselector = IDselector;

        this.DOM = null;
        this.listDOM = null;
        this.init();
        this.newEnWord = null;
        this.newLtWord = null;
        this.saveButton = null;
    }

    init() {
        //validacijos

        if (!this.isValidSelector()) {
            return false;
        }

        this.DOM = document.getElementById(this.IDselector);

        if (!this.DOM) {
            return false;

        }


        //susirandame vieta DOM

        //issipiesiame pradini turini
        this.render();
        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.IDselector !== 'string' ||
            this.IDselector === '') {
            return false;

        }
        return true;
    }

    generateAddForm() {
        return `<form>
            <label for="english">English</label>
            <input id="new_word_en" type="text" value="">
            <label for="lithuanian">Lithuanian</label>
            <input id="new_word_lt" type="text" value="">
            <button id="save_button" type="submit">Save</button>
            <button id="reset_button" type="reset">Reset</button>
        </form>`;
    }
    generateUpdateForm() {
        return `<form id="update_task" class="hide">
            <label for="translated_text">English</label>
            <input id="translated_text" type="text">
            <label for="translated_text">Lithuanian</label>
            <input id="translated_text" type="text">
            <button id="update_button" type="submit">Update</button>
            <button id="cancel_button" type="button">Cancel</button>
        </form>`;
    }

    generateList() {
        return `<div class="list"></div>`;
    }

    renderTask(enword, ltword) {
        if (typeof enword !== 'string' ||
            enword === '') {
            return '';
        }

        const HTML = `<div class="task">
                <div class="en_word">${enword}</div>
                <div class="lt_word">${ltword}</div>
                <div class="actions">
                    <div class="btn edit fa fa-pencil"></div>
                    <div class="btn delete fa fa-trash-o"></div>
                </div>
            </div>`;

        this.listDOM.insertAdjacentHTML('afterbegin', HTML)
    }


    //su render piesiame
    render() {
        let HTML = '';
        HTML += this.generateAddForm();
        HTML += this.generateUpdateForm();
        HTML += this.generateList();
        this.DOM.innerHTML = HTML;
        console.log('jhgfjhag');

        this.newEnWordDOM = document.getElementById('new_word_en')
        this.newLtWordDOM = document.getElementById('new_word_lt')
        this.saveButtonDOM = document.getElementById('save_button')
        this.listDOM = this.DOM.querySelector('.list');
    }

    addEvents() {
        this.saveButtonDOM.addEventListener('click', (e) => {
            e.preventDefault();
            const enword = this.newEnWordDOM.value;
            const ltword = this.newLtWordDOM.value
            this.renderTask(enword, ltword);
        })
    }
}


export { Translator }