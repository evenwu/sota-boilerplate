# 這是一個 [Next.js](https://nextjs.org/) 專案基礎模板

## 開始

使用 git 取得此專案後，先到專案目錄內執行：

```bash
yarn
```

這樣會自動安裝所有專案需要的基本套件。
安裝完畢後，執行：

```bash
yarn dev
```

然後開啟 [http://localhost:3000](http://localhost:3000) 就可以看到基本網頁結構。

## 基本 Layout 說明

### `_layout.js` 內放置了專案最基本的元件：

- `<Head></Head>` 裡面該有的東西，例如 `<title>` `<meta>` 等這些基本的 tag
- 如果頁面要指定自己獨特的 `<title>` 可以在自己的頁面例如 `about.js` 裡面寫這些東西即可覆蓋掉 `_layout.js` 的設定：

```tsx
import Head from 'next/head'

<Head>
  <title>About</title>
</Head>
```
### ⚠️ 這裡也應該放置以下基本的元件
- social media 使用的 open graph 相關 meta tag
- favicon.ico source 或是更大型針對新型裝置的 favicon PNG 檔案
- viewport 設定也在這裡

### 其他重要說明
- 除了夾在 `<Head></Head>` 裡面的東西會自動輸出到 html 的 `<head>` 裡面去，其他都會輸出到 `<body>` 裡面。
- `<Navbar />` `<Footer />` 這兩個特殊的 component 都會放在這裡，讓此網站所有的網頁都擁有這兩樣東西。
- `<main>{children}</main>` 則是塞入 `page.js` 所有東西的地方。

## 巢狀子 layout — NestedLayout 結構說明

對，就想像為大腸包小腸沒錯。

### `_nested-layout.js` 是一個示範巢狀 Layout：

- 這個範例將 `page.js` 外面除了包裹最外層的 `_layout.js` 以外，還多包了一層 `_nested-layout.js` 在中間。讓你知道巢狀 Layout 的運作方式。
- `_nested-layout.js` 可以改名為任何頁面專屬的 Layout 名稱。例如 `_service-layout.js` 專門讓 service 相關的頁面都利用這個 Layout 來做「子標題」或是「子選單」。

使用 NestedLayout 的頁面要這樣寫才會生效，你可以直接參考首頁檔案 `index.js` 都能找到以下語法：

```tsx
// 先 import 相關的 layout 檔案：
import Layout from '../components/_layout'
import NestedLayout from '../components/_nested-layout'

// 頁面本尊的內容：
export default function Page() {
  return (
    <>
      <em>內容我在這裡啦！</em>
    </>
  )
}

// 最底下指定這個頁面套上哪些 layout：
Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>
        {page}
      </NestedLayout>
    </Layout>
  )
}
```

## 部署說明

### 👉 部署到 **Vercel**

1. 無需任何特別的設定。
1. 去 Vercel Deploy 然後 Import 新專案的 GitHub Repo 即可建立一個新的網站。
1. 之後只要 Push 到 main 的分支，Vercel 伺服器就會自動部署新版本。
1. 如果需要 Vercel 伺服器幫忙處理圖片最佳化，則需修改 `next.config.js` 把裡面這個設定移除：

```tsx
// next.config.js
// remove this code:
images: {
  unoptimized: true,
},
```

### 👉 部署到 **Github Page**

1. 打開 `package.json` 檔案，找到裡面的 `YOUR-DOMAIN-HERE` 改為新專案的網址：

```
echo 'YOUR-DOMAIN-HERE' >> out/CNAME
```

2. 設定 DNS 服務
  - 我們通常使用 [cloudflare.com](https://dash.cloudflare.com/)，輸入新專案的 custom domain
  - 可參考[官方文件](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)的詳細說明。需注意，apex domain 與 subdomain 兩種的設定方法不同。
3. 修改新專案 GitHub Repo 的[設定頁面](../../settings/pages)
  - 設定 Source: `Deploy from a branch`
  - 設定 Branch: `gh-pages` 📁 `/(root)`
  - 將新網址填入 Custom domain 欄位，等待黃色的 **「🟠 DNS Check in Progress」** 這些字，變成綠色的 **「✅ DNS check successful」** 就設定完成了。
4. 新增 personal sccess token 給 Github Actions 用，位置在 [https://github.com/settings/tokens](https://github.com/settings/tokens) 名字可填寫這個網站的名稱，生成後記得 copy 起來，這個 token 只會顯示一次！
5. 前往專案的 [Secrets and variables](../../settings/secrets/actions) 按下 "New repository secret" 生成 GitHub Actions 專用的密碼代號，這邊建議的名稱為 `COMMIT_SECRET` 內容貼上剛剛複製的 token
6. 前往專案的 [Actions](../../actions) 建立一個新的 workflow，點選 **set up a workflow yourself ** 並貼上以下內容：

```yml
name: deploy gh-pages
on:
  push:
    branches:
      - main
jobs:
  build:
    name: Build and deploy gh-pages
    env:
      MY_SECRET   : ${{secrets.commit_secret}}
      USER_NAME   : githubaction
      USER_EMAIL  : githubaction@fake.com
      PUBLISH_DIR : ./out
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x]
    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: yarn
      run: |
        yarn
    - name: yarn page
      run: |
        yarn page
    - name: Commit files
      run: |
        cd $PUBLISH_DIR
        git init
        git config --local user.name $USER_NAME
        git config --local user.email $USER_EMAIL
        git status
        git remote add origin https://$MY_SECRET@github.com/$GITHUB_REPOSITORY.git
        git checkout -b gh-pages
        git add --all
        git commit -m "deploy to Github pages"
        git push origin gh-pages -f
        echo 🤘 deploy gh-pages complete.

```

7. 以後這個專案只要有人 push 到 main，github page 就會自動更新了 🤘
