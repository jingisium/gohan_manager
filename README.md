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