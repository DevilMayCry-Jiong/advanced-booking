/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

const BASE_URL = "https://keycloak.interlib.com.cn/api"

// 分页条件查询工作站功能列表
function workstationFeature(params) {
    return get(BASE_URL + '/cfm-admin-service/open-api/advancedBooking/getBookingFeature', params);
}

// 分页查询工作站语言列表
function workstationLanguage(params) {
    return get(BASE_URL + '/cfm-admin-service/open-api/advancedBooking/getBookingLanguage', params);
}

// 获取提前预定日期时间
function getDateOfUse(params) {
    return get(BASE_URL + '/cfm-admin-service/open-api/advancedBooking/getDateOfUse/' + params.libraryId);
}

// 获取提前预定时间区间 
function getLibraryTimeSlot(params) {
    return post(BASE_URL + '/cfm-admin-service/open-api/advancedBooking/getLibraryTimeSlot', params);
}

// 根据筛选条件获取群组 
function queryGroup(params) {
    return post(BASE_URL + '/cfm-admin-service/open-api/advancedBooking/queryGroup', params);
}

/**
 * BOOKING DETAILS
 */

// 根据筛选条件获取默认工作站
function queryDefaultWorkstation(params){
    return post(BASE_URL + '/cfm-admin-service/open-api/advancedBooking/queryDefaultWorkstation', params);
}

// 根据筛选条件获取工作站集合
function queryWorkstationList(params){
    return post(BASE_URL + '/cfm-admin-service/open-api/advancedBooking/queryWorkstationList', params);
}

//根据图书证编号或hkid查询读者信息
function getReaderInfo(params){
    return get(BASE_URL + '/cfm-admin-service/open-api/patron/getReaderInfo', params);
}