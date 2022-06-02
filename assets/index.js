/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");


const sections = document.querySelectorAll('.section')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')
const firstSkill = document.querySelector('.skill:first-child')
const skCounters = document.querySelectorAll('.counter span')
const progressBars = document.querySelectorAll('.skill svg circle')



function PageTransitions(){
 // Button click active class
 for(let i = 0; i < sectBtn.length; i++){
  sectBtn[i].addEventListener('click', function() {
   let currentBtn = document.querySelectorAll('.active-btn')
   currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
   this.className += ' active-btn'
  })
 }

 // Sections Active class
 allSections.addEventListener('click', (e) => {
  const id = e.target.dataset.id
  if(id){
   // hide other section
   sections.forEach((section) => {
    section.classList.remove('active')
   })

   const element = document.getElementById(id)
   element.classList.add('active')
  }
 })

 // Toggle theme
 const themeBtn = document.querySelector('.theme-btn')
 themeBtn.addEventListener('click', ()=> {
  let element = document.body
  element.classList.toggle('light-mode')
 })
}

PageTransitions()
})();

/******/ })()
;
//# sourceMappingURL=index.js.map