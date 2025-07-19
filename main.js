import { renderGameList } from './ui.js';
import { games } from './games.js';

document.addEventListener('DOMContentLoaded', () => {
  renderGameList(games);
});
