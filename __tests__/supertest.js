const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/api/questions/:organizations', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () =>
        request(server)
          .get('/api/questions/sdfgsdfgsdfg')
          .expect('Content-Type', /application\/json/)
          .expect(200));
      it('response is an array', () =>
        request(server)
          .get('/api/questions/Facebook')
          .expect((res) => {
            expect(Array.isArray(res.body)).toEqual(true);
          }));
    });
  });
  describe('/api/questions/', () => {
    const question = {
      qTitle: '9Sum',
      qDetails: 'no',
      qType: 'Behavioral',
      organization: 'Amazon',
      qURL: '',
    };
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () =>
        request(server)
          .post('/api/questions/')
          .send(question)
          .expect('Content-Type', /application\/json/)
          .expect(200));
      it('response is a string', () =>
        request(server)
          .post('/api/questions/')
          .send(question)
          .expect((res) => {
            expect(typeof res.body).toEqual('string');
          }));
      it('response is the string "question created"', () =>
        request(server)
          .post('/api/questions/')
          .send(question)
          .expect((res) => {
            expect(res.body).toEqual('question created');
          }));
      it('response sends 400 from bad request', () =>
        request(server).post('/api/questions/').send({}).expect(400));
      it('response has error from bad request', () =>
        request(server)
          .post('/api/questions/')
          .send({})
          .expect((res) => {
            expect(res.body.err).toEqual('An error occurred');
          }));
    });
  });
  describe('/api/questions/org', () => {
    describe('GET', () =>
      it('responds with 200 status and application/json content type', () =>
        request(server)
          .get('/api/questions/org')
          .expect('Content-Type', /application\/json/)
          .expect(200)));
    it('response should be an array', () =>
      request(server)
        .get('/api/questions/org')
        .expect((res) => {
          expect(Array.isArray(res.body)).toEqual(true);
        }));
  });
});
