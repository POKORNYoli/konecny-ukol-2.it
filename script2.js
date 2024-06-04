




console.log('');



// Alerts
let jmeno = window.prompt('Kámo tak ty vypadáš jinak přejetě. Jak ti vůbec říkaji?');
console.log('Tvé jméno je ' + jmeno + '.');

window.alert(`To je debilní jméno, budu ti říkat Diviš.`);

const MINIMUM = 15;

let vekUzivatele = window.prompt('Jak jsi starý, Diviši?');

if (Number(vekUzivatele) >= MINIMUM) {
    window.alert('Projdeme se.');
}

if (Number(vekUzivatele) <= MINIMUM) {
    window.alert('Tak to jsem tě teda tipoval na víc.');
}

if (Number(vekUzivatele) <= MINIMUM) {
    window.alert('Nechceš něco koupit?');
}

let odpoved = window.confirm('Tak co? Nemám na tebe celej den.');

if (odpoved) {
    console.log('Uživatel odpověděl ANO.');
    let dalsiOtazka = window.confirm('Skvělé! Momentálně mám jen párno. Nevadí?');
} else {
    console.log('Uživatel odpověděl NE.');
}
