import{a as w,S as v,i}from"./assets/vendor-BLkLXWwN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S="55027621-850b52e35e959b3f4fd98aefc",q="https://pixabay.com/api/";async function u(s,t=1){const r={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await w.get(q,{params:r})).data}catch(a){throw console.error("Error fetching images:",a),a}}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const t=s.map(r=>`
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
`).join("");m.insertAdjacentHTML("beforeend",t),R.refresh()}function E(){m.innerHTML=""}function h(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}const L=document.querySelector(".form"),l=document.querySelector(".btn-load-more");let c="",n=1,f=0,b=15;L.addEventListener("submit",P);l.addEventListener("click",$);async function P(s){if(s.preventDefault(),c=s.target.elements["search-text"].value.trim(),!c){i.warning({message:"Please enter a search query",position:"topRight"});return}n=1,E(),l.classList.add("is-hidden"),h();try{const t=await u(c,n);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}f=t.totalHits,g(t.hits),f>b&&l.classList.remove("is-hidden")}catch{i.error({message:"Cannot fetch images. Try again later.",position:"topRight"})}finally{y()}L.reset()}async function $(){n+=1,h();try{const s=await u(c,n);g(s.hits),n*b>=f&&(l.classList.add("is-hidden"),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Error loading more images.",position:"topRight"})}finally{y()}}
//# sourceMappingURL=index.js.map
