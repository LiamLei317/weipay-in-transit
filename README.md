# WeiPay in Transit 使用说明

## 日常写文章（只需要这三步）

1. 在 `docs/` 对应目录下新建 `.md` 文件，套用五段式模板写内容（见 `docs/about.md`）。
   图片放在 `docs/public/images/`，文章里写 `/images/文件名.png`；或者跟文章放同目录，写 `./文件名.png`。
2. 打开 `docs/.vitepress/config.mjs`，在 sidebar 里加一行链接。
3. 提交推送：
   ```
   git add .
   git commit -m "写完了 xxx"
   git push
   ```
   一两分钟后网站自动更新。没有导出、没有上传。

## 本地预览

```
npm run dev
```
浏览器开 http://localhost:5173/weipay-in-transit/  （因为 base 是 /weipay-in-transit/，如果不加这个路径会白屏）
改文件自动刷新。本地看没问题再 push。

想看构建后的效果：
```
npm run build
npm run preview
```

## 第一次发布（只做一次）

1. 在 GitHub 新建一个仓库，名字建议就叫 `weipay-in-transit`（跟 config.mjs 里的 base 对应）。
2. 本地这个项目初始化并推送：
   ```
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/你的用户名/weipay-in-transit.git
   git push -u origin main
   ```
3. 去 GitHub 仓库 → Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。
4. 等 `.github/workflows/deploy.yml` 跑完，网站上线在 `https://你的用户名.github.io/weipay-in-transit/`。

题目含义：站点放 WeiPay 的设计文档，也记录 Liam 的支付学习过程。"in transit" 是支付里的在途状态——钱已付出、尚未到账。认知也一样，常处在"以为懂了、还没落地"的中间态。

## 如果仓库不叫 weipay-in-transit

改 `docs/.vitepress/config.mjs` 里的 `base`：
- 仓库名 `weipay-in-transit` → `base: '/weipay-in-transit/'`
- 仓库名 `你的用户名.github.io` → `base: '/'`
- 其他仓库名 → `base: '/你的仓库名/'`

base 写错了的表现：页面能打开但样式、图片、内部链接全失效。

## Typora 配合

Typora 设置 → 图像：插入图片时选「复制图片到当前文件夹」，勾「优先使用相对路径」。
这样粘图时图片自动进文章目录，随文章一起 git 管理、一起发布。
