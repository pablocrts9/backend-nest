import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesController } from './operaciones.controller';
import { OperacionesService } from './operaciones.service';
import { Response } from 'express';

describe('OperacionesController', () => {
  let controller: OperacionesController;

  const mockResponse = (): Response => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res as Response;
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperacionesController],
      providers: [OperacionesService],
    }).compile();

    controller = module.get<OperacionesController>(OperacionesController);
  });

  it('debería sumar correctamente', () => {
    const res = mockResponse();
    controller.operar(res, 'suma', 4, 6);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      resultado: 10,
      mensaje: 'operacion exitosa',
    });
  });

  it('debería fallar con operación desconocida', () => {
    const res = mockResponse();
    controller.operar(res, 'sumas', 4, 2);

    expect(res.status).toHaveBeenCalledWith(502);
    expect(res.json).toHaveBeenCalledWith({
      resultado: NaN,
      mensaje: 'operacion no pudo ser calculada',
    });
  });
});
