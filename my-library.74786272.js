!function(){var e="light-theme",t="dark-theme",c=document.querySelector("#theme-switch"),a=document.querySelector("body");function n(e,t){a.classList.add(e),a.classList.remove(t),localStorage.setItem("THEME",e)}function o(){return{popularFilmsList:document.querySelector(".container__main"),spinner:document.querySelector(".spinner"),modalEl:document.querySelector(".backdrop-film"),movieEl:document.querySelector(".card__item"),watchedBtn:document.querySelector('[data-action="watched"]'),queueBtn:document.querySelector('[data-action="queue"]'),modalRendEl:document.querySelector(".film__container"),body:document.querySelector("body"),modalTeamEl:document.querySelector(".backdrop-team"),modalTeamOpenBtn:document.querySelector('[data-action="team-open-modal"]'),modalTeamCloseBtn:document.querySelector('[data-action="team-close-modal"]'),paginationEl:document.querySelector(".pagination ul")}}localStorage.getItem("THEME")===t?(c.checked=!0,n(t,e)):(c.checked=!1,n(e,t)),c.addEventListener("change",(function(c){c.target.checked?n(t,e):n(e,t)}));var r=o();o().watchedBtn.addEventListener("click",(function(){var e=localStorage.getItem("settings");JSON.parse(e).map((function(e){var t,c;t="8fa17eefa9c2b424e1a30217c39bc412",c="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(t),fetch(c).then((function(e){return e.json()})).then((function(e){var t;console.log(e),t=e,console.log(t),r.popularFilmsList.insertAdjacentHTML("afterbegin",'<li class="card__item" id='.concat(t.id,'>\n        <a class="card__link" id="429473" href="#">\n          <img\n            src="https://image.tmdb.org/t/p/w500/').concat(t.poster_path,'"\n            alt="{$}{film.original_title}"\n            class="card__poster"\n          />\n\n          <h2 class="card__title">').concat(t.original_title,'</h2>\n          <div class="card__wrap">\n            <p class="card__description">{$}{genres} | ').concat(t.release_date.slice(0,4),'</p>\n            <p class="card__rating"></p>').concat(t.vote_average.toFixed(1),"</p>\n          </div>\n        </a>\n      </li>"))})).catch((function(e){console.log(e)}))}))}))}();
//# sourceMappingURL=my-library.74786272.js.map
