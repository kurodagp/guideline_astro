---
layout: ../layouts/MarkdownLayout.astro
title: headタグの基本設定
pubDate: 2022-01-01
order: 11
---

# headタグの基本設定

html、headタグ内の基本設定テンプレートです。  
あくまで見本テンプレートなので、案件ごとのルールに応じて不要な箇所は削除・不足する箇所は追記してください。  
案件のガイドラインがある場合はそちらのルールに沿って構築してください。

```html
<!DOCTYPE html>
<html lang="ja" dir="ltr">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"><!-- TOP以外の場合 og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article# -->

<!-- Google Tag Manager -->
<!-- Google Tag Manager設置場所①（head内のなるべく上のほう） -->
<!-- End Google Tag Manager -->

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="format-detection" content="telephone=no">
<title>ページタイトル</title>
<meta name="description" content="ページの説明">
<!--<meta name="keywords" content="キーワード"> 基本は不要。クライアント・代理店から要望がある場合のみ設置する-->

<!-- favicon/apple-touch-icon -->
<link rel="icon" href="/favicon.ico"><!-- 32px32px -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png"> <!-- 192x192px -->

<!-- canonical -->
<link rel="canonical" href="https://www.〇〇.co.jp/">

<!-- ogp -->
<meta property="og:site_name" content="サイト名">
<meta property="og:url" content="https://www.〇〇.co.jp/">
<meta property="og:type" content="website"><!-- website or article -->
<meta property="og:title" content="ページのタイトル">
<meta property="og:description" content="ページの説明">
<meta property="og:image" content="https://www.〇〇.co.jp/assets/images/ogp.png">
<meta property="og:locale" content="ja_JP">
<!-- <meta property="fb:app_id" content="AppID"> -->

<!-- ogp twitter -->
<meta name="twitter:card" content="カードの種類"><!-- summary_large_image or summary -->
<meta name="twitter:image" content="https://www.〇〇.co.jp/assets/images/ogp.png">
<!-- <meta name="twitter:title" content="ページのタイトル"> -->
<!-- <meta name="twitter:description" content="ページの説明"> -->
<!-- <meta name="twitter:site" content="@ユーザー名"> -->

<!--サイト共通CSS-->
<link rel="stylesheet" href="/assets/css/style.css" media="all">

<!--ページ個別CSS-->
<link rel="stylesheet" href="/assets/css/top.css" media="all">

<!--サイト共通JS-->
<script src="/assets/js/script.js" defer></script>

<!--ページ個別JS-->
<script src="/assets/js/top.js" defer></script>

</head>
<body>

<!-- Google Tag Manager (noscript)  -->
<!-- Google Tag Manager (noscript) 設置場所②（bodyの直後） -->
<!-- End Google Tag Manager (noscript)  -->

</body>
</html>
```

## htmlタグ

```html
<html lang="ja" dir="ltr">
```

日本語サイトの場合はlang属性はjaに設定。  
海外向け言語の場合をそれぞれの言語にあったコードを指定する  
例）lang="en"

## headタグ

```html
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"><!-- TOP以外の場合 og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article# -->
```

OGPを使用する宣言をheadタグで行う  
TOPと下層で記述を分ける必要あり

### トップページの設定
```html
<head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# website: https://ogp.me/ns/website#">
```

### 記事ページの設定
```html
<head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# article: https://ogp.me/ns/article#">
```

### Facebook以外でシェアする場合
```html
<html prefix="og: http://ogp.me/ns#">
```

## meta 関連の設定

### meta charset

```html
<meta charset="UTF-8">
```

文字コードの指定。基本はUTF-8にする。  
非推奨だが、古いサイトなどで他の文字コードを使用している場合もあります。

### meta viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

viewportの設定。  
Googleが推奨している設定なので基本はこちら

### meta format-detection

```html
<meta name="format-detection" content="telephone=no">
```

電話番号の自動リンク機能を無効化する

## faviconとapple-touch-icon

### favicon

```html
<link rel="icon" href="/favicon.ico"><!-- 32px32px -->
```

32px × 32pxサイズのfavicon.icoを設定する  
ダークモードに対応したい場合、は下記のように置き換えます。  
[参考サイト](https://zenn.dev/bissy/articles/27c5c09a83b27dce11ff)

```html
<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml">
```

### apple-touch-icon

```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png"> <!-- 192x192px -->
```

192x192pサイズのapple-touch-iconを設定する

## canonicalタグ

```html
<link rel="canonical" href="https://www.〇〇.co.jp/">
```

URLの正規化のためにcanonicalにページのURLを設定してください。

## OGP関連

### OGP 基本設定

```html
<!-- ogp -->
<meta property="og:site_name" content="サイト名">
<meta property="og:url" content="https://www.〇〇.co.jp/">
<meta property="og:type" content="website"><!-- website or article -->
<meta property="og:title" content="ページのタイトル">
<meta property="og:description" content="ページの説明">
<meta property="og:image" content="https://www.〇〇.co.jp/assets/images/ogp.png">
<meta property="og:locale" content="ja_JP">
<!-- <meta property="fb:app_id" content="AppID"> -->
```

| metaタグの種類 | 指定する内容 |
|----------------|--------------|
| og:site_name | Webサイトの名前 |
| og:url | 対象ページのURL |
| og:type | Webページの種類。TOPであればwebsite、下層であればarticleを指定する |
| og:title | 対象ページのタイトル |
| og:description | 対象ページの説明文(概要) |
| og:image | 表示したいサムネイル画像のURL<br>画像サイズは1200px×630px |
| og:locale | ページ内で利用されている言語 |
| fb:app_id | FacebookのアプリID。基本は不要。FBアカウントを持つクライアントからIDの支給があった場合は設定する |

### ogp Twitter用設定

```html
<!-- ogp twitter -->
<meta name="twitter:card" content="カードの種類"><!-- summary_large_image or summary -->
<meta name="twitter:image" content="https://www.〇〇.co.jp/assets/images/ogp.png">
<!-- <meta name="twitter:title" content="ページのタイトル"> -->
<!-- <meta name="twitter:description" content="ページの説明"> -->
<!-- <meta name="twitter:site" content="@ユーザー名"> -->
```

| metaタグの種類 | 指定する内容 |
|----------------|--------------|
| twitter:card | Twitterカードの種類(表示形式)　summary_large_image か summary どちらかを設定する<br>summary_large_image：画像が大きく表示され、下側にタイトルのみ入る<br>summary：画像が左側に小さく表示され、右側にタイトルとディスクリプションが入る（商品ページや記事ページの場合はこちらの方が良いかも） |
| twitter:image | 表示したいサムネイル画像のURL<br>基本はOGPと同じものでOK。ツイッターに特化したサイズにしたい場合は別のサイズで作成する必要あり |
| twitter:title | 対象ページのタイトル（og:titleと同じ内容であれば記述しなくてもOK） |
| twitter:description | 対象ページの説明文(概要)（og:descriptionと同じ内容であれば記述しなくてもOK） |
| twitter:site | 基本は設定なし<br>@から始まるXのユーザーID<br>クライアントから支給があった場合は設定する |