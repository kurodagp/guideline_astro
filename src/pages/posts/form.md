---
layout: ../layouts/MarkdownLayout.astro
title: フォーム
pubDate: 2022-01-01
order: 10
---

# フォーム

## フォーム構造

### form要素

- インプット要素、送信ボタンは必ずformタグで囲んでください。

### 送信ボタン

- フォーム送信ボタンには、button[type="submit"]、または input[type="submit"]を使用してください。aタグやinput[type="button"]、button[type="button"]は例外的な仕様を除き使用しないようにしてください。

```html
<!-- Bad -->
<a href="#">送信する</a>
<input type="button" value="送信する">
<button type="button">送信する</button>

<!-- Good -->
<button type="submit">送信する</button>
<input type="submit" value="送信する">
```

## meta属性

### name属性

各インプット要素には、以下の命名規則に従い、name属性を設定してください。

| | 内容 / content | name属性 / name attribute |
|---|---|---|
| **お名前 / name** | 姓 / family name | sei |
| | 名 / given name | mei |
| **フリガナ** | セイ / kana(family name) | sei_kana |
| | メイ / kana(given name) | mei_kana |
| **性別 / gender** | 男 / male | gender |
| | 女 / female | gender |
| **ご住所 / address** | 郵便番号 / postal code | zip |
| | 郵便番号(3-4) / postal code(3-4) | zip1, zip2 |
| | 都道府県 / prefectures | prefecture |
| | 市区・郡町村 / municipality | address |
| | 以下住所・番地 / house number | address_other |
| | アパート・マンション・部屋 / Apartment, Room | building |
| **電話番号 / phone number** | 電話番号 / phone number | tel |
| | FAX番号 | fax |
| **メールアドレス / mail address** | メールアドレス / mail address | email |
| | 確認用 / for confirming | email_check |
| **選択項目 / selection item** | 項目1 / item 1 | check[1] |
| | 項目2 / item 2 | check[2] |
| | 項目3 / item 3 | check[3] |
| **お問い合わせ内容・備考 / content of inquiry** | | message |

### type属性

各インプット要素には、入力内容に応じて適切なtype属性を設定してください。

例：
- メールアドレス → `type="email"`
- 電話番号 → `type="tel"`
- 数字のみ → `type="number"`
- パスワード → `type="password"`
- 日付 → `type="date"`

## スタイル設定

- インプット要素のfont-sizeは16px以上に設定をしてください。（iOSでのフォーカス時のズームイン対策）

## ユーザビリティ・アクセシビリティ

### label要素

インプット要素のラベルは labelタグで関連付けを行い、ラベルをクリックした際に対応するインプット要素にフォーカスが当たるようにしてください。

関連付けには以下のいずれかの方法を用いてください。
- ① for属性にinputタグのidを設定する
- ② labelタグの中に inputタグをネストする

```html
<!-- Good：①for属性で関連付ける -->
<label for="email">メールアドレス</label>
<input type="email" id="email" name="email">

<!-- Good：②label内にinputをネストする -->
<label>
  メールアドレス
  <input type="email" name="email">
</label>
```

## 住所自動入力

郵便番号の入力に応じて住所を自動補完する機能が必要な場合、コーディング対応時に実装を行ってください。

参考：
- [https://dezanari.com/ajaxzip3/](https://dezanari.com/ajaxzip3/)
- [https://github.com/yubinbango/yubinbango](https://github.com/yubinbango/yubinbango)