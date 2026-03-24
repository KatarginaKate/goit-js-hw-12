import{a as w,S as v,i as a}from"./assets/vendor-BLkLXWwN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const S="55027621-850b52e35e959b3f4fd98aefc",q="https://pixabay.com/api/";async function f(s,e=1){const t={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};try{return(await w.get(q,{params:t})).data}catch(i){throw console.error("Error fetching images:",i),i}}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),B=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const e=s.map(t=>`
<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t.likes}</p>
    <p class="info-item"><b>Views</b> ${t.views}</p>
    <p class="info-item"><b>Comments</b> ${t.comments}</p>
    <p class="info-item"><b>Downloads</b> ${t.downloads}</p>
  </div>
</li>
`).join("");m.insertAdjacentHTML("beforeend",e),B.refresh()}function R(){m.innerHTML=""}function p(){g.classList.remove("is-hidden")}function y(){g.classList.add("is-hidden")}document.querySelector(".btn-load-more");const b=document.querySelector(".form"),d=document.querySelector(".btn-load-more");let l="",n=1,u=0,L=15;b.addEventListener("submit",E);d.addEventListener("click",I);async function E(s){if(s.preventDefault(),l=s.target.elements["search-text"].value.trim(),!l){a.warning({message:"Please enter a search query",position:"topRight"});return}n=1,R(),d.classList.add("is-hidden"),p();try{const e=await f(l,n);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}u=e.totalHits,h(e.hits);const t=document.querySelector(".gallery").firstElementChild;if(t){const{height:i}=t.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}u>L&&d.classList.remove("is-hidden")}catch{a.error({message:"Cannot fetch images. Try again later.",position:"topRight"})}finally{y()}b.reset()}async function I(){n+=1,disableLoadMoreBtn(),p();try{const s=await f(l,n);h(s.hits);const e=document.querySelector(".gallery").firstElementChild;if(e){const{height:i}=e.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}n*L>=u&&(hideLoadMoreBtn(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a.error({message:"Error loading more images.",position:"topRight"})}finally{enableLoadMoreBtn(),y()}}
//# sourceMappingURL=index.js.map
