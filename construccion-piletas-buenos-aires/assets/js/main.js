
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('[data-wa]').forEach(el=>{el.addEventListener('click',e=>{const msg=el.getAttribute('data-wa')||'Hola, quiero presupuesto para construir una pileta.'; el.href='https://wa.me/5491128013968?text='+encodeURIComponent(msg);});});});
