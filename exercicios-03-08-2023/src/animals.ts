class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    speak(){
        console.log(`O Animal ${this.name} fala`);
    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name);
    }    
    
    speak(){
        console.log(`O Gato ${this.name} mia!`);
    }
}

class Dog extends Animal {
    constructor(name:string){
        super(name);
    }

    speak(){
        console.log(`O Cachorro ${this.name} late!`);
    }

}

class Hen extends Animal{
    constructor(name:string){
        super(name);
    }
    speak(){
        console.log(`A Galinha ${this.name} carcarejou!`);
    }

}

const cat = new Cat("Thanos");
const dog = new Dog("Jubileu");
const hen = new Hen("Ginger");

cat.speak();
dog.speak();
hen.speak();