(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const b=[{id:1,name:"Round Neck White T-Shirts",price:"399",image:"src/assets/tshirt4.webp"},{id:2,name:"Combo T-Shirt",price:"599",image:"src/assets/robert-richman-vcTKFYNZop4-unsplash-removebg-preview.png"},{id:3,name:"New Checks T-Shirt",price:"699",image:"src/assets/tshirt2.webp"},{id:4,name:"Casual T-Shirt",price:"299",image:"src/assets/tian-dayong-maHb1ki_X3o-unsplash.jpg"},{id:5,name:"Casual Women T-Shirt",price:"499",image:"src/assets/women-shirt-removebg-preview.png"},{id:6,name:"Casual Women T-Shirt",price:"600",image:"src/assets/t-shirt1.webp"},{id:7,name:"Casual T-shirt",price:"299",image:"src/assets/tshirt4.webp"},{id:8,name:"Casual T-Shirts",price:"899",image:"src/assets/shirt2-removebg-preview.png"}],g=document.querySelector(".cart"),y=document.querySelector(".cart-tab"),S=document.querySelector(".close-btn"),d=document.querySelector(".hamburger"),h=document.querySelector(".mobile-menu");document.querySelector(".fa-bars");const u=document.querySelector(".mobile-close-icon"),q=document.querySelector(".product-items"),C=document.querySelector(".scroll-content"),L=document.querySelector(".cart-total"),T=document.querySelector(".cart-value");g.addEventListener("click",()=>{y.classList.add("cart-tab-active")});S.addEventListener("click",()=>{y.classList.remove("cart-tab-active")});d.addEventListener("click",()=>{h.classList.add("mobile-menu-active"),d.style.display="none",u.style.display="block"});u.addEventListener("click",()=>{h.classList.remove("mobile-menu-active"),u.style.display="none",d.style.display="block"});let f=[],o=[];f=b;const l=()=>{let t=0,r=0;document.querySelectorAll(".cart-list").forEach(s=>{const a=parseInt(s.querySelector(".quantity-count").textContent),e=parseFloat(s.querySelector(".item-price").textContent.replace("RS.",""));t+=e,r+=a}),L.textContent=`Rs. ${t}`,T.textContent=r};let E=()=>{f.forEach(t=>{const r=document.createElement("div");r.classList.add("products"),r.innerHTML=`
<div class="product-img">
  <img src="${t.image}" alt="Product-Img" />
</div>
<div class="product-details">
  <h3>${t.name}</h3>
    <p>${t.price}</p>
    <a href="#" class="add-cart"><span>Add To Cart</span></a>
</div>
`,q.appendChild(r),r.querySelector(".add-cart").addEventListener("click",a=>{a.preventDefault(),w(t)})})};E();const w=t=>{if(o.find(n=>n.id===t.id)){alert("Product is in the cart!");return}o.push(t);let s=1,a=parseFloat(t.price.replace("Rs.","")),e=document.createElement("div");e.classList.add("cart-list"),e.innerHTML=`
  <div class="item-container">
    <img src="${t.image}" alt="image" />
  </div>
  <div class="item-details">
    <h4>${t.name}</h4>
    <span class="item-price">${t.price}</span>
  </div>
  <div class="quantity">
    <i class="fa-solid fa-plus plus"></i>
    <h4 class="quantity-count">${s}</h4>
    <i class="fa-solid fa-minus minus-btn"></i>
  </div>
  `,C.appendChild(e),l();let i=e.querySelector(".plus"),c=e.querySelector(".minus-btn"),m=e.querySelector(".quantity-count"),p=e.querySelector(".item-price");i.addEventListener("click",n=>{n.preventDefault(),s++,m.textContent=s,p.textContent=`RS. ${(a*s).toFixed(2)}`,l()}),c.addEventListener("click",n=>{n.preventDefault(),s>1?(s--,m.textContent=s,p.textContent=`Rs. ${a*s}`,l()):(e.classList.add("slider"),setTimeout(()=>{e.remove(),o=o.filter(v=>v.id!==t.id),l()},300))})};
