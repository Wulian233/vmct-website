<div align="center"><img height="150" src="https://vmct-cn.top/img/vm.png" width="170"/></div>

# VM汉化组网站v3版本正在开发中，本v2网页已停止更新

# VM汉化组官方网站
主站点：[点击访问](https://vmct-cn.top/)

评论分站：[点击访问](https://vm-comment.pp.ua/)
1. 源码仓库[点此跳转](https://github.com/Litchiiiiii/VM-Comment)
2. 生成仓库[点此跳转](https://github.com/Litchiiiiii/Litchiiiiii.github.io)


## 📖 什么是VM汉化组？

VM汉化组是一个用爱发电专注于汉化MC整合包与地图的非盈利组织。我们制作的汉化及相关技术最终目的是使公众收益，汉化组将寻求高质量永久免费汉化包以造福玩家。汉化组的成立不是为了任何人的私人利益。汉化组产生的所有收益将“不可撤销的”用于上述目的。

## ✨ 使用的技术与开源库

1. 图片预览[ViewerJS](https://github.com/fengyuanchen/viewerjs)
2. 网站弹窗[SweetAlert2](https://github.com/sweetalert2/sweetalert2)
3. 主页和整合包/地图汇总页使用modrinth的开源前端项目[knossos](https://github.com/modrinth/knossos)
4. [网站状态检测](https://vmct-cn.top/jian/)使用UptimeRobot API，封装页面[uptime-status](https://github.com/yb/uptime-status)
5. [爱发电公示](https://vmct-cn.top/api/)根据[此项目](https://github.com/MisaLiu/afdian-sponsor-page) 修改为单文件版（需php环境）
6. [蓝奏云直链解析api](https://vmct-cn.top/api/lanzou.php)使用[LanzouAPI](https://github.com/hanximeng/LanzouAPI)（需php环境）

## 💧 目录介绍

```markdown
- vmct-website
    - api 目录api相关
        - index.php 爱发电公示
        - lanzou.php 蓝奏云直链解析api
    - css 目录网页样式
    - img 目录一些图片
    - jian 目录网站状态监控
    - join 目录加入社群
    - map 目录地图汉化
    - modpacks 目录整合包汉化
    - sb3 过期石头世界3
    - vault 过期宝藏猎人
    - 404.html 在404时显示的页面
    - doing.html 正在汉化中页面
    - index.html 主页
    - name.json VM汉化更新模组称呼
    - readme.md 自述文件
    - script.js 网站js
    - tips.txt VM汉化更新模组tips
```

## 📖 使用与部署

本网站使用纯原生html js css三件套，浏览器可直接运行。

至于运行api目录下的程序需要php环境。

主站使用了一套完全免费的部署方案，可长期稳定运行：
1. 使用[Vercel](https://vercel.com/)进行托管，github提交自动触发更新，同时支持php环境。
2. 使用[CloudFlare](https://cloudflare.com/)作为免费cdn分发。
3.使用[路过图床](https://imgse.com/)手动上传作为图片存储。

PS：域名在腾讯云购买

## 👀 协议

本网站使用[MIT协议](LICENSE)。
