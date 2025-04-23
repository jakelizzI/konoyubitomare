[![Built with Devbox](https://www.jetify.com/img/devbox/shield_galaxy.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)

# konoyubitomare(このゆびとまれ)

## これは何？

「どこ」に「いつ」いるのかを可視化、共有化するアプリ。  
所属しているグループの人たちに対してPUSH通知する。  

## Situation example

### 予定していなかったが近くの公園で遊ぶことになった

- 遊ぶ側（企画側）
    - 特に予定はしていなかったが、子供と近くの公園に遊びに行くことになった。
    - いなくてもよいが、もし暇なら一緒に遊べる人がいるかな～と思っている時に、もし暇なら今から行く公園で遊びませんか？と通知できる
- 通知を受け取る側
    - 別の公園で遊んでいて通知を受けた。
    - 近くの公園だから一緒に遊べたらと思ってそっちの公園へ移動する。

## Motibation

保育園等のママ友・パパ友などに連絡をするほどでもないけど、もし暇なら一緒に公園で遊べたら良いなと思って作ろうと思いました。

## 技術スタック

- [tech-stack](/documents/tech-stacks.md)

## プロジェクト構成

このプロジェクトは以下のパッケージで構成されています：

- `packages/frontend`: SvelteKitを使用したフロントエンド
- `packages/backend`: Honoを使用したバックエンドAPI
- `packages/shared`: 共有型定義とバリデーションスキーマ

## 開発環境のセットアップ

### 前提条件

- [Bun](https://bun.sh/) がインストールされていること
- [Devbox](https://www.jetify.com/devbox/) がインストールされていること（オプション）

### インストール

```bash
# devboxを使用する場合
devbox shell

# 依存関係のインストール
bun install
```

### 開発サーバーの起動

```bash
# フロントエンドとバックエンドの両方を起動
bun dev

# フロントエンドのみ起動
bun --cwd packages/frontend dev

# バックエンドのみ起動
bun --cwd packages/backend dev
```

### ビルド

```bash
# すべてのパッケージをビルド
bun build

# フロントエンドのみビルド
bun --cwd packages/frontend build

# バックエンドのみビルド
bun --cwd packages/backend build
```

## デプロイ

このアプリケーションはCloudflare WorkersとPagesにデプロイすることを想定しています。

### バックエンドのデプロイ

```bash
bun --cwd packages/backend deploy
```

### フロントエンドのデプロイ

```bash
bun --cwd packages/frontend build
# Cloudflare Pagesにデプロイ
```

## 認証

認証には[Clerk](https://clerk.com/)を使用しています。実際に使用する前に、Clerkのアカウントを作成し、APIキーを設定する必要があります。

## データベース

データベースにはCloudflare D1を使用しています。実際に使用する前に、D1データベースを作成し、`wrangler.toml`ファイルを更新する必要があります。

```bash
# D1データベースの作成
wrangler d1 create konoyubitomare

# スキーマの適用
wrangler d1 execute konoyubitomare --file=./packages/backend/schema.sql
```

## ライセンス

MIT
