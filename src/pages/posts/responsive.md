---
layout: ../layouts/MarkdownLayout.astro
title: レスポンシブコーディング
pubDate: 2022-01-01
order: 7
---

# レスポンシブコーディング

基本的にはレスポンシブ用のコーディングテンプレートに従ってください。

## メディアクエリを記述する箇所

ブレイクポイント毎にまとめて調整用のスタイルを記述することは原則禁止です。  
同一セレクタに対する調整が把握しやすくなるよう、セレクタ毎に調整用のスタイルを記述してください。

```scss
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

## レスポンシブイメージ

### picture要素の使用

IEなどの非対応のブラウザにも対応するためにはjsでの対応が必要です。

[picturefill.js](https://github.com/scottjehl/picturefill)

```html
<picture>
  <source media="(max-width: 767px)" srcset="/assets/images/ttl_sp.png" width="700" height="200">
  <img src="/assets/images/ttl.png" width="580" height="140" alt="" decoding="async">
</picture>
```

※sourceタグとcssに記述しているメディアクエリに違いがないように注意し、ブラウザで必ず確認してください。

### Retinaディスプレイ対応

Retinaディスプレイ対応時は2倍サイズの画像も書き出して、srcsetで読み込んでください。

```html
<picture>
  <source media="(max-width: 767px)" srcset="/assets/images/ttl_sp.png" width="700" height="200">
  <img src="/assets/images/ttl.png" srcset="images/ttl@2x.png 2x" width="580" height="140" alt="" decoding="async">
</picture>
```

### メディアクエリでの要素の表示・非表示

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

## タブレット表示について

案件の仕様に従って設定してください。  
特に指定がない場合は、タブレットでもPC表示時と同じ見え方になるように制作してください。

## ブレークポイント

以下を基本とし、デザインや案件の仕様によってブレークポイントを変更してください。

```scss
$xs: 375;
$sm: 768;
$md: 1025;
$lg: 1240;
```