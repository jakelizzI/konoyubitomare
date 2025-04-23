import { describe, it, expect } from 'bun:test';
import app from './index';

describe('indexのテスト', () => {
  it('200 を返すことの確認', async () => {
    console.log('test start');
    const response = await app.request('/');
    console.log('test request end');
    expect(response.status).toBe(200);
  });

  it('Hello World を返すことの確認', async () => {
    const response = await app.request('/');
    expect(await response.text()).toBe('Hello World!');
  });
});