---
layout: ./layouts/PostLayout.astro
title: 'REGULATION'
---


## コーディング概要

基本的なコーディングの仕様を以下の指定で制作する事と定めます。  
特別な指定がある場合は、そちらに従って下さい。

### 検証・対応ブラウザ

以下のブラウザを標準対応のブラウザとします。  
なお、案件によっては対応ブラウザを拡張する場合もあるので、指示をよく確認して対応してください。

#### Windows10
Google Chrome (Latest edition)  
Firefox (Latest edition)  
Edge (Latest edition)11

#### Mac
Safari (Latest edition)

#### Smartphone
iPhone12(iOS14.x)  
iPhone7(iOS13.x)  
Galaxy A21 SC-42A(Android10)  
AQUOS sense4 lite(Android11)


---

### ユーザビリティ

パソコンやウェブの操作が慣れていない方でも、なるべくストレスなくサイト内を遷移していただけるように、次のような考え方とルールに従って制作を行ってください。

---

## マークアップ

### 基本ルールと書式

HTMLタグは必ず小文字で記述する。  
終了タグは必ず記述する。    
エンプティ要素（img・br・meta・linkなど）は最後を閉じない。  
alt属性は必ず記述する。適切な文言がない場合はNull値（alt=""）とする。  
HTMLファイル内では基本的HTMLのみのマークアップを行い、外部ファイルCSS、JavaScriptで行う。HTMLは可能な限り正しく記述する。

---

### 機種依存文字

