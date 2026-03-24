const request = require('supertest');
const app = require('../server');

describe('GET /api/message', () => {
    it('should return a JSON message', async () => {
        const response = await request(app)
            .get('/api/message')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual({
            message: 'Hello from Node.js backend!'
        });
    });
});