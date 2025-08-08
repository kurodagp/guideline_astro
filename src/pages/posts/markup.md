---
layout: ../layouts/MarkdownLayout.astro
title: マークアップ
pubDate: 2022-01-02
---

# マークアップ  
## 基本ルールと書式 
HTMLタグは必ず小文字で記述する。  
終了タグは必ず記述する。  
エンプティ要素（img・br・meta・linkなど）は最後を閉じない。  
alt属性は必ず記述する。適切な文言がない場合はNull値（alt=""）とする。  
HTMLファイル内では基本的HTMLのみのマークアップを行い、外部ファイルCSS、JavaScriptで行う。HTMLは可能な限り正しく記述する。  

## 機種依存文字 
実体参照に変換して記述してください。  
[https://www.akiyan.com/htmlspecialchars](). 

## インデントと改行
インデントと改行を使い構造を判断しやすいように記述します。  
インデントは半角2スペースで行います。  
スペースとタブを混在させるのはNGです。  
ただし、案件によってはインデントを指定してはいけない場合もあるので、随時確認してください。

```html
<nav>
..<ul>
....<li>text text</li>
....<li>text text</li>
....<li>text text</li>
..</ul>
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

