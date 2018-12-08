import axios from "axios";
var host = "http://localhost:3333/";
var qs = require("qs");
// axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded '
axios.interceptors.response.use(
    response => {
        if (response.data.status === 10) {
            window.open("#/", "_self");
        } else {
            return response;
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:break;
                    //这里跳转登陆
                default:break;
            }
        }
    }
);
export default {
    fetchGet(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(host + url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
        });
    },
    fetchPost(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(host + url, qs.stringify(params), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
};