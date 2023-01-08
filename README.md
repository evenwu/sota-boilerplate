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

## 結構說明

`_layout.js` 內放置了專案最基本的元件，包含：

- `<head></head>` 裡面該有的東西，例如 `<title>` `<meta>` 等這些基本的 tag
- 如果頁面要指定自己獨特的 `<title>` 可以在自己的頁面例如 `about.js` 裡面寫這些東西即可覆蓋掉 `_layout.js` 的設定：

```html
<head>
  <title>About</title>
</head>
```

## 部署說明

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
