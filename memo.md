# 自炊アシストアプリ

## 機能一覧
- PWA化

### 認証
- google ログイン/ログアウト: Supabase Auth

### ご飯記録
- 画像のアップロード: Supabase Storage
- メモ
- ご飯履歴

### 買い物アシスト
- 買い物リスト
- 使った金額の記録
  - 割り勘

(今後実装できそうな機能)
- 他のユーザーと共有
  - 買い物リスト
  - ご飯履歴
  - 食費共有

## 必要なページ一覧
- ログインページ /login
  - googleアカウントでログイン
- トップページ /
  - 未ログインなら /login へリダイレクト
  - ご販路記録ボタン
  - 買い物するボタン
  - ログアウトボタン
- 写真記録ページ /photo
  - 写真 記録 & アップロード /photo/upload
  - 写真記録 /photo/history
  - 写真詳細 /photo/[photoId]
- 買物ページ /shopping
  - 買い物リストの編集 todoリスト的な感じ
  - 使用金額の記録
