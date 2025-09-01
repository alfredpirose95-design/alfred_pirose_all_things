// Добавляем сюда свои игры с Яндекс Игр
const games = [
    { name: "Игра 1", url: "https://yandex.ru/games/app/12345" },
    { name: "Игра 2", url: "https://yandex.ru/games/app/67890" },
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
