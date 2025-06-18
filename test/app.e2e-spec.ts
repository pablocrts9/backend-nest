import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!!');
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'suma', a: 10, b: 30 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(40);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'resta', a: 10, b: 2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
         expect(response.body.resultado).toBe(8);
      });
  });

  it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'multiplicacion', a: 3, b: 2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
         expect(response.body.resultado).toBe(6);
      });
  });

     it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: 4, b: 2 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
         expect(response.body.resultado).toBe(2);
      });
  });

      it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 4 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
         expect(response.body.resultado).toBe(120);
      });
  })

   it('/operaciones (GET)', () => {
    return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'sumas', a: 4 })
      .expect(500)
      .expect('Content-type', /application\/json/)
      .then((response) => {
         expect(response.body.resultado).toBe(undefined);
      });
  })
});
