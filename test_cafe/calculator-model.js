import { Selector } from 'testcafe';

const label = Selector('label');


export default class Page {
    constructor () {
        this.btn0 = Selector('#btn_0');
        this.btn1 = Selector('#btn_1');
        this.btn2 = Selector('#btn_2');
        this.btn3 = Selector('#btn_3');
        this.btn4 = Selector('#btn_4');
        this.btn5 = Selector('#btn_5');
        this.btn6 = Selector('#btn_6');
        this.btn7 = Selector('#btn_7');
        this.btn8 = Selector('#btn_8');
        this.btn9 = Selector('#btn_9');
        this.btnExp = Selector('#btn_exp');
        this.btnOpenParen = Selector('#btn_open_paren');
        this.btnCloseParen = Selector('#btn_close_paren');
        this.btnDivide = Selector('#btn_divide');
        this.btnMultiply = Selector('#btn_multiply');
        this.btnAdd = Selector('#btn_add');
        this.btnSubtract = Selector('#btn_subtract');
        this.btnEqual = Selector('#btn_equal');
        this.display1 = Selector('#display_1');
        this.display2 = Selector('#display_2');
        this.btnDecimal = Selector('#btn_decimal');
        this.btnC = Selector('#btn_C');
    }
}