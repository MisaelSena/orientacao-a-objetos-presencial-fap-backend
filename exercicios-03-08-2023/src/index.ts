class Pessoa{
    nome: string;
    private idade: number;
  
    constructor(nome: string, idade: number){
      this.nome = nome;
      this.idade = idade;
    }
  
    getIdade(){
      return this.idade;
    }
  
    setIdade(idade: number){
      this.idade = idade;
    }
  
    apresentar(){
      console.log(`Nome: ${this.nome} Idade: ${this.idade}`);
    }
  }

  class Aluno extends Pessoa{
    matricula: number;
    constructor(nome: string, idade: number, matricula: number){
      super(nome, idade);
      this.matricula = matricula;
    }
  apresentar(){
    console.log(`Nome: ${this.nome} Idade: ${this.getIdade()}, Matrícula: ${this.matricula}`);
  }
}

//Comandos
const pessoa1 = new Pessoa("Misael",32);
pessoa1.apresentar();

const aluno1 = new Aluno("Elthon", 19, 123123);
aluno1.apresentar();
aluno1.setIdade(20);
aluno1.apresentar();



