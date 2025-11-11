(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v=[{id:1,name:"Round Neck White T-Shirts",price:"399",image:"src/Images/tshirt4.webp"},{id:2,name:"Combo T-Shirt",price:"599",image:"src/Images/robert-richman-vcTKFYNZop4-unsplash-removebg-preview.png"},{id:3,name:"New Checks T-Shirt",price:"699",image:"src/Images/tshirt2.webp"},{id:4,name:"Casual T-Shirt",price:"299",image:"src/Images/tian-dayong-maHb1ki_X3o-unsplash.jpg"},{id:5,name:"Casual Women T-Shirt",price:"499",image:"src/Images/women-shirt-removebg-preview.png"},{id:6,name:"Casual Women T-Shirt",price:"600",image:"src/Images/t-shirt1.webp"},{id:7,name:"Casual T-shirt",price:"299",image:"src/Images/tshirt4.webp"},{id:8,name:"Casual T-Shirts",price:"899",image:"src/Images/shirt2-removebg-preview.png"}],b=document.querySelector(".cart"),y=document.querySelector(".cart-tab"),S=document.querySelector(".close-btn"),d=document.querySelector(".hamburger"),g=document.querySelector(".mobile-menu");document.querySelector(".fa-bars");const m=document.querySelector(".mobile-close-icon"),q=document.querySelector(".product-items"),C=document.querySelector(".scroll-content"),L=document.querySelector(".cart-total"),T=document.querySelector(".cart-value");b.addEventListener("click",()=>{y.classList.add("cart-tab-active")});S.addEventListener("click",()=>{y.classList.remove("cart-tab-active")});d.addEventListener("click",()=>{g.classList.add("mobile-menu-active"),d.style.display="none",m.style.display="block"});m.addEventListener("click",()=>{g.classList.remove("mobile-menu-active"),m.style.display="none",d.style.display="block"});let h=[],o=[];h=v;const l=()=>{let t=0,s=0;document.querySelectorAll(".cart-list").forEach(i=>{const a=parseInt(i.querySelector(".quantity-count").textContent),e=parseFloat(i.querySelector(".item-price").textContent.replace("RS.",""));t+=e,s+=a}),L.textContent=`Rs. ${t}`,T.textContent=s};let I=()=>{h.forEach(t=>{const s=document.createElement("div");s.classList.add("products"),s.innerHTML=`
<div class="product-img">
  <img src="${t.image}" alt="Product-Img" />
</div>
<div class="product-details">
  <h3>${t.name}</h3>
    <p>${t.price}</p>
    <a href="#" class="add-cart"><span>Add To Cart</span></a>
</div>
`,q.appendChild(s),s.querySelector(".add-cart").addEventListener("click",a=>{a.preventDefault(),E(t)})})};I();const E=t=>{if(o.find(n=>n.id===t.id)){alert("Product is in the cart!");return}o.push(t);let i=1,a=parseFloat(t.price.replace("Rs.","")),e=document.createElement("div");e.classList.add("cart-list"),e.innerHTML=`
  <div class="item-container">
    <img src="${t.image}" alt="image" />
  </div>
  <div class="item-details">
    <h4>${t.name}</h4>
    <span class="item-price">${t.price}</span>
  </div>
  <div class="quantity">
    <i class="fa-solid fa-plus plus"></i>
    <h4 class="quantity-count">${i}</h4>
    <i class="fa-solid fa-minus minus-btn"></i>
  </div>
  `,C.appendChild(e),l();let r=e.querySelector(".plus"),c=e.querySelector(".minus-btn"),u=e.querySelector(".quantity-count"),p=e.querySelector(".item-price");r.addEventListener("click",n=>{n.preventDefault(),i++,u.textContent=i,p.textContent=`RS. ${(a*i).toFixed(2)}`,l()}),c.addEventListener("click",n=>{n.preventDefault(),i>1?(i--,u.textContent=i,p.textContent=`Rs. ${a*i}`,l()):(e.classList.add("slider"),setTimeout(()=>{e.remove(),o=o.filter(f=>f.id!==t.id),l()},300))})};
