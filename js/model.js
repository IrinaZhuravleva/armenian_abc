let tralivali;

const base = [{
    id: 0,
        question: 'Ա ա',
        answer: 'a',
    }, {
        id: 1,
        question: 'Բ բ',
        answer: 'б'
    }, {
        id: 2,
        question: 'Գ գ',
        answer: 'г'
    }, {
        id: 3,
        question: 'Դ դ',
        answer: 'д'
    }, {
        id: 4,
        question: 'Ե ե',
        answer: 'e'
    }, {
        id: 5,
        question: 'Զ զ',
        answer: 'з'
    }, {
        id: 6,
        question: 'Է է',
        answer: 'э'

    }, {
        id: 7,
        question: 'Ը ը',
        answer: 'ы'
    }, {
        id: 8,
        question: 'Թ թ',
        answer: 'т'
    }, {
        id: 9,
        question: 'Ժ ժ',
        answer: 'ж'
    }, {
        id: 10,
        question: 'Ի ի',
        answer: 'и'
    }, {
        id: 11,
        question: 'Լ լ',
        answer: 'л'
    }, {
        id: 12,
        question: 'Խ խ',
        answer: 'х'
    }, {
        id: 13,
        question: 'Ծ ծ',
        answer: 'ц'
    }, {
        id: 14,
        question: 'Կ կ',
        answer: 'к'
    }, {
        id: 15,
        question: 'Հ հ',
        answer: 'х'
    }, {
        id: 16,
        question: 'Ձ ձ',
        answer: 'дз'
    }, {
        id: 17,
        question: 'Ղ ղ',
        answer: 'кх'
    }, {
        id: 18,
        question: 'Ճ ճ',
        answer: 'ч'
    }, {
        id: 19,
        question: 'Մ մ',
        answer: 'м'
    }, {
        id: 20,
        question: 'Յ յ',
        answer: 'й'
    }, {
        id: 21,
        question: 'Ն ն',
        answer: 'н'
    }, {
        id: 22,
        question: 'Շ շ',
        answer: 'ш'
    }, {
        id: 23,
        question: 'Ո ո',
        answer: 'во'
    }, {
        id: 24,
        question: 'Չ չ',
        answer: 'ч'
    }, {
        id: 25,
        question: 'Պ պ',
        answer: 'п'
    }, {
        id: 26,
        question: 'Ջ ջ',
        answer: 'дж'

    }, {
        id: 27,
        question: 'Ռ ռ',
        answer: 'р'
    }, {
        id: 28,
        question: 'Ս ս',
        answer: 'с'
    }, {
        id: 29,
        question: 'Վ վ',
        answer: 'в'
    }, {
        id: 30,
        question: 'Տ տ',
        answer: 'т'
    }, {
        id: 31,
        question: 'Ր ր',
        answer: 'р'
    }, {
        id: 32,
        question: 'Ց ց',
        answer: 'ц'
    }, {
        id: 33,
        question: 'Ւ ւ',
        answer: '[w] [v] у'
    }, {
        id: 34,
        question: 'Փ փ',
        answer: 'пь'
    }, {
        id: 35,
        question: 'Ք ք',
        answer: 'кь/л'
    }, {
        id: 36,
        question: 'Եվ և',
        answer: 'ев'
    }, {
        id: 37,
        question: 'Օ օ',
        answer: 'о'
    }, {
        id: 38,
        question: 'Ֆ ֆ',
        answer: 'ф'
}];

let data;

if (localStorage.getItem("dataABC") != null) {
    data = JSON.parse(localStorage.getItem('dataABC'));
        
} else {
    data = base;
    localStorage.setItem('dataABC', JSON.stringify(data));
}

function clearFields() {
    document.querySelector('#question').value = "";
    document.querySelector('#question').focus();
    document.querySelector('#answer').value = "";
}
