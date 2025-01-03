const url = $request.url;

if (url.includes("boce.com")) {
    let body = $response.body || '';
    
    // 在这里你可以对所有路径进行处理
    // 比如替换掉广告内容
    body = body.replace(/<div class="banner_box">[\s\S]*?<\/div><!-- banner结束 -->/g, '');

    
    

    $done({ body });
} else {
    $done();
}