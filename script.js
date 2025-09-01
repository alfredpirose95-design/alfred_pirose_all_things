// Добавляем сюда свои игры с Яндекс Игр
const games = [
    { name: "Нарезка", url: "https://yandex.ru/games/app/217734" },
    { name: "Кликер(нет)-сёрф", url: "https://yandex.ru/games/app/461717" },
    { name: "Кран", url: "https://yandex.ru/games/app/353026" },
    // Можно добавлять сколько угодно игр
];

// Генерация карточек игр
const gameList = document.getElementById("game-list");

games.forEach(game => {
    const link = document.createElement("a");
    link.href = game.url;
    link.className = "game-card";
    link.target = "_blank";

    const title = document.createElement("span");
    title.textContent = game.name;

    link.appendChild(title);
    gameList.appendChild(link);
});
