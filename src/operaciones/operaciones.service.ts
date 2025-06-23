import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
    operar(operacion:string = '', a:number, b?:number) {

    if (this.#validar(operacion,a,b)===true){
            switch (operacion) {
                case 'suma':
                    return this.#suma(a, b!);
                case 'resta':
                    return this.#resta(a, b!);
                case 'multiplicacion':
                    return this.#multiplicacion(a, b!);
                case 'division':
                    return this.#division(a, b!);
                case 'potencia':
                    return this.#potencia(a, b!);
                case 'factorial':
                    return this.#factorial(a);
                default:
                    throw new Error('Operación no valida');
            }
        }   
    }

    #suma(a: number, b: number): number {
        return a + b;
    }
    #resta(a: number, b: number): number {
        return a - b;
    }
    #multiplicacion(a: number, b: number): number {
        return a * b;
    }
    #division(a: number, b: number): number {
        return a / b;
    }
    #potencia(a: number, b: number): number {
       return Math.pow(a, b);
    }
    #factorial(b: number): number {

    let resultado = 1;
    for (let i = 2; i <= b; i++) {
      resultado *= i;
    }
    return resultado;
    }

    #validar(operacion: string, a: number, b?: number): boolean {
    if (a === undefined || typeof a !== 'number') {
      throw new Error('El valor de a debe ser un numero');
    }

    if (operacion === 'factorial') {
      if (!Number.isInteger(a) || a < 0) {
        throw new Error('El factorial no se puede calcular para enteros negativos');
      }
      return true;
    }

    if (b === undefined || typeof b !== 'number') {
      throw new Error('El valor de b debe ser un número');
    }

    if (operacion === 'division' && b === 0) {
      throw new Error('No se puede dividir por cero');
    }

    return true;
  }
}
