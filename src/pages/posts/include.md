---
layout: ../layouts/MarkdownLayout.astro
title: インクルード
pubDate: 2022-01-01
order: 9
---

# インクルード

ヘッダー・フッター・サイドバーなど大量のページで同じデザインを使う部位は外部ファイル化してください。

インクルードの実装方法は案件に応じて適宜確認してください。（WordPressの場合はPHP、サーバー側が使用可能であればSSI、それ以外の場合はJavaScriptなど）

## SSIを使用したインクルード

**SSIインクルードは本番サーバーで使用できることの確認が出来ていない場合は、使用不可とします。**  
SSIはサーバーによっては使用できなかったり、.htaccessが変更できない場合があるので、使用する際は担当ディレクターに確認してから使用して下さい。

### /assets/include/header.html

```html
<header class="l-header">
  <div class="l-l-header__logo"><a href="/"><img src="/assets/images/logo.png" width="153" height="68" alt="" decoding="async"></a></div>
</header>
<!-- /.l-header -->
```

### html

```html
<body>
  <!--#include virtual="/common/inc/header.html" -->
  <main class="l-main">
    …
  </main>
  <!-- /.l-main -->
  <!--#include virtual="/common/inc/footer.html" -->
</body>
```

### .htaccess

htmlでSSIを有効にするために.htaccessに以下を記述します。

```apache
Options +Includes
AddHandler server-parsed html
```

## JavaScriptを使用したインクルード

JavaScriptでインクルードする場合はdocument.write()は非推奨となっているので、以下のfetchを使用した方法で実装してください。

### /assets/js/main.js

```javascript
window.addEventListener('DOMContentLoaded', async () => {
  await fetch('/assets/includes/header.html')
  .then(response => response.text())
  .then(header => document.body.insertAdjacentHTML('afterBegin', header));
  // インクルード後に実行したい内容はこれ以降に記述
}
```

insertAdjacentHTML()の引数にはbeforeBegin / beforeEnd / afterBegin / afterEndが指定でき、上記の例ではbodyの開始直後の位置に挿入されます。  
document.bodyの部分はquerySelectorなどを使用して特定の要素を指定することもできます。  
注意点としてfetchさせる内容に対してJavaScriptで処理を行うとき、fetchの完了を待たないと処理が実行されません。  
またhead内などにも挿入は可能ですが、scriptタグは実行されないので**GTMなどはインクルードはしない**ようご注意ください。

### /assets/include/header.html

インクルードしたい部分はhtmlファイルにします。

```html
<header id="l-header">
  <div class="l-header__logo"><a href="/"><img src="/assets/images/logo.png" width="153" height="68" alt="" decoding="async"></a></div>
</header>
```

以下の方法は非推奨です。

### ~~/assets/include/header.js~~

```javascript
var header = '' +
' \
  <header id="l-header">\
    <div class="l-header__logo"><a href="/"><img src="/assets/images/logo.png" width="153" height="68" alt="" decoding="async"></a></div>\
  </header>\
  <!-- /.l-header -->\
';
document.write(header);
```

### ~~html~~

```html
<body>
  <script src="/assets/include/header.js"></script>
  <main class="l-main">
    …
  </main>
  <!-- /.l-main -->
  <script src="/assets/include/footer.js"></script>
</body>
```