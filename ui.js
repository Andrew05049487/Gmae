export function renderGameList(games) {
  const container = document.getElementById('game-list');
  games.forEach(game => {
    const a = document.createElement('a');
    a.href = game.link;
    a.textContent = game.name;
    a.style.display = 'block';
    container.appendChild(a);
  });
}
