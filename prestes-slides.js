(()=>{const LG='https://corretoraprestespinhais.com.br/wp-content/uploads/2025/08/prestes-logo-branco-e-laranja.png',LW='https://corretoraprestespinhais.com.br/wp-content/uploads/2025/07/admin-ajax.png';
document.querySelectorAll('.brand').forEach(b=>{b.innerHTML='<img alt="Prestes Corretora de Seguros" src="'+(b.closest('.orange-bg')?LW:LG)+'">'});
const s=[...document.querySelectorAll('.slide')],nav=document.querySelector('.dot-nav'),bar=document.getElementById('progress');let cur=0;
s.forEach((el,i)=>{const c=el.querySelector('.counter');if(c)c.textContent=String(i+1).padStart(2,'0')+' / '+String(s.length).padStart(2,'0');const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(i+1));b.onclick=()=>el.scrollIntoView({behavior:'smooth'});nav.appendChild(b)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.animate').forEach(a=>a.classList.add('in'));cur=s.indexOf(e.target);[...nav.children].forEach((b,i)=>b.classList.toggle('active',i===cur));bar.style.width=((cur+1)/s.length*100)+'%'}}),{threshold:.35});
s.forEach(el=>io.observe(el));
addEventListener('keydown',e=>{if(['ArrowDown','ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();s[Math.min(cur+1,s.length-1)].scrollIntoView({behavior:'smooth'})}if(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();s[Math.max(cur-1,0)].scrollIntoView({behavior:'smooth'})}});
document.querySelectorAll('img').forEach(im=>im.addEventListener('error',()=>{im.style.display='none'}));
addEventListener('beforeprint',()=>document.querySelectorAll('.animate').forEach(a=>a.classList.add('in')))})();
