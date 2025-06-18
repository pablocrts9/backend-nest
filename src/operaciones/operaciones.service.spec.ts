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
  //SUMA
  it('operacion deberia sumar',()=> {
    let a:any= 10; 
    let b=30;
    expect(service.operar('suma',a,b)).toBe(40);

    a=-10;
    b=50; 
    expect(service.operar('suma',a,b)).toBe(40);

    a=-10;
    b=-40; 
    expect(service.operar('suma',a,b)).not.toBe(-100);

    a=Math.PI
    b=30;
    expect(service.operar('suma',a,b)).toBeCloseTo(33.14, 2);

    a=null;
    b=50;
    expect(service.operar('suma',a,b)).toBeNaN();

    a=undefined;
    b=50;
    expect(()=> {
      service.operar('suma',a,b)
    }).toThrow('El valor de a debe ser un numero');
  })
//Resta
   it('operacion deberia restar',()=> {
    let a:any= 30; 
    let b=30;
    expect(service.operar('resta',a,b)).toBe(0);

    a=10;
    b=-50; 
    expect(service.operar('resta',a,b)).toBe(-40);

    a=-10;
    b=-40; 
    expect(service.operar('resta',a,b)).not.toBe(-100);

    a=Math.PI
    b=30;
    expect(service.operar('resta',a,b)).toBeCloseTo(33.14, 2);

    a=null;
    b=50;
    expect(service.operar('resta',a,b)).toBeNaN();

    a=undefined;
    b=50;
    expect(()=> {
      service.operar('resta',a,b)
    }).toThrow('El valor de a debe ser un numero');
  })
  //Multiplicacion
   it('operacion deberia multiplicar',()=> {
    let a:any= 0; 
    let b:any=30;
    expect(service.operar('multiplicar',a,b)).toBe(0);

    a=3;
    b=4; 
    expect(service.operar('multiplicar',a,b)).toBe(12);

    a=11;
    b=-2; 
    expect(service.operar('multiplicar',a,b)).toBe(-22);

    a=-10;
    b=-4; 
    expect(service.operar('multiplicar',a,b)).not.toBe(-4);

    a=null;
    b=50;
    expect(service.operar('multiplicar',a,b)).toBeNaN();

    a=undefined;
    b=50;
    expect(()=> {
      service.operar('multiplicar',a,b)
    }).toThrow('El valor de a debe ser un numero');

    a=60;
    b=undefined;
    expect(()=> {
      service.operar('multiplicar',a,b)
    }).toThrow('El valor de a debe ser un numero');
  })

  //Division
   it('operacion deberia dividir',()=> {
    let a:any= 30; 
    let b=30;
    expect(service.operar('division',a,b)).toBe(1);

    a=2;
    b=4; 
    expect(service.operar('division',a,b)).toBe(2);
    
    a=10;
    b=0; 
    expect(() => service.operar('division', a, b)).toThrow('No se puede dividir por cero');

    a=-10;
    b=-4; 
    expect(service.operar('division',a,b)).not.toBe(-4);

    a=null;
    b=50;
    expect(service.operar('division',a,b)).toThrow('El valor de a debe ser un numero');

    a=undefined;
    b=50;
    expect(()=> {
      service.operar('division',a,b)
    }).toThrow('El valor de a debe ser un número');
  })
  //Division
   it('operacion deberia calcular potencias',()=> {
    let a: any=2;; 
    let b=4;
    expect(service.operar('potencia',a,b)).toBe(8);
    
    a=-10;
    b=-4; 
    expect(service.operar('potencia',a,b)).not.toBe(-4);

    a=null;
    b=50;
    expect(service.operar('potencia',a,b)).toThrow('El valor de a debe ser un numero');

    a=undefined;
    b=50;
    expect(()=> {
      service.operar('potencia',a,b)
    }).toThrow('El valor de a debe ser un número');
  })
//Potencias
   it('operacion deberia calcular potencias',()=> {
    let a: any=2;; 
    let b=4;
    expect(service.operar('potencia',a,b)).toBe(16);
    
    a=-10;
    b=-4; 
    expect(service.operar('potencia',a,b)).not.toBe(-4);

    a=null;
    b=50;
    expect(service.operar('potencia',a,b)).toThrow('El valor de a debe ser un numero');

    a=undefined;
    b=50;
    expect(()=> {
      service.operar('potencia',a,b)
    }).toThrow('El valor de a debe ser un número');
  })
//Factorial
   it('operacion deberia calcular factoriale',()=> {
    let a: any=2;
    expect(service.operar('factorial', a)).toBe(2);
    
    a=-10;
    expect(() => service.operar('factorial', a)).toThrow('El factorial no se puede calcular para enteros negativos');

    a=null;
    expect(service.operar('potencia',a)).toThrow('El valor de a debe ser un numero');

    a=undefined;
    expect(()=> {
      service.operar('potencia',a)
    }).toThrow('El valor de a debe ser un número');
  })
//Otras validaciones
  it('debe lanzar error si la operación no es válida', () => {
      expect(() => service.operar('sumas', 1, 2)).toThrow('Operación no valida');
    });

 it('debe lanzar error si falta un número en suma', () => {
      expect(() => service.operar('suma', 5)).toThrow('El valor de b debe ser un número');
    });

});
