const elements = {
    homeIcon: document.getElementById('home-icon'),
    themeIcon: document.getElementById('theme-icon'),
    title: document.querySelector('h1'),
    arrow: document.getElementById('arrow'),
    mailIcon: document.getElementById('mail-icon'),
    githubIcon: document.getElementById('github-icon')
};

function getThemeToSet() {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme, elements) {
    const mode = `${theme}-mode`;
    document.body.className = mode;
    elements.homeIcon.src = `assets/img/home-${mode}.png`;
    elements.themeIcon.src = `assets/img/${theme === 'dark' ? 'sun' : 'moon'}.png`;
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    setTheme(getThemeToSet(), elements);

    elements.themeIcon.addEventListener('click', () => {
        const newTheme = document.body.className === 'dark-mode' ? 'light' : 'dark';
        setTheme(newTheme, elements);
    });
});

elements.homeIcon.addEventListener('click', () => window.location.href = 'index.html#hero');
elements.mailIcon.addEventListener('click', () => window.location.href = `mailto:name@adress.com`);

elements.githubIcon.addEventListener('click', (event) => {
    event.preventDefault();
    const win = window.open('https://github.com/ZurekMartin', '_blank');
    win.focus();
    win.opener = null;
});

window.addEventListener('scroll', function () {
    var arrow = document.getElementById('arrow');
    var scrollThreshold = window.innerHeight / 16;

    if (window.scrollY > scrollThreshold) {
        arrow.style.opacity = '0';
    } else {
        arrow.style.opacity = '1';
    }
});

const urlParams = new URLSearchParams(window.location.search);
const gameParam = urlParams.get('game');

const games = {
    'ac': {
        title: "Assassin's Creed",
        image: "assets/img/ac.png",
        description: "Assassin's Creed is an action-adventure set during the Third Crusade in the year 1191. Players assume the role of Altair, an elite assassin seeking to gather information about the secretive Templar organization."
    },
    'ac2': {
        title: "Assassin's Creed 2",
        image: "assets/img/ac2.png",
        description: "Assassin's Creed 2 follows the story of Ezio Auditore da Firenze, a young nobleman from Renaissance Italy who becomes a member of the secretive Assassin Brotherhood after his family is betrayed."
    },
    'ac2b': {
        title: "Assassin's Creed 2 Brotherhood",
        image: "assets/img/ac2b.png",
        description: "Assassin's Creed 2 Brotherhood continues Ezio's tale as he now strives to resist the powerful Borgia family and liberate Rome from their rule."
    },
    'ac2r': {
        title: "Assassin's Creed 2 Revelations",
        image: "assets/img/ac2r.png",
        description: "Assassin's Creed 2 Revelations concludes the story of Ezio Auditore da Firenze as he ventures to Constantinople to uncover the secrets of his predecessor and adversary, Altair."
    },
    'ac3': {
        title: "Assassin's Creed 3",
        image: "assets/img/ac3.png",
        description: "Assassin's Creed 3 puts players in the role of Ratonhnhaké:ton, also known as Connor, a Native American warrior and Assassin during the American Revolution."
    },
    'ac3l': {
        title: "Assassin's Creed 3 Liberations",
        image: "assets/img/ac3l.png",
        description: "Assassin's Creed 3 Liberations brings players the story of Aveline de Grandpré, a young Assassin living during the Louisiana colonial period."
    },
    'ac4bf': {
        title: "Assassin's Creed 4 Black Flag",
        image: "assets/img/ac4bf.png",
        description: "Assassin's Creed 4 Black Flag is set in the Golden Age of Piracy and follows the story of Edward Kenway, a seasoned pirate who becomes embroiled in the conflict between Templars and Assassins."
    },
    'ac4fc': {
        title: "Assassin's Creed 4 Freedom Cry",
        image: "assets/img/ac4fc.png",
        description: "Assassin's Creed 4 Freedom Cry is a standalone expansion to Black Flag, where players take on the role of Adéwalé, a former slave turned Assassin, fighting for freedom."
    },
    'acr': {
        title: "Assassin's Creed Rogue",
        image: "assets/img/acr.png",
        description: "Assassin's Creed Rogue brings players the story of Shay Cormac, an Assassin who becomes a traitor and joins the Templar Order to stop the expansion of the Assassins."
    },
    'acu': {
        title: "Assassin's Creed Unity",
        image: "assets/img/acu.png",
        description: "Assassin's Creed Unity is set during the French Revolution and follows the story of Arno Dorian, a young Assassin striving to uncover conspiracy amid war and injustice."
    },
    'acs': {
        title: "Assassin's Creed Syndicate",
        image: "assets/img/acs.png",
        description: "Assassin's Creed Syndicate transports players to Victorian London, where they can play as twins Jacob and Evie Frye, fighting against Templar corruption."
    },
    'acch': {
        title: "Assassin's Creed Chronicles",
        image: "assets/img/acch.png",
        description: "Assassin's Creed Chronicles is a series of 2.5D platformers that take players through various historical periods and locations, including China, India, and Russia."
    },
    'acorigins': {
        title: "Assassin's Creed Origins",
        image: "assets/img/acorigins.png",
        description: "Assassin's Creed Origins is set in ancient Egypt and follows the story of Bayek of Siwa, the first Medjay who becomes an Assassin and fights against the Templars."
    },
    'acoddysey': {
        title: "Assassin's Creed Odyssey",
        image: "assets/img/acodyssey.png",
        description: "Assassin's Creed Odyssey puts players in the role of either Kassandra or Alexios, descendants of Leonidas, playing a crucial role in the Greco-Persian wars."
    },
    'acv': {
        title: "Assassin's Creed Valhalla",
        image: "assets/img/acv.png",
        description: "Assassin's Creed Valhalla takes players to the Viking invasion of England, following the story of Eivor, a warrior and clan leader."
    },
    'acm': {
        title: "Assassin's Creed Mirage",
        image: "assets/img/acm.png",
        description: "Assassin's Creed Mirage introduces players to a mysterious world where reality is twisted, and nothing is what it seems. Follow the journey of protagonist as they unravel the secrets of the Mirage and confront ancient evils."
    }
};

function setGameInfo(game) {
    const gameTitleElement = document.getElementById('game-title');
    const gameImageElement = document.getElementById('game-image');
    const gameDescriptionElement = document.getElementById('game-description');
    const gameButtonElement = document.getElementById('game-button');

    gameTitleElement.textContent = games[game].title;
    gameImageElement.src = games[game].image;
    gameDescriptionElement.textContent = games[game].description;
    gameButtonElement.href = `play.html?game=${game}`;
}

if (gameParam && games.hasOwnProperty(gameParam)) {
    setGameInfo(gameParam);
} else {
    console.error('Invalid game parameter:', gameParam);
    const defaultGame = 'ac';
    setGameInfo(defaultGame);
}