const works = [
  ['CeraVe', 'skincare', '7681441878293679367'],
  ['Eudora', 'cabelos', '7681397351919013128'],
  ['Colorama', 'unhas', '7679068516145777938'],
  ['La Roche-Posay', 'skincare', '7678741448904445191'],
  ['Eudora', 'cabelos', '7677595661965004050'],
  ['Garnier', 'skincare', '7655448787300912402'],
  ['L’Oréal', 'skincare', '7655446528286297351'],
  ['Garnier', 'skincare', '7644689724216446215'],
  ['La Roche-Posay', 'skincare', '7644361889576766728'],
  ['Redken', 'cabelos', '7637277379995503890'],
  ['L’Oréal', 'cabelos', '7636616635637353735'],
  ['Elseve', 'cabelos', '7629715623739706642'],
  ['Vichy', 'skincare', '7623156388881075474'],
  ['Elseve', 'cabelos', '7612640376142269703'],
  ['Matrix', 'cabelos', '7616336347963395336'],
  ['L’Oréal', 'cabelos', '7613530977293421832'],
  ['Lancôme', 'perfume', '7605356193967541511']
];

const labels = {
  cabelos: 'Cabelos',
  skincare: 'Skincare',
  unhas: 'Unhas',
  perfume: 'Perfume'
};

const grid = document.getElementById('workGrid');

function render(filter = 'todos') {
  const filtered = works.filter(
    work => filter === 'todos' || work[1] === filter
  );

  grid.innerHTML = filtered.map(work => `
    <article class="card video-card">

      <div class="tiktok-preview">
        <iframe
          src="https://www.tiktok.com/player/v1/${work[2]}?description=1&music_info=1"
          title="${work[0]} - TikTok"
          loading="lazy"
          allow="fullscreen"
          style="width:100%;height:100%;border:none;"
        ></iframe>
      </div>

      <div class="card-body">
        <small>${labels[work[1]]}</small>
        <h3>${work[0]}</h3>
        <p>Conteúdo criado para TikTok</p>

        <a
          href="https://www.tiktok.com/@okaymaayara/video/${work[2]}"
          target="_blank"
          rel="noopener noreferrer"
          class="tiktok-button"
        >
          ▶ Abrir no TikTok
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
