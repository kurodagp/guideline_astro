---
layout: ../layouts/MarkdownLayout.astro
title: 命名規則
pubDate: 2022-01-01
order: 6
---

# 命名規則

## 基本ルールと書式

- 半角英数字のみを使用する。
- 機種依存文字の使用を禁止する。
- 必ずアルファベットからはじめ数字からはじめてはいけない。
- 全角スペース、半角スペースの使用を禁止する。
- 「\」,「/」,「*」,「:」,「?」,「<」,「>」,「|」,「＄」これらの文字の使用を禁止する

## css、jsファイルの命名

基本的に対となるhtmlのディレクトリ名（ファイル名）と同じ名前を使用してください。

```
▼ex.) Top Page（/index.html）
/assets/css/top.css
/assets/js/top.js

▼ex.) Company Page（/company/index.html）
/assets/css/company.css
/assets/js/company.js
```

## id、classの命名

### idの命名

対象となるコンテンツ名を英訳したIDを付与します。  
基本的にはアンカーリンクの対象になるようなセクションのブロックに付与します。

### classの命名

原則としてBEM+FLOCSSのルールに従って命名して下さい。  
子要素は「__」、バリエーションや兄弟要素は「--」で接続することとします。  
単語をつなぐときは「-」で接続することとします。

```html
<section id="company-information" class="company-sect">
  <h2 class="company-sect__ttl">会社情報</h2>
  <div class="company-sect__btn"><a href="#">詳細</a><div>
</div>
```

### FLOCSS

[https://github.com/hiloki/flocss](https://github.com/hiloki/flocss)

(For English)[https://github.com/hiloki/flocss/blob/master/README_eng.md](https://github.com/hiloki/flocss/blob/master/README_eng.md)

### BEMの注意点

Elementを入れ子にするときに.block__element__elementのような名前にできるだけならないようにします。HTMLの構造を示すのではなく、Blockに対するElementとModifierの関係性を示します。

```css
/* Bad */
.block__element {}
.block__element__element {}

/* Good */
.block__element {}
.block__childElement {}
```

## 画像の命名

### 基本ルール

**'Block名' + '_' + '画像タイプ' + '_' + '必要であれば連番'**

- コンテンツの削除があった場合に、該当画像がわかりやすいように'Block名'から命名することとします。
- 'Block名'の単語をつなぐときは「-」で接続することとします。
- '画像タイプ'は表記を省略することができます。（title → ttl）

**ex.)**  
ヘッダーの背景：header_bg.png  
Newsブロックのタイトル：news_ttl.png  
会社情報ブロックの画像の1枚目：company-information_img_01.jpg  
お問い合わせブロックのボタンの背景：inquiry_btn_bg.png

### 例外

サイト共通で使用する画像については'Block名'を省略できます。  
**ex.)**  
サイトロゴ：logo.png  
サイトで汎用的に使う背景画像：bg_01.png, bg_02.png  
共通で使うアイコン画像：ico_twitter.svg, ico_arrow_01.svg

### スマートフォン用の画像

名前の後に'_sp'を付与します。  
**ex.)**  
news_ttl_sp.png  
bg_01_sp.png

### Retinaディスプレイ用の画像（2倍サイズの場合）

名前の後に'@2x'を付与します。  
**ex.)**  
news_ttl@2x.png  
bg_01_sp@2x.png

## ナンバリングの規則

頻繁に使われるもの（その可能性のあるもの）には数字（Number）を追加して対応します。  
原則として数字（Number）の記述は01から初めてください。  
※だだし3桁（100個）以上になる事が予想されていれば「数字」は 001 から初めてください。

## 表記の省略

むやみに単語を省略しないことを原則とします。もし表記を省略する場合は、誰が見てもわかりやすい表記を心掛けてください。以下は表記の省略を可とする一例です。

| navigation | nav | title | ttl |
|------------|-----|-------|-----|
| text | txt | background | bg |
| button | btn | banner | bnr |
| thumbnail | thumb | image | img |
| package | pkg | section | sect |
| icon | ico |  |  |

## 禁止事項

日本語が分からない人でも理解できるようにする為、日本語のローマ字は使用しないでください。

```html
<!-- Bad -->
<div class="p-pankuzu"></div>

<!-- Good -->
<div class="p-breadcrumb"></div>
```