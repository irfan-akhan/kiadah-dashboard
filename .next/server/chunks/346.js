"use strict";
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zj": () => (/* binding */ getDoctors),
/* harmony export */   "PI": () => (/* binding */ getDoctor),
/* harmony export */   "oF": () => (/* binding */ setDoctor),
/* harmony export */   "om": () => (/* binding */ deleteDoctor)
/* harmony export */ });
/* unused harmony export getDoctorPayouts */
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2369);

async function getDoctors(page, category) {
    let url = `/doctors?page=${page}`;
    if (category) {
        url = url + `&category=${category}`;
    }
    const res = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(url + "&is_verified=true");
    let doctors = res.data.data.doctors;
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`${url}&is_verified=false&isActive=false`);
    doctors = [
        ...doctors,
        ...data.data.doctors
    ];
    return doctors;
}
async function getDoctor(id) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/doctors/${id}`);
    const doctor = data.data;
    return doctor;
}
async function setDoctor(id, status, key) {
    let obj = {};
    obj[key] = status;
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch(`/doctors/${id}`, obj);
    return data;
}
async function deleteDoctor(id) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`/doctors/${id}`);
    return data;
}
async function getDoctorPayouts(id) {
    const { data  } = await Axios.get(`/doctors/payouts/${id}`);
    return data;
}


/***/ })

};
;