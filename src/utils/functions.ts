export const format = (number: number | string) => {
    let n = number.toString();
    let r = '';
    let x = 0;

    for (let i = n.length; i > 0; i--) {
        r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '');
        x = x == 2 ? 0 : x + 1;
    }

    return r.split('').reverse().join('');
}