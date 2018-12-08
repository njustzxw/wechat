import http from "./ajax";

// 用户登录
export const login = params => {
    return http.fetchPost("user/login", params);
};

// 好友搜索
export const searchFriend = params => {
    return http.fetchGet("user/searchfriend", params);
};