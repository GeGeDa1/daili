const url = $request.url;

if (url.includes("itdog.cn")) {
    let body = $response.body || '';
    body = body.replace(/<div\s+class="top_pic_ad\s+gg_link"[^>]*>[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+class="lantern\s+lantern_left\s+gg_link"[^>]*>[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+class="lantern\s+lantern_right\s+gg_link"[^>]*>[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+class="gg_link"[^>]*>[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+class="partner"[^>]*>[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+class="col-12">[\s\S]*?<h5[^>]*>赞助商<\/h5>[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+class="col-12\s+gg_link"[^>]*>[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+style="position:\s*relative;[^>]*?>[\s\S]*?<a\s+rel="noopener\s+nofollow"[^>]*?>[\s\S]*?广告[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+style="display:\s*inline-flex;"\s+class="gg_link"[^>]*>[\s\S]*?<\/div>/gi, '');
    body = body.replace(/<div\s+class="row"[^>]*>[\s\S]*?<\/div>/gi, '');
    $done({ body });
} else {
    $done();
}