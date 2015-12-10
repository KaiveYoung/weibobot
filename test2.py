#!/usr/bin/python2
# -*- coding: utf-8 -*-
import requests
import random
from bs4 import BeautifulSoup
from weibo import APIClient
import os
import sys

__version__ = '0.1'
__author__ = 'zhu327'

APP_KEY = '4021901498'  # app key
APP_SECRET = '19ca8c3661c75b1ff541f8ab3ae4d7a4'  # app secret
CALLBACK_URL = 'https://api.weibo.com/oauth2/default.html'  # callback url
''' posttext.py 调用weibo SDK 命令发微博 '''

# 获取微博授权，手动操作


def getclient():
    client = APIClient(
        app_key=APP_KEY,
        app_secret=APP_SECRET,
        redirect_uri=CALLBACK_URL)
    url = client.get_authorize_url()
    output = os.popen('phantomjs 1.js')
    type(output)
    a = output.read()
    code = a.split('=')[1].rstrip()

    # print (url)    # 浏览器打开该url，取得code='xxx'类似的code输入
    #code = a
    r = client.request_access_token(code)
    access_token = r.access_token
    expires_in = r.expires_in
    client.set_access_token(access_token, expires_in)

    return client
weather = requests.get("http://m.weather.com.cn/mweather/101170101.shtml")
soup1 = BeautifulSoup(weather.text, "lxml")
weatherlist = []
daylist = []
wendulist = []
tianqilist = []
i = 0
for temp in soup1.find_all('div', class_='days7')[0].find_all('li'):
    temp2 = ""
    if len(temp.find_all('img')) == 2:
        temp2 = temp.find_all('img')[1].attrs['alt'].encode('UTF-8')
    temp1 = temp.find_all('img')[0].attrs['alt'].encode('UTF-8')
    if temp2 != "":
        if temp1 == temp2:
            weatherlist.append(temp1)
        else:
            weatherlist.append(temp1 + "转" + temp2)
    else:
        weatherlist.append(temp1)
    wendulist.append(temp.find('span').text.encode('UTF-8'))
    daylist.append(temp.find('b').text.encode('UTF-8'))
    i = i + 1
for i in range(1, 7):
    tianqilist.append(
        daylist[i] +
        ":" +
        weatherlist[i] +
        "，气温:" +
        wendulist[i])
weibotext = "喵了个咪为您发布#银川#天气预报："
for i in range(0, 6):
    weibotext = weibotext + tianqilist[i] + "。"
print weibotext
# 发微博


def posttext(client):
    text = weibotext
    utext = unicode(text, "UTF-8")
    client.statuses.update.post(status=utext)


def postimg(client):
    f = open('/home/yjw/test.jpg', 'rb')
    r = client.statuses.upload.post(status=weibotext, pic=f)
    f.close()  # APIClient
if __name__ == '__main__':
    client = getclient()
    posttext(client)
