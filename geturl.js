var page = require('webpage').create();
phantom.addCookie({
    'name': 'JSESSIONID',
    'value': 'XXX',
    'domain': 'api.weibo.com'
})
phantom.addCookie({
    'name': 'SUB',
    'value': 'XXX',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUBP',
    'value': 'XXX',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUE',
    'value': 'XXX',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUHB',
    'value': 'XXX',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUP',
    'value': 'XXX',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUS',
    'value': 'XXX',
    'domain': '.weibo.com'
})
url = 'https://api.weibo.com/oauth2/authorize?redirect_uri=https%3A//api.weibo.com/oauth2/default.html&response_type=code&client_id=4021901498'
page.open(url, function () {
	console.log(page.url);
	phantom.exit();
});
