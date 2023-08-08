class Carro{
    nome: string;
    capacidadeTanque: number; //Capacidade do Tanque Em Litros
    kmPorLitro: number; //Quantidade de Km por Litro
    private situacaoTanque: number; //Quantidade de Litros atual
    constructor(nome: string, capacidadeTanque: number, kmPorLitro: number, situacaoTanque: number){
        this.nome = nome;
        this.capacidadeTanque = capacidadeTanque;
        this.kmPorLitro = kmPorLitro;
        this.situacaoTanque = situacaoTanque;
    }

    autonomiaTanqueCheio(){
        let autonomia = this.capacidadeTanque * this.kmPorLitro;
        return autonomia;
    }

    getSituacaoTanque(){
        return this.situacaoTanque;
    }
    getAutonomiaSituacaoTanque(){
        let autonomia = this.situacaoTanque * this.kmPorLitro;
        return autonomia;
    }

    setAbastecer(litros:number){
        let capacidadeLivreTanque = this.capacidadeTanque - this.situacaoTanque;
        let autonomia = this.getAutonomiaSituacaoTanque();

        if(litros > capacidadeLivreTanque){
            console.log(`A capacidade Livre disponível no tanque do ${this.nome} é ${capacidadeLivreTanque} Litros`);
        }else{
            this.situacaoTanque = this.situacaoTanque + litros;            
            console.log(`Você abasteceu: ${litros} Litros - Nível de Combustível Atual do ${this.nome}: ${this.situacaoTanque} - Litros - Autonomia: ${autonomia} Km`);
            }
    }
    
}

class Categoria extends Carro{
    capacidadePassageiros: number;
    peso: number;

    constructor(nome: string, capacidadeTanque: number, kmPorLitro: number, situacaoTanque: number, capacidadePassageiros: number, peso: number){
        super(nome, capacidadeTanque, kmPorLitro, situacaoTanque)
        this.capacidadePassageiros = capacidadePassageiros;
        this.peso = peso;
    }

}

const carro1 = new Categoria("Gol",55,13,10,5,1009);

console.log(`O ${carro1.nome} Possui ${carro1.autonomiaTanqueCheio()} Km de autonomia com Tanque Cheio!`);
console.log(`Nível de Combustível Atual do ${carro1.nome}: ${carro1.getSituacaoTanque()} Litros Autonomia: ${carro1.getAutonomiaSituacaoTanque()} Km`);
carro1.setAbastecer(40);








