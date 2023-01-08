這是一個 [Next.js](https://nextjs.org/) 專案基礎模板

## 如何開始

取得此專案後，先到專案目錄內執行：

```bash
yarn
```

這樣會自動安裝所有專案需要的基本套件。  
安裝完畢後，執行：

```bash
yarn dev
```

然後開啟 [http://localhost:3000](http://localhost:3000) 就可以看到基本網頁結構。

## Layout 結構說明

### `_layout.js` 內放置了專案最基本的元件，包含：

- `<Head></Head>` 裡面該有的東西，例如 `<title>` `<meta>` 等這些基本的 tag
- 如果頁面要指定自己獨特的 `<title>` 可以在自己的頁面例如 `about.js` 裡面寫這些東西即可覆蓋掉 `_layout.js` 的設定：

```tsx
import Head from 'next/head'

<Head>
  <title>About</title>
</Head>
```
- 這裡也應該放置以下基本的元件
  - open graph 相關的 meta tag
  - favicon.ico source 或是更大型針對新型裝置的 favicon PNG 檔案
  - viewport 設定也在這裡
- 除了 `<Head></Head>` 的東西會自動輸出到 html 的 `<head>` 裡面去，其他都會在 `<body>` 裡面。
- `<Navbar />` `<Footer />` 這兩個特殊的 component 都會放在這裡，讓此網站所有的網頁都擁有這兩樣東西。
- `<main>{children}</main>` 則是塞入 `page.js` 所有東西的地方。

## 部署說明

這裡我還沒開始寫，請敲碗或抖內。
