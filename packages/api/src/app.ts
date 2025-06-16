import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import index from './index'

const app = new Hono()

// ミドルウェア
app.use("*", cors());
app.use("*", logger());

// ルーティング
app.route("/", index);

export default app;