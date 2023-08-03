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
    //Atributo age colocado como privado com a utilização do #
    #age
    constructor(name, age){
        this.name = name;
        this.#age = age;
    }
    //Método get implementado para acesso ao atributo privado "age"
    get age(){
        return this.#age;
    }
    //Método set implementado para acesso ao atributo privado "age"
    set age(age){
        this.#age = age;
    }

    toPresent(){
        console.log(`Pessoa1-> Nome: ${this.name} Idade: ${this.#age} anos`);
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

/*
    *EXERCÍCIO 4*
    * Modifique a classe "Pessoa" para que o atributo "idade" seja privado.
    Crie métodos getters e setters para acessar e alterar o valor da idade, respeitando o encapsulamento.
*/

//Aqui, após o encapsulamento do atributo "age" na classe Person, ao ser executado, a idade ficaria como undefined.
//Porém, como implementamos dentro da Classe person o método get, o atributo é mostrado normalmente.
student1.toPresent();
student1.age = 30;
//Na Linha abaixo, sem a implemntação do método set na classe Person, Elthon permaneceria com 29 anos.
student1.toPresent();