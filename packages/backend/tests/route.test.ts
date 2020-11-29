
import request from 'supertest'
import { Express } from 'express-serve-static-core';

import { createServer } from './utils/server';

let server: Express

beforeAll(async () => {
  server = await createServer()
})

describe('GET /all', () => {
  it('should return 200 & valid response if request param list is empity', async done => {
    request(server)
      .get(`/all`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err: any, res: any) => {
        if (err) return done(err)
        expect(res.body).toMatchObject({'message': 'Hello, stranger!'})
        done()
      })
  })

})