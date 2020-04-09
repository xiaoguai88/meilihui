import axios from "axios"

const instance = axios.create({
    baseURL: 'https://b2capigateway.yiguo.com', //基本的url
    timeout: 3000,  //延时默认3秒
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "appName": "3000025"
    }  //请求头
});



export default instance