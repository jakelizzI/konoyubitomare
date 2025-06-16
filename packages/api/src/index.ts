import { Hono } from 'hono';

const index = new Hono();

index.get('/', (c) => {
  return c.text("Hello, konoyubitomare");
})

export default index;