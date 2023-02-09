exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 4741:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Small_main__tmHvQ",
	"body": "Small_body__E8T_J"
};


/***/ }),

/***/ 7453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Small_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4741);
/* harmony import */ var _styles_Small_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Small_module_css__WEBPACK_IMPORTED_MODULE_3__);




const Device = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "device",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Small_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Small_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "Please Switch to a Bigger Screen to use this Dashboard"
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Device);


/***/ }),

/***/ 4743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "o9": () => (/* binding */ forgetPassword),
/* harmony export */   "mc": () => (/* binding */ reset)
/* harmony export */ });
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2369);

async function login(credentials) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/users/signin", credentials);
    return data;
}
async function forgetPassword(email) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/users/resetPassword", {
        email
    });
    return data;
}
async function reset(id, password) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch(`/users/${id}`, {
        password
    });
    return data;
}


/***/ }),

/***/ 2369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ })

};
;