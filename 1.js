var page = require('webpage').create();
phantom.addCookie({
    'name': 'JSESSIONID',
    'value': '32E17783695D7898293AB377DB9A4208',
    'domain': 'api.weibo.com'
})
phantom.addCookie({
    'name': 'SUB',
    'value': '_2A257ZdUjDeTxGeNJ7FoX9S3LyD6IHXVYE0HrrDV8PUJbuNAKLRD6kW8PFcA4fzY0xQxavtcwMP4y72-H2Q..',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUBP',
    'value': '0033WrSXqPxfM725Ws9jqgMF55529P9D9WF2XN4GVnCZY.zpfoXWbfZ25JpX5K2t',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUE',
    'value': 'es%3Dfb12612c62760c943616a623832c4921%26ev%3Dv1%26es2%3Dbfc8838cb73c3c1d3a76c61b68a8e161%26rs0%3DGVSvvW5u6%252BpUuZj7NyqXUgMtv%252BAc%252BBbMeSzEcl5M8VENej%252BwcEUfh%252FjNg87fE%252BPdCR9%252FPfjjuAqLs%252FoTQn0y4vmT%252BgQtQIf9fBHJcOl6rLIgzw3H6G6eNSx3vYB%252BAcGWH880Isxj%252FPIDNIF%252FmfckhNVLYDNT1YlfmrtAhebjIgM%253D%26rv%3D0',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUHB',
    'value': '05iq_ObEQ2OLx-',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUP',
    'value': 'cv%3D1%26bt%3D1449239923%26et%3D1449241723%26d%3Dc909%26i%3D04db%26us%3D1%26vf%3D0%26vt%3D0%26ac%3D2%26st%3D0%26uid%3D5778653732%26name%3Dmail%2540jiawei.me%26nick%3D%25E5%25A4%25A9%25E6%25B0%2594%25E5%2596%25B5%25E4%25BA%2586%25E4%25B8%25AA%25E5%2592%25AA%26fmp%3D%26lcp%3D',
    'domain': '.weibo.com'
})
phantom.addCookie({
    'name': 'SUS',
    'value': 'SID-5778653732-1449239923-XD-qgleo-4967368d66c90e61394dd9631352baaa',
    'domain': '.weibo.com'
})
url = 'https://api.weibo.com/oauth2/authorize?redirect_uri=https%3A//api.weibo.com/oauth2/default.html&response_type=code&client_id=4021901498'
page.open(url, function () {
	console.log(page.url);
	phantom.exit();
});
