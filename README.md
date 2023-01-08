這是一個 [Next.js](https://nextjs.org/) 專案基礎模板

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

## 基本大 Layout 結構說明

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
- 除了 `<Head></Head>` 的東西會自動輸出到 html 的 `<head>` 裡面去，其他都會在 `<body>` 裡面。
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

這裡我還沒開始寫，請敲碗或抖內。
