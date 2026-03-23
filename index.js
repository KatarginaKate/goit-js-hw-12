import{a as u,S as d,i as a}from"./assets/vendor-BLkLXWwN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function m(s){const n=`https://pixabay.com/api/?key=55027621-850b52e35e959b3f4fd98aefc&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await u.get(n)).data}catch(e){throw console.error("Error fetching images:",e),e}}const l=document.querySelector(".gallery"),f=document.querySelector(".loader"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(t=>`
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
`).join("");l.insertAdjacentHTML("beforeend",o),p.refresh()}function g(){l.innerHTML=""}function h(){f.classList.remove("is-hidden")}function b(){f.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",L);async function L(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter a search query",position:"topRight"});return}g(),h();try{const t=await m(o);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),c.reset()}catch(t){console.error("Error fetching images:",t),a.error({message:"Cannot fetch images. Please try again later.",position:"topRight"})}finally{b()}c.reset()}
//# sourceMappingURL=index.js.map
