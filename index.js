import{a as p,S as m,i}from"./assets/vendor-BLkLXWwN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const g="55027621-850b52e35e959b3f4fd98aefc",y="https://pixabay.com/api/";let n=1,f="";async function h(s){s!==f&&(f=s,n=1);const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:15};try{const e=await p.get(y,{params:o});return n+=1,e.data}catch(e){throw console.error("Error fetching images:",e),e}}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const o=s.map(e=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${e.likes}</p>
    <p class="info-item"><b>Views</b> ${e.views}</p>
    <p class="info-item"><b>Comments</b> ${e.comments}</p>
    <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
  </div>
</li>
`).join("");u.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){u.innerHTML=""}function P(){d.classList.remove("is-hidden")}function S(){d.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",v);async function v(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query",position:"topRight"});return}w(),P();try{const e=await h(o);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e.hits),c.reset()}catch(e){console.error("Error fetching images:",e),i.error({message:"Cannot fetch images. Please try again later.",position:"topRight"})}finally{S()}c.reset()}
//# sourceMappingURL=index.js.map
