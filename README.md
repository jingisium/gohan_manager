# アプリケーション名
  ごはんマネージャー

# アプリケーション概要
  毎日の食事の献立を計画し、必要な材料などを入力して保存できます。
  また、その献立に費やした金額を保存でき、家計管理としても利用できます。
  今までに作った料理については、レシピと画像をアーカイブに保存していつでも確認できます。

# URL
  https://gohan-manager.herokuapp.com/

# テスト用アカウント
  アカウント機能未実装

# 利用方法
  トップページから「献立作成」ボタンで計画を立てる画面に遷移します。
  日付、献立内容、材料、画像をフォームに入力して保存すると、トップページのカレンダーに献立内容と画像が表示されます。
  カレンダーに表示された献立をクリックすることで、献立の詳細画面に遷移し、保存した内容が表示されます。
  詳細画面の削除ボタンをクリックすることで、作成した献立を削除できます。

# 目指した課題解決
  特に共働きの家庭において、夫婦でお互いに同じ物を買ってきたり好き嫌いなどを理解していなかったりと、手伝うつもりが逆に迷惑をかけてしまうという、不本意な状況が発生することを防ぐために、買い物リストや献立などの計画をカレンダーに書き込み、お互いが編集をできて共有できるアプリの作成を目指しました。
  また、食材にかかった費用も都度保存することで家計管理も便利に行えるようなアプリを目指しました。

# 洗い出した要件

## トップページ
- 献立作成、レシピ一覧画面に遷移できるボタンがある
- カレンダーに保存した計画のタイトルと画像が表示されているようにする
- カレンダーに表示された計画をクリックするとその計画の詳細画面に遷移できるようにする

## 計画作成画面
- 献立の日付、献立のタイトル、必要な材料と分量、費用、料理の画像が入力できるようにする
- 画像は添付しなくても保存できるようにする
- 材料の入力フォームはユーザーが動的に追加、削除できるようにする
- 保存ができたらトップページに戻るようにする

## 計画詳細画面
- 保存した内容が表示されているようにする
- 材料費の合計額が表示されているようにする
- 編集ボタンと削除ボタンが表示されているようにする
- 編集ボタンをクリックすると計画編集画面に遷移する
- 削除ボタンをクリックすると、トップページに戻りカレンダーに適用されているようにする

## 計画編集画面
- 保存された内容がフォームに自動的に入力されている状態にする
- 献立の日付、献立のタイトル、必要な材料と分量、費用、料理の画像が入力できるようにする
- 画像は添付しなくても保存できるようにする
- 材料の入力フォームはユーザーが動的に追加、削除できるようにする
- 保存ができたらトップページに戻るようにする

## ユーザー管理機能
- ユーザー登録、ログインをしないとアプリの機能を使用できないようにする
- 新規登録時に、ニックネーム、メールアドレス、パスワードを登録できるようにする
- ルームを登録できるようにする
- ルームが同じユーザーは、計画やレシピなどのデータを共有できるようにする

## レシピ一覧画面
- レシピ作成画面に遷移するボタンがある
- レシピの検索エンジンがある
- 表示されているレシピをクリックするとレシピ詳細画面に遷移できるようにする

## レシピ作成画面
- レシピのタイトル、材料、分量、画像が入力できるようにする
- 保存するとレシピ一覧画面に戻るようにする

## レシピ詳細画面
- 保存した内容が表示されているようにする
- レシピ編集、削除ボタンが表示されているようにする
- 編集ボタンをクリックするとレシピ編集画面に遷移できるようにする
- 削除ボタンをクリックすると、レシピ一覧画面に戻り、表示に適用されているようにする

## レシピ編集画面
- 保存された内容が自動的にフォームに入力されているようにする
- レシピのタイトル、材料、分量、画像が入力できるようにする
- 保存するとレシピ一覧画面に戻るようにする

# 実装した機能についてのGIFと説明
- トップページにカレンダーが表示されているようにする
  https://gyazo.com/ec24336f0ef92b1423b063eb32a35ce1

- 献立作成ボタンをクリックすると計画作成画面に遷移する
  https://gyazo.com/0413a2d0f01cc3a02d9e1c38f2635cb9

- 日付の選択フォームはカレンダー表示でワンクリックで入力できる
  https://gyazo.com/fb405e2eb9459f0eae8164f7c383bc94

- 材料の入力フォームは追加・削除ボタンでユーザーが動的に増減できる
  https://gyazo.com/09ca98e9c6edbe9da0cf5060aa6558cc

- 計画を保存すると、トップページに戻り、保存した計画がカレンダーに表示される
  https://gyazo.com/cf323f90fe4af56d92c9d1a6b4ce8df5
  https://gyazo.com/fa9e8da79fbdae26fb0fea4a1930dc85

- カレンダーに表示された計画をクリックすると詳細画面に遷移する
- 計画詳細画面に保存した内容と材料費の合計金額が表示されている
  https://gyazo.com/0a759dcd7b3456cdd6e82cd80ca9369c

- 削除ボタンをクリックすると、トップページに戻りカレンダーに適用される
  https://gyazo.com/757740113bda748232919eabb3b0710a

# 実装予定の機能
- 計画編集機能
- ユーザー管理機能
- レシピ一覧画面
- レシピ詳細画面
- レシピ編集画面
- レシピ削除画面


# テーブル設計

## houses テーブル

| Column | Type    | Options     |
| ------ | ------- | ----------- |
| name   | string  | null: false |

### Association

- has_many :plans
- has_many :recipes
- has_many :users

## plans テーブル

| Column | Type       | Options           |
| ------ | ---------- | ----------------- |
| title  | string     | null: false       |
| date   | date       | null: false       |
| house  | references | foreign_key: true |

### Association

- has_many :ingredients
- belongs_to :house

## ingredients テーブル

| Column | Type       | Options           |
| ------ | ---------- | ----------------- |
| name   | string     | null: false       |
| amount | integer    | null: false       |
| price  | integer    |                   |
| plan   | references | foreign_key: true |

### Association

- belongs_to :plan

## users テーブル

| Column   | Type       | Options           |
| -------- | ---------- | ----------------- |
| nickname | string     | null: false       |
| email    | string     | null: false       |
| password | string     | null: false       |
| house    | references | foreign_key: true |

### Association

- belongs_to :house

## recipes テーブル

| Column | Type       | Options           |
| ------ | ---------- | ----------------- |
| title  | string     | null: false       |
| text   | text       | null: false       |
| house  | references | foreign_key: true |

### Association

- belongs_to :house

# ローカルでの動作方法
- git clone https://github.com/jingisium/gohan_manager.git
- bundle install
- yarn install