import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

 // SUMA
  describe('suma', () => {
    it('debería sumar correctamente', () => {
      expect(service.operar('suma', 10, 30)).toBe(40);
      expect(service.operar('suma', -10, 50)).toBe(40);
      expect(service.operar('suma', Math.PI, 30)).toBeCloseTo(33.14, 2);
    });

    it('debería lanzar error si "a" es null o undefined', () => {
      expect(() => service.operar('suma', null as any, 50)).toThrow('El valor de a debe ser un numero');
      expect(() => service.operar('suma', undefined as any, 50)).toThrow('El valor de a debe ser un numero');
    });
  });

  // RESTA
  describe('resta', () => {
    it('debería restar correctamente', () => {
      expect(service.operar('resta', 30, 30)).toBe(0);
      expect(service.operar('resta', 50, -40)).toBe(90);
    });

    it('debería lanzar error si "a" es inválido', () => {
      expect(() => service.operar('resta', null as any, 50)).toThrow();
      expect(() => service.operar('resta', undefined as any, 50)).toThrow();
    });
  });

  // MULTIPLICACIÓN
  describe('multiplicacion', () => {
    it('debería multiplicar correctamente', () => {
      expect(service.operar('multiplicacion', 0, 30)).toBe(0);
      expect(service.operar('multiplicacion', 3, 4)).toBe(12);
      expect(service.operar('multiplicacion', 11, -2)).toBe(-22);
    });

    it('debería lanzar error si "a" o "b" no están definidos', () => {
      expect(() => service.operar('multiplicacion', null as any, 50)).toThrow();
      expect(() => service.operar('multiplicacion', 60, undefined)).toThrow();
    });
  });

  // DIVISIÓN
  describe('division', () => {
    it('debería dividir correctamente', () => {
      expect(service.operar('division', 30, 30)).toBe(1);
      expect(service.operar('division', 2, 4)).toBe(0.5);
    });

    it('debería lanzar error si división por cero', () => {
      expect(() => service.operar('division', 10, 0)).toThrow('No se puede dividir por cero');
    });

    it('debería lanzar error si "a" es inválido', () => {
      expect(() => service.operar('division', null as any, 50)).toThrow();
    });
  });

  // POTENCIA
  describe('potencia', () => {
    it('debería calcular correctamente', () => {
      expect(service.operar('potencia', 2, 4)).toBe(16);
    });

    it('debería lanzar error si "a" es inválido', () => {
      expect(() => service.operar('potencia', null as any, 50)).toThrow();
    });
  });

  // FACTORIAL
  describe('factorial', () => {
    it('debería calcular factorial correctamente', () => {
      expect(service.operar('factorial', 5)).toBe(120);
      expect(service.operar('factorial', 0)).toBe(1);
    });

    it('debería lanzar error si el número es negativo', () => {
      expect(() => service.operar('factorial', -3)).toThrow('El factorial no se puede calcular para enteros negativos');
    });
  });

  // ERRORES DE OPERACIÓN
  describe('errores de operación', () => {
    it('debería lanzar error por operación inválida', () => {
      expect(() => service.operar('sumas', 1, 2)).toThrow('Operación no valida');
    });

    it('debería lanzar error si falta b en suma', () => {
      expect(() => service.operar('suma', 5)).toThrow('El valor de b debe ser un número');
    });
  });
});
