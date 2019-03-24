---
layout: post
title: "linux中输入ifconfig命令IP地址显示127.0.0.1的处理方法."
date: 2018-03-25
description: "linux"
tag: 博客
---

参考 https://blog.csdn.net/qq_31820885/article/details/78017864

在linux系统中输入命令:

vi /etc/sysconfig/network-scripts/ifcfg-eth0 ,然后显示如下结果

![image](https://upload-images.jianshu.io/upload_images/10937452-0f769afcf76086a1?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240) 

将其中的ONBOOT=no改为yes,然后输入 :wq,敲击enter保存并退出.

最后输入命令:service network restart（重启服务命令）

重启服务器,会出现正在配置IP的提示,待自动配置成功后,

输入命令ifconfig即可.