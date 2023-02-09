"use strict";
exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 2437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bW": () => (/* binding */ getAds),
/* harmony export */   "Vl": () => (/* binding */ createAd),
/* harmony export */   "Di": () => (/* binding */ deleteAd),
/* harmony export */   "hJ": () => (/* binding */ postAd),
/* harmony export */   "_l": () => (/* binding */ getAd),
/* harmony export */   "UH": () => (/* binding */ updateAd)
/* harmony export */ });
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2369);

//get all ads
async function getAds(page) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/ads?page=${page}`);
    return data;
}
//create an ad
async function createAd(input) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/ads", input);
    return data;
}
//delete an ad
async function deleteAd(id) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`/ads/${id}`);
    return data;
}
//post image of ad and update
async function postAd(id, file) {
    var formData = new FormData();
    formData.append("adImage", file);
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/ads/upload/image/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return data;
}
//get single
async function getAd(id) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/ads/${id}`);
    return data;
}
//update ad
async function updateAd(id, input) {
    const { data  } = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch(`ads/${id}`, input);
    return data;
}


/***/ })

};
;