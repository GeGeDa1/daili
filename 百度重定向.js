/*
📜 Loon 脚本：拦截 wakeup.baidu.com 并跳回原站
🚀 作者：定制版 by ChatGPT
📅 更新时间：2025-03-09
*/

let url = $request.url;
let headers = $request.headers;
let referer = headers['Referer'] || headers['referer'];

// 如果 Referer 存在，说明有原站点，直接跳回原站
if (referer) {
    $done({
        response: {
            status: 302,
            headers: {
                "Location": referer
            }
        }
    });
} else {
    // 如果没有 Referer，直接返回百度首页
    $done({
        response: {
            status: 302,
            headers: {
                "Location": "https://www.baidu.com/"
            }
        }
    });
}