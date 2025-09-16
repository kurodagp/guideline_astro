---
title: フォーム
description: フォームに関するガイドラインのページです
layout: ../layouts/DetailGuidelineLayout.astro
category: guideline
---


## フォーム

### フォーム構造

#### form要素
インプット要素、送信ボタンは必ずformタグで囲んでください。

#### 送信ボタン
フォーム送信ボタンには、button[type="submit"]、または input[type="submit"]を使用してください。aタグやinput[type="button"]、button[type="button"]は例外的な仕様を除き使用しないようにしてください。

```
// Bad
<a href="#">送信する</a>
<input type="button" value="送信する">
<button type="button">送信する</button>

// Good
<button type="submit">送信する</button>
<input type="submit" value="送信する">
```

---

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

---


参考：  
[https://dezanari.com/ajaxzip3/](https://dezanari.com/ajaxzip3/)