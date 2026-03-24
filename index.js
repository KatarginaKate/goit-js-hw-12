import{a as M,i as B,S as E}from"./assets/vendor-BLkLXWwN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const I="55027621-850b52e35e959b3f4fd98aefc",$="https://pixabay.com/api/";async function y(o,e=1){const r={key:I,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};try{return(await M.get($,{params:r})).data}catch(a){throw console.error("Error fetching images:",a),a}}const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),n=document.querySelector(".btn-load-more");let m=null;function g(o){if(!d)return;const e=o.map(r=>`
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
`).join("");d.insertAdjacentHTML("beforeend",e),m?m.refresh():m=new E(".gallery a",{captionsData:"alt",captionDelay:250})}function P(){d&&(d.innerHTML="")}function b(){f&&f.classList.remove("is-hidden")}function L(){f&&f.classList.add("is-hidden")}function w(){n&&(n.classList.remove("is-hidden"),n.disabled=!1)}function h(){n&&(n.classList.add("is-hidden"),n.disabled=!0)}function T(){n&&(n.disabled=!0)}function O(){n&&(n.disabled=!1)}function i(o,e="info"){B[e]({message:o,position:"topRight"})}const v=document.querySelector(".form"),x=document.querySelector(".btn-load-more");let c="",l=1,p=0;const S=15;v.addEventListener("submit",R);x.addEventListener("click",A);async function R(o){if(o.preventDefault(),c=o.target.elements["search-text"].value.trim(),!c)return i("Please enter a search query","warning");l=1,P(),h(),b();try{const e=await y(c,l);if(e.hits.length===0)return i("Sorry, there are no images matching your search query.","error");p=e.totalHits,g(e.hits),q(),p>S?w():i("You've reached the end of search results.","info")}catch{i("Cannot fetch images. Try again later.","error")}finally{L(),v.reset()}}async function A(){l+=1,T(),h(),b();try{const o=await y(c,l);g(o.hits),q(),l*S<p?w():(h(),i("You've reached the end of search results.","info"))}catch{i("Error loading more images.","error")}finally{O(),L()}}function q(){const o=document.querySelector(".gallery").firstElementChild;if(o){const{height:e}=o.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
