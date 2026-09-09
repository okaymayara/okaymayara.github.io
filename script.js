const works = [
  ['CeraVe', 'skincare', 'https://vt.tiktok.com/ZSqr9R3EY/'],
  ['Eudora', 'cabelos', 'https://vt.tiktok.com/ZSqrHsruD/'],
  ['Colorama', 'unhas', 'https://vt.tiktok.com/ZSqrHgbYA/'],
  ['La Roche-Posay', 'skincare', 'https://vt.tiktok.com/ZSqrH3836/'],
  ['Eudora', 'cabelos', 'https://vt.tiktok.com/ZSqrHG8vx/'],
  ['Garnier', 'cabelos', 'https://vt.tiktok.com/ZSqr9yQVU/'],
  ['L’Oréal', 'cabelos', 'https://vt.tiktok.com/ZSqr9U6td/'],
  ['Garnier', 'cabelos', 'https://vt.tiktok.com/ZSqr9HeFF/'],
  ['La Roche-Posay', 'skincare', 'https://vt.tiktok.com/ZSqr9Ln7W/'],
  ['Redken', 'cabelos', 'https://vt.tiktok.com/ZSqr9S2F8/'],
  ['L’Oréal', 'cabelos', 'https://vt.tiktok.com/ZSqr9HcA3/'],
  ['Elseve', 'cabelos', 'https://vt.tiktok.com/ZSqr9MRkq/'],
  ['Vichy', 'skincare', 'https://vt.tiktok.com/ZSqr9A3xW/'],
  ['Elseve', 'cabelos', 'https://vt.tiktok.com/ZSqr9hxjA/'],
  ['Matrix', 'cabelos', 'https://vt.tiktok.com/ZSqr9AA2P/'],
  ['L’Oréal', 'cabelos', 'https://vt.tiktok.com/ZSqr95dby/'],
  ['Lancôme', 'skincare', 'https://vt.tiktok.com/ZSqr9tnPa/']
];

const labels = {
  cabelos: 'Cabelos',
  skincare: 'Skincare',
  unhas: 'Unhas'
};

const grid = document.getElementById('workGrid');

function render(filter = 'todos') {
  const filteredWorks = works.filter(
    work => filter === 'todos' || work[1] === filter
  );

  grid.innerHTML = filteredWorks.map((work, index) => `
    <article class="card video-card">
      <div class="card-top">
        <span class="video-number">0${index + 1}</span>
        <div class="play-icon">▶</div>
        <span class="brand-name">${work[0]}</span>
      </div>

      <div class="card-body">
        <small>${labels[work[1]]}</small>
        <h3>${work[0]}</h3>
        <p>Conteúdo criado para TikTok</p>

        <a 
          href="${work[2]}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="tiktok-button"
        >
          ▶ Assistir no TikTok
        </a>
      </div>
    </article>
  `).join('');
}

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {

    document
      .querySelectorAll('.filters button')
      .forEach(item => item.classList.remove('active'));

    button.classList.add('active');

    render(button.dataset.filter);
  });
});

render();
