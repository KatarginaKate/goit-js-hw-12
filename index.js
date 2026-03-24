import{a as w,S as v,i as a}from"./assets/vendor-BLkLXWwN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S="55027621-850b52e35e959b3f4fd98aefc",q="https://pixabay.com/api/";async function m(s,t=1){const r={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await w.get(q,{params:r})).data}catch(i){throw console.error("Error fetching images:",i),i}}const p=document.querySelector(".gallery"),h=document.querySelector(".loader"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function f(s){const t=s.map(r=>`
<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${r.likes}</p>
    <p class="info-item"><b>Views</b> ${r.views}</p>
    <p class="info-item"><b>Comments</b> ${r.comments}</p>
    <p class="info-item"><b>Downloads</b> ${r.downloads}</p>
  </div>
</li>
`).join("");p.insertAdjacentHTML("beforeend",t),R.refresh()}function E(){p.innerHTML=""}function g(){h.classList.remove("is-hidden")}function y(){h.classList.add("is-hidden")}const b=document.querySelector(".form"),l=document.querySelector(".btn-load-more");let c="",n=1,u=0,L=15;b.addEventListener("submit",I);l.addEventListener("click",P);async function I(s){if(s.preventDefault(),c=s.target.elements["search-text"].value.trim(),!c){a.warning({message:"Please enter a search query",position:"topRight"});return}n=1,E(),l.classList.add("is-hidden"),g();try{const t=await m(c,n);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}u=t.totalHits,f(t.hits),f(t.hits);const r=document.querySelector(".gallery").firstElementChild;if(r){const{height:i}=r.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}u>L&&l.classList.remove("is-hidden")}catch{a.error({message:"Cannot fetch images. Try again later.",position:"topRight"})}finally{y()}b.reset()}async function P(){n+=1,g();try{const s=await m(c,n);f(s.hits),n*L>=u&&(l.classList.add("is-hidden"),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a.error({message:"Error loading more images.",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
