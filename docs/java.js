document.addEventListener('DOMContentLoaded', () => {
  const apiKey = '2onfwe3qrskzQBwsg4giWzszog+N30F085Zqo14+Jgc=';
  const resultDiv = document.getElementById('result');

  // Funkce pro volání API
  async function fetchData() {
  
  }

  // Funkce pro zobrazení dat z API
  function displayData(data) {
    resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  }

  // Volání API při načtení stránky
  fetchData();

  // Přidání event listeneru na logo
  document.querySelector('.logo').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('skryte');
  });

  // Funkce pro zavření popupu
  function closePopup() {
    var overlay = document.querySelector('.popup-overlay');
    overlay.style.display = 'none';
  }

  // Zobrazení konzolové zprávy
  console.log('funguje');

  // Přidání objektů a polí
  const users = [
    { name: 'Jan', age: 25 },
    { name: 'Petr', age: 30 },
    { name: 'Anna', age: 22 }
  ];

  // Cyklus pro zobrazení uživatelů v konzoli
  users.forEach(user => {
    console.log(`Uživatel: ${user.name}, Věk: ${user.age}`);
  });

  // Zobrazení uživatelů na stránce
  const userListDiv = document.getElementById('user-list');
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.textContent = `Uživatel: ${user.name}, Věk: ${user.age}`;
    userListDiv.appendChild(userDiv);
  });

  // Příklad použití proměnných a podmínek
  const MINIMUM = 100;

  let vekUzivatele = parseInt(window.prompt('Kolik ti je let?'));
  let userMatch = users.find(user => user.age === vekUzivatele);

  if (userMatch) {
    let isUser = window.prompt(`Jsi ${userMatch.name}? (ano/ne)`);
    if (isUser.toLowerCase() === 'ano') {
      window.alert(`Vítej zpět, ${userMatch.name}!`);
    } else {
      window.alert(`Ahoj!`);
    }
  } else {
    window.alert(`Ahoj!`);
  }
});
