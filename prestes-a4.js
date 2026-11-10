(()=>{const p=[...document.querySelectorAll('.page')];p.forEach((el,i)=>{const s=el.querySelector('.pg');if(s)s.textContent=(i+1)+'/'+p.length});
document.querySelectorAll('img').forEach(im=>im.addEventListener('error',()=>{im.style.display='none'}))})();
