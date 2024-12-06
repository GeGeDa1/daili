const url = $request.url;

if (url.includes("boce.com")) {
    let body = $response.body || '';
    
    // 在这里你可以对所有路径进行处理
    // 比如替换掉广告内容
    body = body.replace(/<div\s+class="money_box\s+mt-16"[^>]*>[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="money_box"[^>]*>[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="money_left"[^>]*>[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="money_right"[^>]*>[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="contact_right"[^>]*>[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="contact_right01b"[^>]*?>[\s\S]*?在线客服[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="contact_right01b"[^>]*?>[\s\S]*?微信客服[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="contact_right01b"[^>]*?>[\s\S]*?400-008-0908[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="contact_right01b"[^>]*?>[\s\S]*?意见反馈[\s\S]*?<\/div>/g, '');
    body = body.replace(/<div\s+class="contact_right01d"[^>]*?>[\s\S]*?在线客服[\s\S]*?<\/div>/g, '');
    body = body.replace(/<ul\s+class="clearfix\s+mr-24">[\s\S]*?扫码关注微信公众号[\s\S]*?<\/ul>/g, '');
    body = body.replace(/<ul\s+class="clearfix">[\s\S]*?扫码进入小程序[\s\S]*?<\/ul>/g, '');
    body = body.replace(/<div\s+class="contact_right01 mt-8">[^>]*>[\s\S]*?<\/div>/g, '');
    body = body.replace(/<ul\s+class="isDns clearfix"[^>]*>[\s\S]*?<\/ul>/g, '');
    body = body.replace(/<p\s+class="psText"[^>]*>[\s\S]*?<\/p>/g, '');
    body = body.replace(/<div\s+class="title-g\s+mb-16">赞助商<\/div>/g, '');
    body = body.replace(/<div\s+class="index-sponsor\s+flex">[\s\S]*?<\/div>/g, '');
    body = body.replace(/<!-- footer-end -->[\s\S]*?<\/div>\s*<\/div>/g, '');
    body = body.replace(/<span\s+class="iconfont\s+iconsanjiao-l">[\s\S]*?<\/div>\s*<\/div>/g, '');
    

    $done({ body });
} else {
    $done();
}