var CATS=["Cinematic AI","AI Commercials","AI UGC","AI Animation","Short Films","Web3 & Crypto","Experimental"];
var V=[["My first AI video",0,"Watch it here, or see the original post on X.",265,"https://res.cloudinary.com/uthxvfwh/video/upload/v1794081518/ssstwitter.com_1794081178892.mp4","https://x.com/His_Innocent_/status/2116965199815053785"],["Neon city ad",1,"A product spot in a rain-soaked skyline.",320],["Try-on testimonial",2,"A creator-style UGC clip.",20],["Anime short",3,"A hand-drawn style animated short.",190],["The last signal",4,"A short film with a twist ending.",35],["Token launch promo",5,"A launch video for a Web3 project.",150],["Dream loop",6,"An experimental visual study.",290],["Desert chase",0,"A widescreen action sequence.",45],["Sneaker drop",1,"A fast-cut commercial.",340],["Character intro",3,"Your own character in motion.",210],["Exchange promo",5,"A trading-platform promo.",170],["Memory box",4,"A quiet story short.",5]];
var cur="all",grid=document.getElementById("grid"),chips=document.getElementById("chips");
function chipsRender(){var h='<button class="chip" aria-pressed="'+(cur==="all")+'" data-c="all">All</button>';
CATS.forEach(function(c,i){h+='<button class="chip" aria-pressed="'+(cur===i)+'" data-c="'+i+'">'+c+'</button>'});chips.innerHTML=h}
function gridRender(){grid.innerHTML=V.map(function(v,i){return(cur==="all"||cur===v[1])?'<button class="tile" data-i="'+i+'"><div class="th" style="--h:'+v[3]+'">'+(v[4]?'<video src="'+v[4]+'#t=0.5" muted playsinline preload="metadata" aria-hidden="true"></video>':'')+'<s>'+CATS[v[1]]+'</s><div class="pl"></div></div><div class="tb"><h3>'+v[0]+'</h3><p>'+v[2]+'</p></div></button>':""}).join("")}
chips.onclick=function(e){var b=e.target.closest(".chip");if(!b)return;cur=b.dataset.c==="all"?"all":+b.dataset.c;chipsRender();gridRender()};
chipsRender();gridRender();
var m=document.getElementById("modal"),stage=document.getElementById("stage"),pg=document.getElementById("pg"),pp=document.getElementById("pp"),t=null,p=0,last=null;
function tick(){p=(p+0.4)%100;pg.style.width=p+"%"}
function openV(i){var v=V[i];last=document.activeElement;stage.style.setProperty("--h",v[3]);stage.classList.remove("pause");pp.textContent="Pause";
document.getElementById("mt").textContent=v[0];document.getElementById("md").textContent=CATS[v[1]]+" · "+v[2];
var mx=document.getElementById("mx");mx.href=v[5]||"https://x.com/";mx.textContent=v[4]?"View Original Post on X ↗":"Watch on X ↗";clearInterval(t);er.style.display="none";if(v[4]){box.classList.add("real");vid.src=v[4];vid.load()}else{box.classList.remove("real");vid.removeAttribute("src");p=0;t=setInterval(tick,60)}m.classList.add("on");document.getElementById("mcl").focus()}
var vid=document.getElementById("vid"),box=document.querySelector(".box"),er=document.getElementById("verr");vid.onerror=function(){if(vid.getAttribute("src"))er.style.display="block"};
function closeV(){m.classList.remove("on");clearInterval(t);vid.pause();vid.removeAttribute("src");if(last)last.focus()}
grid.onclick=function(e){var b=e.target.closest(".tile");if(b)openV(+b.dataset.i)};
document.getElementById("mcl").onclick=closeV;m.onclick=function(e){if(e.target===m)closeV()};
pp.onclick=function(){var on=stage.classList.toggle("pause");pp.textContent=on?"Play":"Pause";clearInterval(t);if(!on)t=setInterval(tick,60)};
var mn=document.getElementById("menu");
document.getElementById("mo").onclick=function(){mn.classList.add("on")};
document.getElementById("mc").onclick=function(){mn.classList.remove("on")};
mn.onclick=function(e){if(e.target.tagName==="A")mn.classList.remove("on")};
document.onkeydown=function(e){if(e.key==="Escape"){closeV();mn.classList.remove("on")}};
function count(el){var to=+el.dataset.to,d=+(el.dataset.dec||0),s=el.dataset.suf||"",st=null;
function f(ts){if(!st)st=ts;var k=Math.min((ts-st)/1400,1),e=1-Math.pow(1-k,3);el.textContent=(to*e).toFixed(d)+s;if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
var ns=document.querySelectorAll("[data-to]");
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){count(x.target);io.unobserve(x.target)}})},{threshold:.4});ns.forEach(function(n){io.observe(n)})}
else ns.forEach(function(n){n.textContent=n.dataset.to+(n.dataset.suf||"")});
