# しんじゅの伝説DX 開発ルール

## 開発方針

このプロジェクトは GitHub Pages 上で動作するブラウザRPGである。

コードの保守性を高めるため、機能追加はモジュール単位で行う。

巨大な game.js を作らず、機能ごとにファイルを分割すること。

---

## ファイル構成

index.html

style.css

js/

modules.json

main.js

core/

battle/

map/

party/

story/

ui/

docs/

PROJECT.md

TODO.md

STORY.md

CHANGELOG.md

---

## モジュール開発ルール

### 新機能追加

新しい機能を追加する場合は既存ファイルへ大量追記しない。

可能な限り新規モジュールを作成する。

例

* 薬屋 → js/map/pharmacy.js
* 火山 → js/map/volcano.js
* 仲間進化 → js/party/evolution.js
* ボス戦 → js/battle/bossBattle.js

機能追加後は modules.json を更新する。

---

## modules.json

main.js は modules.json を読み込む。

新しいモジュールを追加した場合は modules.json に登録する。

例

[
"./core/state.js",
"./battle/battle.js",
"./map/forest.js",
"./map/pharmacy.js"
]

---

## 既存機能修正ルール

既存機能を修正する場合は必ず先に最新ファイルを読む。

過去のチャット内容を信用しない。

修正前に対象ファイルを取得して内容を確認すること。

修正後は差分のみ変更する意識を持つこと。

既存機能を壊さないことを最優先とする。

---

## 更新前チェック

変更前に必ず以下を確認する。

1. PROJECT.md
2. modules.json
3. 対象モジュール
4. 関連モジュール

---

## 禁止事項

* game.js を巨大化しない
* 機能追加のたびに全体を書き換えない
* 古いコードを元に上書きしない
* modules.json を更新せずにモジュールを追加しない

---

## 推奨事項

機能追加時は以下を優先する。

1. 新規モジュール作成
2. modules.json 更新
3. 必要最小限の既存修正

---

## 開発の原則

小さく作る。

小さく直す。

小さく Push する。

大規模変更は複数回のコミットに分ける。
