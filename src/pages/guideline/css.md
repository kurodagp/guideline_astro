---
title: CSS
description: CSSに関するガイドラインのページです
layout: ../layouts/DetailGuidelineLayout.astro
order: 3
category: guideline
---



## CSS
### 基本ルールと書式
CSSの定義は原則として外部CSSに記述してCLASS及びIDで呼び出す。
HTMLに直接記述する事は原則として禁止する。
Charsetの記述はHTMLと同じ「UTF-8」を設定する。
値が「0」なら単位を省略する。
画面の装飾は基本的にCSSでのみ行い、HTMLでは行わない。
HEX形式のカラーコードで3文字で表記できるものは3文字にする。（例 #fff、#033）

---

### インデントと改行
インデントと改行を使い構造を判断しやすいように記述します。
インデントは半角2スペースで行います。
スペースとタブを混在させるのはNGです。
ただし、案件によってはインデントを指定してはいけない場合もあるので、随時確認してください。
```
body {
..margin: 0;
..padding: 0;
}
```

---

### WEBフォントの使用
WEBフォントの使用は原則的にはGoogle Fontsのみとします。
その他のサービスやフリーフォントを使用する際はライセンスの確認をしてから使用してください。
また特別な指定がない場合はブラウザ間の表示の差異を最小限にするため、以下のWEBフォントを読み込んで使用してください。

#### ゴシック体
Noto Sans JP（https://fonts.google.com/specimen/Noto+Sans+JP）

#### 明朝体
Noto Serif JP（https://fonts.google.com/specimen/Noto+Serif+JP）

```
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,600&subset=japanese');
```
参考：パフォーマンステスト

---

### CSS 記述ルール
#### font-size
remで指定してください。
```
font-size: 1.4rem;
```

#### line-height
原則として単位なしで指定してください。
```
line-height: 1.5;
```

#### letter-spacing
emで指定してください。
```
letter-spacing: 0.05em;
```

#### color
半角英数字。HEX形式のカラーコードで3文字で表記できるものは3文字にする。
```
// Bad
color: #FF22CC;
background-color: #333333;

// Good
color: #ff22cc;
background-color: #333;
```

#### 小数点のあたまの0を省略しない
0.5emなどの小数点の前の0は省略しません。ファイルサイズの削減は考えずに、明示的に指定します。
```
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
```
// Bad
.foo {
  margin: 0px;
}

// Good
.foo {
  margin: 0;
}
```

---

### 禁止事項
#### style属性（インラインスタイル）の禁止
style属性（インラインスタイル）は使用せず、外部CSSに指定します。

#### style要素（head内に直接記述する方法）の禁止
style要素は使用せず、外部CSSに指定します。

---

### CSSハック
基本的に利用しないのを原則としますが、ブラウザのバグによりどうしても必要な場合には使用することを許可します。

---

### CSS3を使用する上での注意
レガシーブラウザなどで非対応のスタイルがありますので、対象ブラウザ確認の上、使用してください。

---

### 品質管理
以下のツールを利用してバリーデートチェックを行ってください。

#### W3C CSS Validation Service
https://jigsaw.w3.org/css-validator/

---

### ベンダープレフィックス
以下のルールで使用してください。Autoprefixerなども含みます。

#### 新規案件
ベンダープレフィックスはつけない（指定端末外の場合は有償で対応）

#### 既存案件
現状のルールに合わせて使用する。

または、担当ディレクターに相談して廃止する。