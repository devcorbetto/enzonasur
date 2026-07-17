
document.querySelectorAll('.faq-q').forEach(btn=>{btn.addEventListener('click',()=>btn.closest('.faq-item').classList.toggle('active'))});
const toggle=document.querySelector('.mobile-toggle');const menu=document.querySelector('.menu');if(toggle&&menu){toggle.addEventListener('click',()=>menu.classList.toggle('open'))}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>menu&&menu.classList.remove('open')));
