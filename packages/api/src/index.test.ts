import { describe, it, expect } from 'vitest'
import app from './app'

describe('index API', () => {

  it('Hello, konoyubitomareが返ってくるかどうか', async () => {
    const res = await app.request("/")
    expect(res.status).toBe(200);
    expect(await res.text()).toBe('Hello, konoyubitomare');
  })
});