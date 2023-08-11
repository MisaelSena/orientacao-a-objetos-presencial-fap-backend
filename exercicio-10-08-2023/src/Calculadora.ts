export class Calculadora{
    private numero1: number;
    private numero2: number;

    constructor(numero1: number, numero2: number){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    //Getters e Setters
    getNumero1():number{
        return this.numero1;
    }
    setNumero1(numero1:number){
        this.numero1 = numero1;        
    }
    getNumero2():number{
        return this.numero2;
    }
    setNumero2(numero2:number){
        this.numero2 = numero2;
    }
    //Métodos
    soma(){
        return this.numero1 + this.numero2;       
    }

    subtracao(){
        return this.numero1 - this.numero2;
    }
    multiplicacao(){
        return this.numero1 * this.numero2;
    }
    divisao(){
        return this.numero1 / this.numero2;
    }

}