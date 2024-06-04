let gameStarted = false;

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        document.querySelector('.game-container').innerHTML = `
            <h1>Před tajemnými dveřmi Pražského hradu</h1>
            <p>
                Stojíte před těžce zamykáním dveří, které oddělují vás od záhadné Kočičí Bible.
                Cítíte, jak vám srdce bije rychle a vaše zvědavost vás nutí pokračovat.
            </p>
            <p>
                Najednou se před vámi objeví kočka a začne olizovat vaše boty. Je to zvláštní znamení.
                Jak budete pokračovat? (Vyberte možnost)
            </p>
            <button onclick="continueAdventure('search')">Pokračovat v pátrání</button>
            <button onclick="continueAdventure('pet')">Pohladit kočku</button>
        `;
    }
}

function continueAdventure(choice) {
    const container = document.querySelector('.game-container');
    switch (choice) {
        case 'search':
            container.innerHTML = `
                <h1>Hledání Kočičí Bible</h1>
                <p>
                    Rozhodli jste se pokračovat v pátrání. Otevřeli jste těžké dveře a vkročili do tajemného podkroví.
                    Co uděláte dál?
                </p>
                <button onclick="discoverCatWisdom()">Hledat dál</button>
            `;
            break;
        case 'pet':
            container.innerHTML = `
                <h1>Pohledání kočky</h1>
                <p>
                    Pohladili jste kočku a zdá se, že se vám zalíbila. Teď se vám přidá k dobrodružství.
                    Co budete dělat s novou kočičí společnicí?
                </p>
                <button onclick="discoverCatWisdom()">Pokračovat ve společnosti kočky</button>
            `;
            break;
    }
}

function discoverCatWisdom() {
    const container = document.querySelector('.game-container');
    container.innerHTML = `
        <h1>Objevili jste Kočičí Bibli!</h1>
        <p>
            Gratuluji! Nyní máte před sebou starobylou knihu napsanou samotnými kočkami.
            Obsahuje pradávné moudrosti, recepty na nejlepší kočičí jídlo a návody na vytváření kočičích hraček.
            Jak budete tuto moudrost využívat?
        </p>
        <button onclick="becomeCatGuru()">Stát se Kočičím Guru</button>
    `;
}

function becomeCatGuru() {
    const container = document.querySelector('.game-container');
    container.innerHTML = `
        <h1>Stali jste se Kočičím Gurudem!</h1>
        <p>
            Gratuluji! Vaše objevy se staly celosvětovým hitem a vy jste nyní vůdcem nového hnutí pro kočky.
            Lidé z celého světa vás vyhledávají, aby se dozvěděli víc o kočkách a jejich moudrosti.
            Jak budete šířit moudrost koček?
        </p>
        <button onclick="exploreSocialMedia()">Stát se celebritou na sociálních médiích</button>
    `;
}

function exploreSocialMedia() {
    const container = document.querySelector('.game-container');
    container.innerHTML = `
        <h1>Sláva na sociálních médiích</h1>
        <p>
            Váš účet na Instagramu, "CatWhisperer," má miliony sledujících. Lidé se těší na vaše denní dávky kočičí moudrosti.
            Jak budete dále využívat svou slávu na sociálních médiích?
        </p>
        <button onclick="concludeGame()">Dělat další příspěvky</button>
    `;
}

function concludeGame() {
    const container = document.querySelector('.game-container');
    container.innerHTML = `
        <h1>Konec dobrodružství</h1>
        <p>
            Gratuluji k úspěšnému dobrodružství! Stali jste se nejoblíbenějším badatelem všech koček na světě
            a ukázali jste, že věda může být zábavná a plná překvapení.
        </p>
        <p>
            Děkuji, že jste si zahráli tuto hru. Pokud chcete začít znovu, stačí obnovit stránku.
        </p>
    `;
}



