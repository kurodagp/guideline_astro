---
layout: ../layouts/MarkdownLayout.astro
title: マークアップ
pubDate: 2022-01-01
order: 2
---

# マークアップ

## 基本ルールと書式

- HTMLタグは必ず小文字で記述する。
- 終了タグは必ず記述する。
- エンプティ要素（img・br・meta・linkなど）は最後を閉じない。
- alt属性は必ず記述する。適切な文言がない場合はNull値（alt=""）とする。
- HTMLファイル内では基本的HTMLのみのマークアップを行い、外部ファイルCSS、JavaScriptで行う。HTMLは可能な限り正しく記述する。

## 機種依存文字

実体参照に変換して記述してください。

[https://www.akiyan.com/htmlspecialchars](https://www.akiyan.com/htmlspecialchars)

## インデントと改行

インデントと改行を使い構造を判断しやすいように記述します。  
インデントは半角2スペースで行います。  
スペースとタブを混在させるのはNGです。  
ただし、案件によってはインデントを指定してはいけない場合もあるので、随時確認してください。

```html
<nav>
  <ul>
    <li>text text</li>
    <li>text text</li>
    <li>text text</li>
  </ul>
</nav>
```

## コメントアウト

コメントアウトは、構造の判断をしやすくするため、要素の閉じタグ後に使用します。  
不要なコメントはHTMLソース内には記述しません。

```html
<header class="l-header">
  …
</header>
<!-- /.l-header -->
```

## hタグ

### h1

h1は原則ページ内に1か所の使用にしてください。  
h1は「ページの大見出し」という意味合いになるため、基本的にはヘッダーのロゴではなく、ページタイトルに当たる文言をh1としてマークアップしてください。  
トップページに関してコンテンツ内に該当する箇所がない場合は、コンテンツ直下にh1タグをいれて、cssで非表示にしてください。  
ただしレギュレーションがある場合はそれに準じてマークアップしてください。

```html
<div class="l-page top">
  <h1 class="l-page__heading">PAGE TITLE</h1>
```

```css
.l-page__heading {
  position: absolute;
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
}
```

### h2~h6

「h2 → h4」のような歯抜け状態や「h3 → h2」のような順番の逆転はしないよう、階層構造を意識してマークアップしてください。

## imgタグ

imgタグにwidthとheight属性を書き出したサイズで指定してください。ブラウザに画像のアスペクト比（縦横比）を事前に伝えることができ、画像が読み込まれる前でも表示領域を確保することができます。  
また、Webパフォーマンス最適化のために、decoding="async"を設定して下さい。

```html
<img src="/assets/images/logo.svg" width="153" height="68" alt="ジーピーオンライン" decoding="async">
```

pictureタグを使用する場合はsourceタグにもwidthとheightを指定してください。

```html
<picture>
  <source media="(max-width: 767px)" srcset="/assets/images/ttl_sp.png" width="700" height="200">
  <img src="/assets/images/ttl.png" srcset="images/ttl@2x.png 2x" width="580" height="140" alt="" decoding="async">
</picture>
```

imgタグにwidthとheight属性を指定することで、レスポンシブサイトでは画像の縦横比に崩れが発生する可能性があるため、CSSで調整してください。

```css
img {
  width: 100%;
  height: auto;
}
```

## altの設定

画像内にテキスト情報がある場合には、基本的には、画像にある文言をそのまま記述してください。

```html
<img src="/assets/images/bnr_01.jpg" width="580" height="240" alt="Twitterフォロー＆リツイートキャンペーンを始めるなら Hashmeru" decoding="async">
```

単なる装飾画像や前後でテキストで説明があるような画像に対してはaltを空（alt=""）で設定してください。

```html
<img src="/assets/images/ico_map.png" width="50" height="50" alt="" decoding="async">
```

## 外部リンク

外部リンクの場合はaタグにtarget="_blank"とrel="noopener"を設定してください。

```html
<a href="https://www.google.com/" target="_blank" rel="noopener">https://www.google.com/</a>
```

## メールアドレスのリンク設定

メールアドレスはエンティティ化してください。

[https://webtools.dounokouno.com/entity/](https://webtools.dounokouno.com/entity/)

## 品質管理

以下のツールを利用してバリーデートチェックを行ってください。

### W3C Markup Validation Service

[http://validator.w3.org/](http://validator.w3.org/)

コンバージョンタグなど計測タグによるエラー及びサイトの構成上修正できないエラーは許容範囲とします。