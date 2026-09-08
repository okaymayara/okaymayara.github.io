const works=[['CeraVe','skincare','https://vt.tiktok.com/ZSqr9R3EY/'],['Eudora','cabelos','https://vt.tiktok.com/ZSqrHsruD/'],['Colorama','unhas','https://vt.tiktok.com/ZSqrHgbYA/'],['La Roche-Posay','skincare','https://vt.tiktok.com/ZSqrH3836/'],['Eudora','cabelos','https://vt.tiktok.com/ZSqrHG8vx/'],['Garnier','cabelos','https://vt.tiktok.com/ZSqr9yQVU/'],['L’Oréal','cabelos','https://vt.tiktok.com/ZSqr9U6td/'],['Garnier','cabelos','https://vt.tiktok.com/ZSqr9HeFF/'],['La Roche-Posay','skincare','https://vt.tiktok.com/ZSqr9Ln7W/'],['Redken','cabelos','https://vt.tiktok.com/ZSqr9S2F8/'],['L’Oréal','cabelos','https://vt.tiktok.com/ZSqr9HcA3/'],['Elseve','cabelos','https://vt.tiktok.com/ZSqr9MRkq/'],['Vichy','skincare','https://vt.tiktok.com/ZSqr9A3xW/'],['Elseve','cabelos','https://vt.tiktok.com/ZSqr9hxjA/'],['Matrix','cabelos','https://vt.tiktok.com/ZSqr9AA2P/'],['L’Oréal','cabelos','https://vt.tiktok.com/ZSqr95dby/'],['Lancôme','skincare','https://vt.tiktok.com/ZSqr9tnPa/']];
const labels={cabelos:'Cabelos',skincare:'Skincare',unhas:'Unhas'};
const grid=document.getElementById('workGrid');

function render(filter='todos'){
grid.innerHTML=works.filter(w=>filter==='todos'||w[1]===filter).map(w=>`<article class="card"><div class="card-top">${w[0]}</div><div class="card-body"><small>${labels[w[1]]}</small><h3>${w[0]}</h3><a href="${w[2]}" target="_blank" rel="noopener">Ver conteúdo no TikTok →</a></div></article>`).join('')
}

document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{
document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));
b.classList.add('active');
render(b.dataset.filter)
}));

render();
