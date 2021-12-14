#!/bin/bash

# 清理原有的dist目录
rm -rf dist

# 打包微信小程序平台
npm run build:wx

# 打包支付包小程序平台
npm run build:alipay

#钉钉
npm run build:dd


#京东
npm run build:jd

#字节跳动
npm run build:bytedance