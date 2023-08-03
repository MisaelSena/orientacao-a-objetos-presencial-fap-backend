/*
* Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". 
Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade.

* Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar" que exiba no console
uma mensagem com o nome e a idade da pessoa.

* Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1).
A classe "Aluno" deve ter um atributo adicional chamado "matricula".
Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.

* Modifique a classe "Pessoa" para que o atributo "idade" seja privado.
Crie métodos getters e setters para acessar e alterar o valor da idade, respeitando o encapsulamento.

* Crie uma classe chamada "Animal" com um método chamado "falar".
Crie classes específicas que herdem de "Animal" (por exemplo: "Cachorro", "Gato", etc.)
e sobrescrevam o método "falar" para exibir o som característico de cada animal.
*/

/*
    *EXERCÍCIO 1*
    * Crie uma classe chamada "Pessoa" que tenha os atributos "nome" e "idade". 
    Em seguida, crie um objeto chamado "pessoa1" e atribua a ele um nome e uma idade.
*/
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    toPresent(){
        console.log(`Pessoa1-> Nome: ${this.name} Idade: ${this.age} anos`);
    }
}

const pessoa1 = new Person("Misael", 32);

/*
    *EXERCÍCIO 2*
    * Na classe "Pessoa" criada anteriormente, adicione um método chamado "apresentar" que exiba no console
    uma mensagem com o nome e a idade da pessoa.
*/
pessoa1.toPresent();

/*
    *EXERCÍCIO 3*
    * Crie uma classe chamada "Aluno" que herde da classe "Pessoa" (do exercício 1).
    A classe "Aluno" deve ter um atributo adicional chamado "matricula".
    Crie um objeto chamado "aluno1" que seja um aluno e imprima no console.
*/

class Student extends Person{
    constructor(name, age, registration){
        super(name, age);
        this.registration = registration;
    }

    toPresent(){
        console.log(`Aluno1-> Nome: ${this.name} - Idade: ${this.age} anos - Matrícula: ${this.registration}`);
    }
}

const student1 = new Student("Elthon", 29, 12345);

student1.toPresent();