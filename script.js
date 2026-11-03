// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%6)*70+'ms';io.observe(el)});
// typing effect
const t=document.getElementById('typed');
if(t){const w=['Data Analyst','Data Engineer','Machine Learning Enthusiast','Problem Solver'];let i=0,j=0,d=false;
(function tick(){const s=w[i];t.textContent=s.slice(0,j);
if(!d&&j++===s.length){d=true;return setTimeout(tick,1400)}
if(d&&j--===0){d=false;i=(i+1)%w.length}
setTimeout(tick,d?45:95)})()}
// counters
document.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n,dec=el.dataset.d?+el.dataset.d:0,suf=el.dataset.s||'';let k=0;
const run=()=>{k+=n/40;if(k>=n)k=n;el.textContent=k.toFixed(dec)+suf;if(k<n)requestAnimationFrame(run)};
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){run();o.disconnect()}}).observe(el)});
// project filter
const fb=document.querySelectorAll('#filters button'),pc=document.querySelectorAll('[data-c]');
fb.forEach(b=>b.onclick=()=>{fb.forEach(x=>x.classList.remove('on'));b.classList.add('on');
pc.forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&!c.dataset.c.split(' ').includes(b.dataset.f)))});
// contact form -> mailto
const f=document.getElementById('cf');
if(f)f.onsubmit=e=>{e.preventDefault();const v=n=>encodeURIComponent(f[n].value);
location.href='mailto:anchitamajumdar@gmail.com?subject='+v('subject')+'&body='+v('msg')+'%0A%0A'+v('name')}
