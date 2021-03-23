webpackHotUpdate_N_E("pages/blog",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/*! exports provided: skills, experiences, projects, posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiences", function() { return experiences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
var skills = [{
  skill: "Javascript",
  percentage: 100
}, {
  skill: "Golang",
  percentage: 80
}, {
  skill: "Nodejs",
  percentage: 90
}, {
  skill: "Blockchain",
  percentage: 40
}, {
  skill: "Physics",
  percentage: 70
}, {
  skill: "Economics",
  percentage: 70
}, {
  skill: "Machine Learning",
  percentage: 70
}];
var experiences = [{
  title: "Software developer at Microsoft",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem officiis fugiat vel animi aliquam inventore rem. Quo laudantium temporibus cupiditate. Aut?",
  from: 2000,
  to: 2005
}, {
  title: "Software developer at Google",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem officiis fugiat vel animi aliquam inventore rem. Quo laudantium temporibus cupiditate. Aut?",
  from: 2005,
  to: 2007
}, {
  title: "Software developer at SpaceX",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem officiis fugiat vel animi aliquam inventore rem. Quo laudantium temporibus cupiditate. Aut?",
  from: 2010
}];
var projects = [{
  name: "Awesome Website 1",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  image: "portfolio1.jpeg"
}, {
  name: "Awesome Website 2",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  image: "portfolio2.jpg"
}, {
  name: "Awesome Website 3",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  image: "portfolio3.png"
}, {
  name: "Awesome Website 4",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  image: "portfolio4.png"
}, {
  name: "Awesome Website 5",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  image: "portfolio5.jpeg"
}, {
  name: "Awesome Website 6",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  image: "portfolio6.jpeg"
}];
var posts = [{
  title: "React",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: ""
}, {
  title: "Angular",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: "https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2020/02/Screenshot-2020-03-02-at-13.07.07.png?fit=1540%2C598"
}, {
  title: "Nextjs",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
  imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faie.edu.au%2Fwp-content%2Fuploads%2F2018%2F03%2Fgame-programming-03.jpg"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJwcm9qZWN0cyIsIm5hbWUiLCJpbWFnZSIsInBvc3RzIiwiY29udGVudCIsImltYWdlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNsQjtBQUNFQyxPQUFLLEVBQUUsWUFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQURrQixFQUtsQjtBQUNFRCxPQUFLLEVBQUUsUUFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQUxrQixFQVNsQjtBQUNFRCxPQUFLLEVBQUUsUUFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQVRrQixFQWFsQjtBQUNFRCxPQUFLLEVBQUUsWUFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQWJrQixFQWlCbEI7QUFDRUQsT0FBSyxFQUFFLFNBRFQ7QUFFRUMsWUFBVSxFQUFFO0FBRmQsQ0FqQmtCLEVBcUJsQjtBQUNFRCxPQUFLLEVBQUUsV0FEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQXJCa0IsRUF5QmxCO0FBQ0VELE9BQUssRUFBRSxrQkFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQXpCa0IsQ0FBZjtBQStCRSxJQUFNQyxXQUFXLEdBQUcsQ0FDekI7QUFDRUMsT0FBSyxFQUFFLGlDQURUO0FBRUVDLGFBQVcsRUFDVCxtT0FISjtBQUlFQyxNQUFJLEVBQUUsSUFKUjtBQUtFQyxJQUFFLEVBQUU7QUFMTixDQUR5QixFQVF6QjtBQUNFSCxPQUFLLEVBQUUsOEJBRFQ7QUFFRUMsYUFBVyxFQUNULG1PQUhKO0FBSUVDLE1BQUksRUFBRSxJQUpSO0FBS0VDLElBQUUsRUFBRTtBQUxOLENBUnlCLEVBZXpCO0FBQ0VILE9BQUssRUFBRSw4QkFEVDtBQUVFQyxhQUFXLEVBQ1QsbU9BSEo7QUFJRUMsTUFBSSxFQUFFO0FBSlIsQ0FmeUIsQ0FBcEI7QUF1QkEsSUFBTUUsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE1BQUksRUFBRSxtQkFEUjtBQUVFSixhQUFXLEVBQ1QsdUlBSEo7QUFJRUssT0FBSyxFQUFFO0FBSlQsQ0FEc0IsRUFPdEI7QUFDRUQsTUFBSSxFQUFFLG1CQURSO0FBRUVKLGFBQVcsRUFDVCx1SUFISjtBQUlFSyxPQUFLLEVBQUU7QUFKVCxDQVBzQixFQWF0QjtBQUNFRCxNQUFJLEVBQUUsbUJBRFI7QUFFRUosYUFBVyxFQUNULHVJQUhKO0FBSUVLLE9BQUssRUFBRTtBQUpULENBYnNCLEVBbUJ0QjtBQUNFRCxNQUFJLEVBQUUsbUJBRFI7QUFFRUosYUFBVyxFQUNULHVJQUhKO0FBSUVLLE9BQUssRUFBRTtBQUpULENBbkJzQixFQXlCdEI7QUFDRUQsTUFBSSxFQUFFLG1CQURSO0FBRUVKLGFBQVcsRUFDVCx1SUFISjtBQUlFSyxPQUFLLEVBQUU7QUFKVCxDQXpCc0IsRUErQnRCO0FBQ0VELE1BQUksRUFBRSxtQkFEUjtBQUVFSixhQUFXLEVBQ1QsdUlBSEo7QUFJRUssT0FBSyxFQUFFO0FBSlQsQ0EvQnNCLENBQWpCO0FBdUNBLElBQU1DLEtBQUssR0FBRyxDQUNuQjtBQUNFUCxPQUFLLEVBQUUsT0FEVDtBQUVFUSxTQUFPLEVBQ0wsdUlBSEo7QUFJRUMsVUFBUSxFQUNOO0FBTEosQ0FEbUIsRUFRbkI7QUFDRVQsT0FBSyxFQUFFLFNBRFQ7QUFFRVEsU0FBTyxFQUNMLHVJQUhKO0FBSUVDLFVBQVEsRUFDTjtBQUxKLENBUm1CLEVBZW5CO0FBQ0VULE9BQUssRUFBRSxRQURUO0FBRUVRLFNBQU8sRUFDTCx1SUFISjtBQUlFQyxVQUFRLEVBQ047QUFMSixDQWZtQixDQUFkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuNzVkM2U4M2UyZTVhZWFjYTFiYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHNraWxsOiBcIkphdmFzY3JpcHRcIixcclxuICAgICAgcGVyY2VudGFnZTogMTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2tpbGw6IFwiR29sYW5nXCIsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2tpbGw6IFwiTm9kZWpzXCIsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDkwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2tpbGw6IFwiQmxvY2tjaGFpblwiLFxyXG4gICAgICBwZXJjZW50YWdlOiA0MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNraWxsOiBcIlBoeXNpY3NcIixcclxuICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBza2lsbDogXCJFY29ub21pY3NcIixcclxuICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBza2lsbDogXCJNYWNoaW5lIExlYXJuaW5nXCIsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiU29mdHdhcmUgZGV2ZWxvcGVyIGF0IE1pY3Jvc29mdFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW0gb2ZmaWNpaXMgZnVnaWF0IHZlbCBhbmltaSBhbGlxdWFtIGludmVudG9yZSByZW0uIFF1byBsYXVkYW50aXVtIHRlbXBvcmlidXMgY3VwaWRpdGF0ZS4gQXV0P1wiLFxyXG4gICAgICBmcm9tOiAyMDAwLFxyXG4gICAgICB0bzogMjAwNSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNvZnR3YXJlIGRldmVsb3BlciBhdCBHb29nbGVcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ludCBleGNlcHR1cmkgZWEgZXhwbGljYWJvLiBJbGx1bSBzdXNjaXBpdCBpbGxvLCBwb3JybyBxdWlzcXVhbSB2b2x1cHRhdGVtIG9mZmljaWlzIGZ1Z2lhdCB2ZWwgYW5pbWkgYWxpcXVhbSBpbnZlbnRvcmUgcmVtLiBRdW8gbGF1ZGFudGl1bSB0ZW1wb3JpYnVzIGN1cGlkaXRhdGUuIEF1dD9cIixcclxuICAgICAgZnJvbTogMjAwNSxcclxuICAgICAgdG86IDIwMDcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgU3BhY2VYXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgZXhjZXB0dXJpIGVhIGV4cGxpY2Fiby4gSWxsdW0gc3VzY2lwaXQgaWxsbywgcG9ycm8gcXVpc3F1YW0gdm9sdXB0YXRlbSBvZmZpY2lpcyBmdWdpYXQgdmVsIGFuaW1pIGFsaXF1YW0gaW52ZW50b3JlIHJlbS4gUXVvIGxhdWRhbnRpdW0gdGVtcG9yaWJ1cyBjdXBpZGl0YXRlLiBBdXQ/XCIsXHJcbiAgICAgIGZyb206IDIwMTAsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkF3ZXNvbWUgV2Vic2l0ZSAxXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgZXhjZXB0dXJpIGVhIGV4cGxpY2Fiby4gSWxsdW0gc3VzY2lwaXQgaWxsbywgcG9ycm8gcXVpc3F1YW0gdm9sdXB0YXRlbVwiLFxyXG4gICAgICBpbWFnZTogXCJwb3J0Zm9saW8xLmpwZWdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQXdlc29tZSBXZWJzaXRlIDJcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ludCBleGNlcHR1cmkgZWEgZXhwbGljYWJvLiBJbGx1bSBzdXNjaXBpdCBpbGxvLCBwb3JybyBxdWlzcXVhbSB2b2x1cHRhdGVtXCIsXHJcbiAgICAgIGltYWdlOiBcInBvcnRmb2xpbzIuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkF3ZXNvbWUgV2Vic2l0ZSAzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgZXhjZXB0dXJpIGVhIGV4cGxpY2Fiby4gSWxsdW0gc3VzY2lwaXQgaWxsbywgcG9ycm8gcXVpc3F1YW0gdm9sdXB0YXRlbVwiLFxyXG4gICAgICBpbWFnZTogXCJwb3J0Zm9saW8zLnBuZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBd2Vzb21lIFdlYnNpdGUgNFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgaW1hZ2U6IFwicG9ydGZvbGlvNC5wbmdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQXdlc29tZSBXZWJzaXRlIDVcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ludCBleGNlcHR1cmkgZWEgZXhwbGljYWJvLiBJbGx1bSBzdXNjaXBpdCBpbGxvLCBwb3JybyBxdWlzcXVhbSB2b2x1cHRhdGVtXCIsXHJcbiAgICAgIGltYWdlOiBcInBvcnRmb2xpbzUuanBlZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBd2Vzb21lIFdlYnNpdGUgNlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgaW1hZ2U6IFwicG9ydGZvbGlvNi5qcGVnXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJSZWFjdFwiLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgZXhjZXB0dXJpIGVhIGV4cGxpY2Fiby4gSWxsdW0gc3VzY2lwaXQgaWxsbywgcG9ycm8gcXVpc3F1YW0gdm9sdXB0YXRlbVwiLFxyXG4gICAgICBpbWFnZVVSTDpcclxuICAgICAgICBcIlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQW5ndWxhclwiLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgIFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQgZXhjZXB0dXJpIGVhIGV4cGxpY2Fiby4gSWxsdW0gc3VzY2lwaXQgaWxsbywgcG9ycm8gcXVpc3F1YW0gdm9sdXB0YXRlbVwiLFxyXG4gICAgICBpbWFnZVVSTDpcclxuICAgICAgICBcImh0dHBzOi8vaTEud3AuY29tL2Jsb2cuZW5yaXF1ZW9yaW9sLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMi9TY3JlZW5zaG90LTIwMjAtMDMtMDItYXQtMTMuMDcuMDcucG5nP2ZpdD0xNTQwJTJDNTk4XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJOZXh0anNcIixcclxuICAgICAgY29udGVudDpcclxuICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgaW1hZ2VVUkw6XHJcbiAgICAgICAgXCJodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZhaWUuZWR1LmF1JTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE4JTJGMDMlMkZnYW1lLXByb2dyYW1taW5nLTAzLmpwZ1wiLFxyXG4gICAgfSxcclxuICBdOyJdLCJzb3VyY2VSb290IjoiIn0=