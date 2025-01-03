const url = $request.url;

if (url.includes("uaa.com")) {
    let body = $response.body || '';
    
    // 在这里你可以对所有路径进行处理
    // 比如替换掉广告内容
    body = body.replace(/<div\s+class="banner_box"[^>]*>[\s\S]*?<\/div>\s*<!-- banner结束 -->/gi, '');

    
    

    $done({ body });
} else {
    $done();
}