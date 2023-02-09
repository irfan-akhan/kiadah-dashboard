"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_store__WEBPACK_IMPORTED_MODULE_2__]);
_utils_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// import Device from "../Components/Device";
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
            store: _utils_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                ";"
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ACTIONS = {
    setActiveTab: "SET_ACTIVE_TAB",
    getDoctors: "GET_DOCTORS",
    getDoctor: "GET_DOCTOR",
    getPatients: "GET_PATIENTS",
    getPatient: "GET_PATIENT",
    getAppointments: "GET_APPOINTMENTS",
    getAppointment: "GET_APPOINTMENT",
    getAds: "GET_ADS",
    setAd: "SET_AD",
    setDoctor: "SET_DOCTOR",
    setUser: "SET_USER",
    logOut: "LOG_OUT",
    getBlogs: "GET_BLOGS",
    setBlog: "SET_BLOG",
    setBlogButton: "SET_BLOG_BUTTON",
    getPatientAlert: "GET_PATIENT_ALERTS",
    getDoctorAlert: "GET_DOCTOR_ALERTS",
    setAlert: "SET_ALERT",
    getReviews: "GET_REVIEWS",
    getReview: "GET_REVIEW",
    setDashboard: "SET_DASHBOARD",
    getContacts: "GET_CONTACTS",
    getContact: "GET_CONTACT",
    getCoupons: "GET_COUPONS",
    getCoupon: "GET_COUPON",
    getCouponBtn: "SET_COUPON_BTN",
    getPayouts: "GET_PAYOUTS",
    setPayout: "SET_PAYOUT"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ACTIONS);


/***/ }),

/***/ 1650:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4861);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    tab: "dashboard",
    doctors: [],
    patients: [],
    doctor: {},
    appointments: [],
    blogs: [],
    couponBtn: false,
    user: js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("user") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("user")) : {}
};
const reducer = (state = initialState, action)=>{
    const { payload , type  } = action;
    switch(type){
        // Active Tab
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setActiveTab */ .Z.setActiveTab:
            {
                return {
                    ...state,
                    tab: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setDashboard */ .Z.setDashboard:
            {
                return {
                    ...state,
                    dashboard: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getDoctors */ .Z.getDoctors:
            {
                return {
                    ...state,
                    doctors: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPatients */ .Z.getPatients:
            {
                return {
                    ...state,
                    patients: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPatient */ .Z.getPatient:
            {
                return {
                    ...state,
                    patient: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getDoctor */ .Z.getDoctor:
            {
                return {
                    ...state,
                    doctor: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAppointments */ .Z.getAppointments:
            {
                return {
                    ...state,
                    appointments: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAppointment */ .Z.getAppointment:
            {
                return {
                    ...state,
                    appointment: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAds */ .Z.getAds:
            {
                return {
                    ...state,
                    ads: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setAd */ .Z.setAd:
            {
                return {
                    ...state,
                    ad: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setUser */ .Z.setUser:
            {
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("user", JSON.stringify(payload));
                return {
                    ...state,
                    user: {
                        ...payload,
                        loggedIn: true
                    }
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].logOut */ .Z.logOut:
            {
                return {};
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getBlogs */ .Z.getBlogs:
            {
                return {
                    ...state,
                    blogs: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setBlog */ .Z.setBlog:
            {
                return {
                    ...state,
                    blog: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setBlogButton */ .Z.setBlogButton:
            {
                return {
                    ...state,
                    button: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPatientAlert */ .Z.getPatientAlert:
            {
                return {
                    ...state,
                    patientAlert: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getDoctorAlert */ .Z.getDoctorAlert:
            {
                return {
                    ...state,
                    doctorAlerts: payload
                };
            }
        // Default Case
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getReviews */ .Z.getReviews:
            {
                return {
                    ...state,
                    reviews: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getReview */ .Z.getReview:
            {
                return {
                    ...state,
                    review: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getContacts */ .Z.getContacts:
            {
                return {
                    ...state,
                    contacts: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getContact */ .Z.getContact:
            {
                return {
                    ...state,
                    contact: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCoupons */ .Z.getCoupons:
            {
                return {
                    ...state,
                    coupons: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCoupon */ .Z.getCoupon:
            {
                return {
                    ...state,
                    coupon: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getCouponBtn */ .Z.getCouponBtn:
            {
                return {
                    ...state,
                    couponBtn: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getPayouts */ .Z.getPayouts:
            {
                return {
                    ...state,
                    payouts: payload
                };
            }
        case _actions__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setPayout */ .Z.setPayout:
            {
                return {
                    ...state,
                    payout: payload
                };
            }
        default:
            return state;
    }
};
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2654));
module.exports = __webpack_exports__;

})();