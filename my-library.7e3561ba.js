var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var c={id:e,exports:{}};return t[e]=c,l.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=l),l("lJ5oQ"),l("dpZmf");const c=(0,(n=l("1DTXP")).default)();function a(e){const t=e.genres.map((e=>e.name)).join(", ");c.popularFilmsList.insertAdjacentHTML("afterbegin",` <li class="card__item" id=${e.id}>\n        <a class="card__link" id="429473" href="#">\n          <img\n            src="https://image.tmdb.org/t/p/w500/${e.poster_path}"\n            alt="${e.original_title}"\n            class="card__poster"\n          />\n\n          <h2 class="card__title">${e.original_title}</h2>\n          <div class="card__wrap">\n            <p class="card__description">${t} | ${e.release_date.slice(0,4)}</p>\n            <p class="card__rating">${e.vote_average.toFixed(1)}</p>\n          </div>\n        </a>\n      </li>`)}var n=l("1DTXP"),d=l("fQE3M");d=l("fQE3M");l("3qt3Q");const r=(0,n.default)();r.watchedBtn.addEventListener("click",(function(){r.watchedBtn.setAttribute("disabled",!0),r.queueBtn.removeAttribute("disabled"),r.addToWatchedBtn.textContent="Remove from Watched",r.addToQueueBtn.textContent="Add to Queue",r.addToWatchedBtn.addEventListener("click",_),r.addToQueueBtn.addEventListener("click",p),document.querySelectorAll(".card__item").forEach((e=>{e.remove()})),function(){const e=localStorage.getItem("watched");JSON.parse(e).map((e=>{a(e)}))}()})),r.queueBtn.addEventListener("click",(function(){r.queueBtn.setAttribute("disabled",!0),r.watchedBtn.removeAttribute("disabled"),r.addToWatchedBtn.textContent="Add to Watched",r.addToQueueBtn.textContent="Remove from Queue",r.addToQueueBtn.addEventListener("click",h),r.addToWatchedBtn.addEventListener("click",S),document.querySelectorAll(".card__item").forEach((e=>{e.remove()})),function(){const e=localStorage.getItem("queue");JSON.parse(e).map((e=>{a(e)}))}()}));let i=[],s=[],u=[],m=[];const g=localStorage.getItem("queue");JSON.parse(g).map((e=>{s.push(e),u.push(e)}));const f=localStorage.getItem("watched");function p(){const e=document.querySelector(".film__poster");document.querySelectorAll(".card__item").forEach((t=>{e.id===t.id&&(console.log(e.id),console.log(t.id),m.map((e=>{if(console.log(e.id),e.id===Number(t.id)){console.log(e.id),console.log(t.id);const o=m.indexOf(e);console.log(o),u.push(e),s.push(e),m.splice(o,1),i.splice(o,1),t.remove(),(0,d.default)();const l=localStorage.getItem("watched"),c=JSON.parse(l);localStorage.removeItem("watched",c),localStorage.setItem("watched",JSON.stringify(i));const a=localStorage.getItem("queue"),n=JSON.parse(a);localStorage.removeItem("queue",n),localStorage.setItem("queue",JSON.stringify(s))}})))}))}function S(){const e=document.querySelector(".film__poster");document.querySelectorAll(".card__item").forEach((t=>{e.id===t.id&&(console.log(e.id),console.log(t.id),u.map((e=>{if(console.log(e.id),e.id===Number(t.id)){console.log(e.id),console.log(t.id);const o=u.indexOf(e);console.log(o),m.push(e),i.push(e),u.splice(o,1),s.splice(o,1),t.remove(),(0,d.default)();const l=localStorage.getItem("watched"),c=JSON.parse(l);localStorage.removeItem("watched",c),localStorage.setItem("watched",JSON.stringify(i));const a=localStorage.getItem("queue"),n=JSON.parse(a);localStorage.removeItem("queue",n),localStorage.setItem("queue",JSON.stringify(s))}})))}))}function h(){const e=document.querySelector(".film__poster");document.querySelectorAll(".card__item").forEach((t=>{e.id===t.id&&(console.log(e.id),console.log(t.id),s.map((e=>{if(console.log(e.id),e.id===Number(t.id)){console.log(e.id),console.log(t.id);const o=s.indexOf(e);s.splice(o,1),t.remove(),(0,d.default)();const l=localStorage.getItem("queue"),c=JSON.parse(l);localStorage.removeItem("queue",c),localStorage.setItem("queue",JSON.stringify(s))}})))}))}function _(){const e=document.querySelector(".film__poster");document.querySelectorAll(".card__item").forEach((t=>{e.id===t.id&&(console.log(e.id),console.log(t.id),i.map((e=>{if(console.log(e.id),e.id===Number(t.id)){console.log(e.id),console.log(t.id);const o=i.indexOf(e);i.splice(o,1),t.remove(),(0,d.default)();const l=localStorage.getItem("watched"),c=JSON.parse(l);localStorage.removeItem("watched",c),localStorage.setItem("watched",JSON.stringify(i))}})))}))}JSON.parse(f).map((e=>{i.push(e),m.push(e)})),l("fQE3M");
//# sourceMappingURL=my-library.7e3561ba.js.map
