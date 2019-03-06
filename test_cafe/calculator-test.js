import Page from './calculator-model';

fixture `Aaron Calculator`
    .page `http://127.0.0.1:3100/calculator.html`;

const page = new Page();

test('12 plus 3', async t => {
    await t
        // .setTestSpeed(0.5)
        .click(page.btn1)
        .click(page.btn2)
        .click(page.btnAdd)
        .click(page.btn3)
        .click(page.btnEqual)
        // .expect(page.display1.value).contains('0');
        .expect(page.display1.textContent).eql('12 + 3')
        .expect(page.display2.textContent).eql('15');
});

test('3 (1 + 2 ^ 2 * 3) / 4 ( 5 - 4 )', async t => {
    await t
        // .setTestSpeed(0.5)
        .click(page.btn3)
        .click(page.btnOpenParen)
        .click(page.btn1)
        .click(page.btnAdd)
        .click(page.btn2)
        .click(page.btnExp)
        .click(page.btn2)
        .click(page.btnMultiply)
        .click(page.btn3)
        .click(page.btnCloseParen)
        .click(page.btnDivide)
        .click(page.btn4)
        .click(page.btnOpenParen)
        .click(page.btn5)
        .click(page.btnSubtract)
        .click(page.btn4)
        .click(page.btnCloseParen)
        .click(page.btnEqual)
        .expect(page.display1.textContent).eql('3 ( 1 + 2 ^ 2 * 3 ) / 4 ( 5 - 4 )')
        .expect(page.display2.textContent).eql('9.75');
});

test('3 (1.5 + 2 ^ 2 * 3) / 4 ( 5 - 4.5 )', async t => {
    await t
        // .setTestSpeed(0.5)
        .click(page.btn3)
        .click(page.btnOpenParen)
        .click(page.btn1)
        .click(page.btnDecimal)
        .click(page.btn5)
        .click(page.btnAdd)
        .click(page.btn2)
        .click(page.btnExp)
        .click(page.btn2)
        .click(page.btnMultiply)
        .click(page.btn3)
        .click(page.btnCloseParen)
        .click(page.btnDivide)
        .click(page.btn4)
        .click(page.btnOpenParen)
        .click(page.btn5)
        .click(page.btnSubtract)
        .click(page.btn4)
        .click(page.btnDecimal)
        .click(page.btn5)
        .click(page.btnCloseParen)
        .click(page.btnEqual)
        .expect(page.display1.textContent).eql('3 ( 1.5 + 2 ^ 2 * 3 ) / 4 ( 5 - 4.5 )')
        .expect(page.display2.textContent).eql('5.0625');
});