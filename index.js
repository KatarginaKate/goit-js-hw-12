import{a as S,S as q,i as M}from"./assets/vendor-BLkLXWwN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const B="55027621-850b52e35e959b3f4fd98aefc",E="https://pixabay.com/api/";async function m(o,e=1){const r={key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};try{return(await S.get(E,{params:r})).data}catch(i){throw console.error("Error fetching images:",i),i}}const h=document.querySelector(".gallery"),d=document.querySelector(".loader"),s=document.querySelector(".btn-load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const e=o.map(r=>`
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
`).join("");h.insertAdjacentHTML("beforeend",e),$.refresh()}function P(){h.innerHTML=""}function y(){d&&d.classList.remove("is-hidden")}function g(){d&&d.classList.add("is-hidden")}function T(){s&&(s.classList.remove("is-hidden"),s.disabled=!1)}function b(){s&&(s.classList.add("is-hidden"),s.disabled=!0)}function O(){s&&(s.disabled=!0)}function x(){s&&(s.disabled=!1)}function a(o,e="info"){M[e]({message:o,position:"topRight"})}const L=document.querySelector(".form"),I=document.querySelector(".btn-load-more");let l="",c=1,u=0,w=15;L.addEventListener("submit",R);I.addEventListener("click",A);async function R(o){if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),!l)return a("Please enter a search query","warning");c=1,P(),b(),y();try{const e=await m(l,c);if(e.hits.length===0)return a("Sorry, there are no images matching your search query.","error");u=e.totalHits,p(e.hits),v(),u>w&&T()}catch{a("Cannot fetch images. Try again later.","error")}finally{g(),L.reset()}}async function A(){c+=1,O(),y();try{const o=await m(l,c);p(o.hits),v(),c*w>=u&&(b(),a("You've reached the end of search results.","info"))}catch{a("Error loading more images.","error")}finally{x(),g()}}function v(){const o=document.querySelector(".gallery").firstElementChild;if(o){const{height:e}=o.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