実体参照に変換して記述してください。  
[https://www.akiyan.com/htmlspecialchars](https://www.akiyan.com/htmlspecialchars)

---

### インデントと改行

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

---

### コメントアウト

コメントアウトは、構造の判断をしやすくするため、要素の閉じタグ後に使用します。  
不要なコメントはHTMLソース内には記述しません。

```html
<header class="l-header">
  …
</header>
<!-- /.l-header -->
```

### hタグ

#### h1

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

#### h2~h6

「h2 → h4」のような歯抜け状態や「h3 → h2」のような順番の逆転はしないよう、階層構造を意識してマークアップしてください。

---

### imgタグ

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

### altの設定

画像内にテキスト情報がある場合には、基本的には、画像にある文言をそのまま記述してください。

```html
<img src="/assets/images/bnr_01.jpg" width="580" height="240" alt="Twitterフォロー＆リツイートキャンペーンを始めるなら Hashmeru" decoding="async">
```

単なる装飾画像や前後でテキストで説明があるような画像に対してはaltを空（alt=""）で設定してください。

```html
<img src="/assets/images/ico_map.png" width="50" height="50" alt="" decoding="async">
```

### 外部リンク

外部リンクの場合はaタグにtarget="_blank"とrel="noopener"を設定してください。

```html
<a href="https://www.google.com/" target="_blank" rel="noopener">https://www.google.com/</a>
```

### メールアドレスのリンク設定

メールアドレスはエンティティ化してください。  
[https://webtools.dounokouno.com/entity/](https://webtools.dounokouno.com/entity/)

### 品質管理

以下のツールを利用してバリーデートチェックを行ってください。

#### W3C Markup Validation Service

[http://validator.w3.org/](http://validator.w3.org/)  
コンバージョンタグなど計測タグによるエラー及びサイトの構成上修正できないエラーは許容範囲とします。

---

## CSS

### 基本ルールと書式

- CSSの定義は原則として外部CSSに記述してCLASS及びIDで呼び出す。
- HTMLに直接記述する事は原則として禁止する。
- Charsetの記述はHTMLと同じ「UTF-8」を設定する。
- 値が「0」なら単位を省略する。
- 画面の装飾は基本的にCSSでのみ行い、HTMLでは行わない。
- HEX形式のカラーコードで3文字で表記できるものは3文字にする。（例 #fff、#033）

### インデントと改行

インデントと改行を使い構造を判断しやすいように記述します。  
インデントは半角2スペースで行います。  
スペースとタブを混在させるのはNGです。  
ただし、案件によってはインデントを指定してはいけない場合もあるので、随時確認してください。

```css
body {
  margin: 0;
  padding: 0;
}
```

### WEBフォントの使用

WEBフォントの使用は原則的にはGoogle Fontsのみとします。  
その他のサービスやフリーフォントを使用する際はライセンスの確認をしてから使用してください。  
また特別な指定がない場合はブラウザ間の表示の差異を最小限にするため、以下のWEBフォントを読み込んで使用してください。

#### ゴシック体

Noto Sans JP（[https://fonts.google.com/specimen/Noto+Sans+JP](https://fonts.google.com/specimen/Noto+Sans+JP)）

#### 明朝体

Noto Serif JP（[https://fonts.google.com/specimen/Noto+Serif+JP](https://fonts.google.com/specimen/Noto+Serif+JP)）

```css
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,600&subset=japanese');
```

参考：[パフォーマンステスト](https://bow-toaster-447.notion.site/Web-10e864aebf558066b728d208d1d10a6e?pvs=4)

### CSS 記述ルール

#### font-size

remで指定してください。

```css
font-size: 1.4rem;
```

#### line-height

原則として単位なしで指定してください。

```css
line-height: 1.5;
```

#### letter-spacing

emで指定してください。

```css
letter-spacing: 0.05em;
```

#### color

半角英数字。HEX形式のカラーコードで3文字で表記できるものは3文字にする。

```css
// Bad
color: #FF22CC;
background-color: #333333;

// Good
color: #ff22cc;
background-color: #333;
```

#### 小数点のあたまの0を省略しない

0.5emなどの小数点の前の0は省略しません。ファイルサイズの削減は考えずに、明示的に指定します。

```css
// Bad
.foo {
  font-size: .5em;
}

// Good
.foo {
  font-size: 0.5em;
}
```

#### 0に単位をつけない

値が0の場合はpxや%といった単位は必要がないため指定しません。  
ただし、角度（deg,grad,rad,turn）や時間（s,ms）では単位の省略をすることができないので注意します。

```css
// Bad
.foo {
  margin: 0px;
}

// Good
.foo {
  margin: 0;
}
```

### 禁止事項

#### style属性（インラインスタイル）の禁止

style属性（インラインスタイル）は使用せず、外部CSSに指定します。

#### style要素（head内に直接記述する方法）の禁止

style要素は使用せず、外部CSSに指定します。

### CSSハック

基本的に利用しないのを原則としますが、ブラウザのバグによりどうしても必要な場合には使用することを許可します。

### CSS3を使用する上での注意

レガシーブラウザなどで非対応のスタイルがありますので、対象ブラウザ確認の上、使用してください。

### 品質管理

以下のツールを利用してバリーデートチェックを行ってください。

#### W3C CSS Validation Service

[https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

### ベンダープレフィックス

以下のルールで使用してください。Autoprefixerなども含みます。

#### 新規案件

ベンダープレフィックスはつけない（指定端末外の場合は有償で対応）

#### 既存案件

現状のルールに合わせて使用する。  
または、担当ディレクターに相談して廃止する。

---

## Sass

### 基本ルール

- scssファイルが存在する場合は最新データか確認した上で、scssファイルを更新してください。
- scssファイルを使用できない場合（最新データではない等）担当ディレクターに相談した上で、scssファイルをすべて削除しcssファイルのみ更新してください。

### コンパイルの方法

コンパイラーの違いによって出る差異をなくすため、初期構築の場合は以下の対応をしてください。

#### VSCodeのプラグイン

- ワークスペース用の設定ファイル（.vscode）をGitに追加してください。
- 推奨プラグイン：[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)

#### webpack / npm-scripts / gulp など

- 設定ファイルをGitに追加してください。
- READMEに環境構築の説明を追加してください。

### 基本設定

#### 記法

- 「Dart Sass」を使用してください。
- すでに「Dart Sass」以外で進行している案件は、変更せず更新してください。

#### コンパイル形式

- 「compressed」を使用してください。
- すでに「compressed」以外で進行している案件は、変更せず更新してください。

#### ベンダープレフィックス（Autoprefixer）

- 基本的に使用しないでください。必要な場合のみ使用してください。

### ファイル関連

#### mapファイル

- 生成しないようにしてください。
- 使用する場合は、Gitや差分データに含めないでください。

#### ファイルアップ

- scssファイルはアップしないでください。
- すでにscssファイルがアップされている場合は、削除せずアップしてください。

#### 納品データ

- 納品データには、scssファイルは含めないでください。

---

## JavaScript

### 基本ルールと書式

- HTMLとCSSで対応できないものにのみ使用してください
- 何をしているものかコメントを付けてください
- 対応する全てのブラウザ、端末で動作チェックを行ってください
- 見ただけでは分からないようなエラーがでていないか各ブラウザのデベロッパーツールのコンソールで確認してください
- 外部JavaScriptファイルの読み込みは、原則として`</body>`の直前で行ってください
- `</body>`の直前での読み込みだと動作に問題がある場合は`<head>`内で読み込んでください
- 全て、もしくはほとんどのページで使用するものはcommon.jsにまとめてください
- プラグインを使用する場合はCDNを使用せず、ダウンロードして所定のディレクトリ（/assets/vender/）に格納してください。
- プラグインを使用する場合はライセンスを確認の上、使用してください。

### インデントと改行

インデントと改行を使い構造を判断しやすいように記述します。  
インデントは半角2スペースで行います。  
スペースとタブを混在させるのはNGです。  
ただし、案件によってはインデントを指定してはいけない場合もあるので、随時確認してください。

```javascript
function alert() {
  alert("HELLO!");
}
```

### jQuery

基本はjQuery 3系の最新版を使用してください。

---

## 命名規則

### 基本ルールと書式

- 半角英数字のみを使用する。
- 機種依存文字の使用を禁止する。
- 必ずアルファベットからはじめ数字からはじめてはいけない。
- 全角スペース、半角スペースの使用を禁止する。
- 「\」,「/」,「*」,「:」,「?」,「<」,「>」,「|」,「＄」これらの文字の使用を禁止する

### css、jsファイルの命名

基本的に対となるhtmlのディレクトリ名（ファイル名）と同じ名前を使用してください。

```
▼ex.) Top Page（/index.html）
/assets/css/top.css
/assets/js/top.js

▼ex.) Company Page（/company/index.html）
/assets/css/company.css
/assets/js/company.js
```

### id、classの命名

#### idの命名

対象となるコンテンツ名を英訳したIDを付与します。  
基本的にはアンカーリンクの対象になるようなセクションのブロックに付与します。

#### classの命名

原則としてBEM+FLOCSSのルールに従って命名して下さい。  
子要素は「__」、バリエーションや兄弟要素は「--」で接続することとします。  
単語をつなぐときは「-」で接続することとします。

```html
<section id="company-information" class="company-sect">
  <h2 class="company-sect__ttl">会社情報</h2>	
  <div class="company-sect__btn"><a href="#">詳細</a><div>
</div>
```

#### FLOCSS

[https://github.com/hiloki/flocss](https://github.com/hiloki/flocss)  
(For English)[https://github.com/hiloki/flocss/blob/master/README_eng.md](https://github.com/hiloki/flocss/blob/master/README_eng.md)

#### BEMの注意点

Elementを入れ子にするときに.block__element__elementのような名前にできるだけならないようにします。HTMLの構造を示すのではなく、Blockに対するElementとModifierの関係性を示します。

```css
// Bad
.block__element {}
.block__element__element {}

// Good
.block__element {}
.block__childElement {}
```

### 画像の命名

#### 基本ルール

**'Block名' + '_' + '画像タイプ' + '_' + '必要であれば連番'**

- コンテンツの削除があった場合に、該当画像がわかりやすいように'Block名'から命名することとします。
- 'Block名'の単語をつなぐときは「-」で接続することとします。
- '画像タイプ'は表記を省略することができます。（title → ttl）

**ex.)**  
ヘッダーの背景：header_bg.png  
Newsブロックのタイトル：news_ttl.png  
会社情報ブロックの画像の1枚目：company-information_img_01.jpg  
お問い合わせブロックのボタンの背景：inquiry_btn_bg.png

#### 例外

サイト共通で使用する画像については'Block名'を省略できます。  
**ex.)**  
サイトロゴ：logo.png  
サイトで汎用的に使う背景画像：bg_01.png, bg_02.png  
共通で使うアイコン画像：ico_twitter.svg, ico_arrow_01.svg

#### スマートフォン用の画像

名前の後に'_sp'を付与します。  
**ex.)**  
news_ttl_sp.png  
bg_01_sp.png

#### Retinaディスプレイ用の画像（2倍サイズの場合）

名前の後に'@2x'を付与します。  
**ex.)**  
news_ttl@2x.png  
bg_01_sp@2x.png

### ナンバリングの規則

頻繁に使われるもの（その可能性のあるもの）には数字（Number）を追加して対応します。  
原則として数字（Number）の記述は01から初めてください。  
※だだし3桁（100個）以上になる事が予想されていれば「数字」は 001 から初めてください。

### 表記の省略

むやみに単語を省略しないことを原則とします。もし表記を省略する場合は、誰が見てもわかりやすい表記を心掛けてください。以下は表記の省略を可とする一例です。

| 元 | 省略 | 元 | 省略 |
|---|---|---|---|
| navigation | nav | title | ttl |
| text | txt | background | bg |
| button | btn | banner | bnr |
| thumbnail | thumb | image | img |
| package | pkg | section | sect |
| icon | ico |  |  |

### 禁止事項

日本語が分からない人でも理解できるようにする為、日本語のローマ字は使用しないでください。

```css
// Bad
<div class="p-pankuzu"></div>

// Good
<div class="p-breadcrumb"></div>
```

---

## レスポンシブコーディング

基本的にはレスポンシブ用のコーディングテンプレートに従ってください。

### メディアクエリを記述する箇所

ブレイクポイント毎にまとめて調整用のスタイルを記述することは原則禁止です。  
同一セレクタに対する調整が把握しやすくなるよう、セレクタ毎に調整用のスタイルを記述してください。

```css
// Bad
@media (min-width: 768px) {
  .foo {}
  .bar {}
  .baz {}
}

// Good
.foo {}
@media (min-width: 768px) {
  .foo {}
}
```

### レスポンシブイメージ

#### picture要素の使用

IEなどの非対応のブラウザにも対応するためにはjsでの対応が必要です。  
[picturefill.js](https://github.com/scottjehl/picturefill)

```html
<picture>
  <source media="(max-width: 767px)" srcset="/assets/images/ttl_sp.png" width="700" height="200">
  <img src="/assets/images/ttl.png" width="580" height="140" alt="" decoding="async">
</picture>
```

※sourceタグとcssに記述しているメディアクエリに違いがないように注意し、ブラウザで必ず確認してください。

#### Retinaディスプレイ対応

Retinaディスプレイ対応時は2倍サイズの画像も書き出して、srcsetで読み込んでください。

```html
<picture>
  <source media="(max-width: 767px)" srcset="/assets/images/ttl_sp.png" width="700" height="200">
  <img src="/assets/images/ttl.png" srcset="images/ttl@2x.png 2x" width="580" height="140" alt="" decoding="async">
</picture>
```

#### メディアクエリでの要素の表示・非表示

デザインの都合でブラウザ幅によってやむを得ず出し分けが必要になる場合は、メディアクエリを使用し、表示幅が一定の範囲でのみ「display: block;」となり、それ以外の幅では「display: none;」とすることで要素の出し分けを実装します。

```html
<h1 class="l-l-header__logo">
  <img class="u-sm-min" src="/assets/images/ttl.png" width="700" height="200" alt="" decoding="async">
  <img class="u-sm-max" src="/assets/images/ttl_sp.png" width="580" height="140" alt="" decoding="async">
</h1>
```

```scss
.u-sm-min {
  @include smMax {
    display: none !important;
  }
}
.u-sm-max {
  @include smMin {
    display: none !important;
  }
}
```

### タブレット表示について

案件の仕様に従って設定してください。  
特に指定がない場合は、タブレットでもPC表示時と同じ見え方になるように制作してください。

### ブレークポイント

以下を基本とし、デザインや案件の仕様によってブレークポイントを変更してください。

```scss
$xs: 375;
$sm: 768;
$md: 1025;
$lg: 1240;
```

---

## サイトパフォーマンス

### 画像の圧縮

タスクランナーやオンラインツールを使用して書き出した画像を圧縮をしてください。

#### オンライン圧縮ツール

→[TinyPNG](https://tinypng.com/)  
→[Optimizilla](https://imagecompressor.com/ja/)

### サイトパフォーマンスのチェック（Lighthouse）

新規ページ作成後にはChromeDevToolsのLighthouseタブでサイトパフォーマンスのチェックを行ってください。  
パフォーマンススコアが30点に満たない場合は原因を調べて、改善の対策を行ってください。

→[Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ja)

---

## インクルード

ヘッダー・フッター・サイドバーなど大量のページで同じデザインを使う部位は外部ファイル化してください。

インクルードの実装方法は案件に応じて適宜確認してください。（WordPressの場合はPHP、サーバー側が使用可能であればSSI、それ以外の場合はJavaScriptなど）

### SSIを使用したインクルード

**SSIインクルードは本番サーバーで使用できることの確認が出来ていない場合は、使用不可とします。**  
SSIはサーバーによっては使用できなかったり、.htaccessが変更できない場合があるので、使用する際は担当ディレクターに確認してから使用して下さい。

#### /assets/include/header.html

```html
<header class="l-header">
  <div class="l-l-header__logo"><a href="/"><img src="/assets/images/logo.png" width="153" height="68" alt="" decoding="async"></a></div>
</header>
<!-- /.l-header -->
```

#### html

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

#### .htaccess

htmlでSSIを有効にするために.htaccessに以下を記述します。

```
Options +Includes
AddHandler server-parsed html
```

### JavaScriptを使用したインクルード

JavaScriptでインクルードする場合はdocument.write()は非推奨となっているので、以下のfetchを使用した方法で実装してください。

#### /assets/js/main.js

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

#### /assets/include/header.html

インクルードしたい部分はhtmlファイルにします。

```html
<header id="l-header">
  <div class="l-header__logo"><a href="/"><img src="/assets/images/logo.png" width="153" height="68" alt="" decoding="async"></a></div>
</header>
```

---

## フォーム

### フォーム構造

#### form要素

- インプット要素、送信ボタンは必ずformタグで囲んでください。

#### 送信ボタン

- フォーム送信ボタンには、button[type="submit"]、または input[type="submit"]を使用してください。aタグやinput[type="button"]、button[type="button"]は例外的な仕様を除き使用しないようにしてください。

```html
// Bad
<a href="#">送信する</a>
<input type="button" value="送信する">
<button type="button">送信する</button>

// Good
<button type="submit">送信する</button>
<input type="submit" value="送信する">
```

### meta属性

#### name属性

各インプット要素には、以下の命名規則に従い、name属性を設定してください。

<div class="c-table">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>内容 / content</th>
        <th>name属性 / name attribute</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th rowspan="2">お名前 / name</th>
        <td>姓 / family name</td>
        <td>sei</td>
      </tr>
      <tr>
        <td>名 / given name</td>
        <td>mei</td>
      </tr>
      <tr>
        <th rowspan="2">フリガナ</th>
        <td>セイ / kana(family name)</td>
        <td>sei_kana</td>
      </tr>
      <tr>
        <td>メイ / kana(given name)</td>
        <td>mei_kana</td>
      </tr>
      <tr>
        <th rowspan="2">性別 / gender</th>
        <td>男 / male</td>
        <td rowspan="2">gender</td>
      </tr>
      <tr>
        <td>女 / female</td>
      </tr>
      <tr>
        <th rowspan="6">ご住所 / address</th>
        <td>郵便番号 / postal code</td>
        <td>zip</td>
      </tr>
      <tr>
        <td>郵便番号(3-4)  / postal code(3-4)</td>
        <td>zip1,&nbsp;zip2</td>
      </tr>
      <tr>
        <td>都道府県 / prefectures</td>
        <td>prefecture</td>
      </tr>
      <tr>
        <td>市区・郡町村 / municipality</td>
        <td>address</td>
      </tr>
      <tr>
        <td>以下住所・番地 / house number</td>
        <td>address_other</td>
      </tr>
      <tr>
        <td>アパート・マンション・部屋 / Apartment, Room</td>
        <td>building</td>
      </tr>
      <tr>
        <th rowspan="2">電話番号 / phone number</th>
        <td>電話番号 / phone number</td>
        <td>tel</td>
      </tr>
      <tr>
        <td>FAX番号</td>
        <td>fax</td>
      </tr>
      <tr>
        <th rowspan="2">メールアドレス / mail address</th>
        <td>メールアドレス / mail address</td>
        <td>email</td>
      </tr>
      <tr>
        <td>確認用 / for confirming</td>
        <td>email_check</td>
      </tr>
      <tr>
        <th rowspan="3">選択項目 / selection item</th>
        <td>項目1 / item 1</td>
        <td>check[1]</td>
      </tr>
      <tr>
        <td>項目2 / item 2</td>
        <td>check[2]</td>
      </tr>
      <tr>
        <td>項目3 / item 3</td>
        <td>check[3]</td>
      </tr>
      <tr>
        <th>お問い合わせ内容・備考 / content of inquiry</th>
        <td><br>
          </td>
        <td>message</td>
      </tr>
    </tbody>
  </table>
</div>

#### type属性

各インプット要素には、入力内容に応じて適切なtype属性を設定してください。

例：
- メールアドレス → `type="email"`
- 電話番号 → `type="tel"`
- 数字のみ → `type="number"`
- パスワード → `type="password"`
- 日付 → `type="date"`

### スタイル設定

- インプット要素のfont-sizeは16px以上に設定をしてください。（iOSでのフォーカス時のズームイン対策）

### ユーザビリティ・アクセシビリティ

#### label要素

インプット要素のラベルは labelタグで関連付けを行い、ラベルをクリックした際に対応するインプット要素にフォーカスが当たるようにしてください。

関連付けには以下のいずれかの方法を用いてください。
- ① for属性にinputタグのidを設定する
- ② labelタグの中に inputタグをネストする

```html
// Good：①for属性で関連付ける
<label for="email">メールアドレス</label>
<input type="email" id="email" name="email">

// Good：②label内にinputをネストする
<label>
  メールアドレス
  <input type="email" name="email">
</label>
```

### 住所自動入力

郵便番号の入力に応じて住所を自動補完する機能が必要な場合、コーディング対応時に実装を行ってください。

参考：
- [https://dezanari.com/ajaxzip3/](https://dezanari.com/ajaxzip3/)
- [https://github.com/yubinbango/yubinbango](https://github.com/yubinbango/yubinbango)

---

## headタグの基本設定

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

### htmlタグ

```html
<html lang="ja" dir="ltr">
```

日本語サイトの場合はlang属性はjaに設定。  
海外向け言語の場合をそれぞれの言語にあったコードを指定する  
例）lang="en"

### headタグ

```html
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"><!-- TOP以外の場合 og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article# -->;
```

OGPを使用する宣言をheadタグで行う  
TOPと下層で記述を分ける必要あり

**トップページの設定**

```html
<head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# website: https://ogp.me/ns/website#">
```

**記事ページの設定**

```html
<head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# article: https://ogp.me/ns/article#">
```

**Facebook以外でシェアする場合**

```html
<html prefix="og: http://ogp.me/ns#">
```

### meta 関連の設定

#### meta charset

```html
<meta charset="UTF-8">
```

文字コードの指定。基本はUTF-8にする。  
非推奨だが、古いサイトなどで他の文字コードを使用している場合もあります。

#### meta viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

viewportの設定。  
Googleが推奨している設定なので基本はこちら

#### meta format-detection

```html
<meta name="format-detection" content="telephone=no">
```

電話番号の自動リンク機能を無効化する

### faviconとapple-touch-icon

#### favicon

```html
<link rel="icon" href="/favicon.ico"><!-- 32px32px -->
```

32px × 32pxサイズのfavicon.icoを設定する  
ダークモードに対応したい場合、は下記のように置き換えます。  
[参考サイト](https://zenn.dev/bissy/articles/27c5c09a83b27dce11ff)

```html
<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml">
```

#### apple-touch-icon

```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png"> <!-- 192x192px -->
```

192x192pサイズのapple-touch-iconを設定する

### canonicalタグ

```html
<link rel="canonical" href="https://www.〇〇.co.jp/">
```

URLの正規化のためにcanonicalにページのURLを設定してください。

### OGP関連

#### OGP 基本設定

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
|---|---|
| og:site_name | Webサイトの名前 |
| og:url | 対象ページのURL |
| og:type | Webページの種類。TOPであればwebsite、下層であればarticleを指定する |
| og:title | 対象ページのタイトル |
| og:description | 対象ページの説明文(概要) |
| og:image | 表示したいサムネイル画像のURL<br>画像サイズは1200px×630px |
| og:locale | ページ内で利用されている言語 |
| fb:app_id | FacebookのアプリID。基本は不要。FBアカウントを持つクライアントからIDの支給があった場合は設定する |

#### ogp Twitter用設定

```html
<!-- ogp twitter -->
<meta name="twitter:card" content="カードの種類"><!-- summary_large_image or summary -->
<meta name="twitter:image" content="https://www.〇〇.co.jp/assets/images/ogp.png">
<!-- <meta name="twitter:title" content="ページのタイトル"> -->
<!-- <meta name="twitter:description" content="ページの説明"> -->
<!-- <meta name="twitter:site" content="@ユーザー名"> -->
```

| metaタグの種類 | 指定する内容 |
|---|---|
| twitter:card | Twitterカードの種類(表示形式)　summary_large_image か summary どちらかを設定する<br>summary_large_image：画像が大きく表示され、下側にタイトルのみ入る<br>summary：画像が左側に小さく表示され、右側にタイトルとディスクリプションが入る（商品ページや記事ページの場合はこちらの方が良いかも） |
| twitter:image | 表示したいサムネイル画像のURL<br>基本はOGPと同じものでOK。ツイッターに特化したサイズにしたい場合は別のサイズで作成する必要あり |
| twitter:title | 対象ページのタイトル（og:titleと同じ内容であれば記述しなくてもOK） |
| twitter:description | 対象ページの説明文(概要)（og:descriptionと同じ内容であれば記述しなくてもOK） |
| twitter:site | 基本は設定なし<br>@から始まるXのユーザーID<br>クライアントから支給があった場合は設定する |

---

## READMEの設置

### README設置について

サイトの仕様・運用ルール等の伝達・把握不足による問題を未然に防ぐため、サイトデータのルート階層にREADME.mdの設置を行ってください。

社内メンバーは以下のDocBaseから運用のルールについても確認をお願いします。  
[【ルール】README運用マニュアル](https://gpol.docbase.io/posts/3568284)

### READMEの記載内容

以下の項目は必須でREADMEに記載するようにしてください。

#### プロジェクトの概要・基本情報

- 本番URL
- テスト環境URL
- コンポーネントリストURL（ある場合）
- デザインデータ格納場所
- プロジェクト管理シート

#### 開発環境について（特殊な開発環境の場合は必須）

- 開発環境の用途
- 動作環境
- 環境構築手順

#### コーディング仕様について

- コーディングガイドライン
- 特殊な仕様・ルールがある場合

#### 運用に関するルール（注意事項のある場合は必須）

運用に関する注意点、共有事項を随時反映してください。

#### 更新履歴

共有の必要な更新があった場合は、日付と内容を記載してください。

### READMEの記載例

記載フォーマットの指定はありませんが、以下の例も参考にプロジェクトの特性に合わせて作成を行ってください。

```bash
# プロジェクト名

## プロジェクト概要
プロジェクトにの概要について

## 環境

### 本番環境
https://xxx.co.jp/

### テスト環境
http://xxx.testing-web.com/

### コンポーネントリスト
http://xxx.testing-web.com/parts/

## デザイン
GoogleドライブURL

## プロジェクト管理シート
GoogleドライブURL

## コーディング開発環境
開発環境について概要・用途等
- Sassのコンパイル
- JSのバンドル　など

### 動作環境
- Node.js v14.x.x 以上
- npm v6.x.x 以上

### ディレクトリ構成


www/
├── html/
│   └── assets/
│       └── js/
│           ├── dist/       # 〇〇
│           ├── src/        # 〇〇
│           └── public/     # 〇〇
│               ├── libs/   # 〇〇
│               └── xxx.js  # 〇〇
├── package.json
└── webpack.config.js

### 開発環境構築

# パッケージのインストール
$ npm install

# ローカル環境の立ち上げ
$ npm run start

# ビルド
$ npm run build

## コーディング仕様
- 〇〇のコーディングガイドラインに沿って制作[url]
- Sassのコンパイル形式、autoprefixの設定　など

### Sassについて
- 【記法】Dart Sass
- 【形式】compressed
- 【ベンダープレフィックス】無し
※上記は推奨設定です。異なる場合は設定を記載してください。

## 運用に関して
- クライアント側での本番更新の可能性があるため、作業前に本番からデータを落とす　など

## 更新履歴
2024.00.00　運用に関してxxxについてのルール更新　など
```

### パートナー様のREADME設置について

パートナー様につきましても、以下の事項に該当する場合はREADMEの設置をお願いいたします。

#### 開発環境

弊社提供のコーディングテンプレート以外の開発環境を使用する場合は、必ず以下の情報をREADMEに記載してください。

- 開発環境の用途
- 動作環境
- 環境構築手順

#### 共有事項

その他、制作に関する共有事項がある場合はREADMEに記載をお願いいたします。





