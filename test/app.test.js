// test/app.test.js
const request = require('supertest');
const app = require('../src/index');

describe('Basic API tests', () => {
  test('GET / should return greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from ValenCloud!');
  });

  test('GET /health should return JSON status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
