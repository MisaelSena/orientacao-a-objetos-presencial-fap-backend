class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`O Animal ${this.name} fala`);
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }    
    
    speak(){
        console.log(`O Gato ${this.name} mia!`);
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }

    speak(){
        console.log(`O Cachorro ${this.name} late!`);
    }

}

class Parrot extends Animal{
    constructor(name){
        super(name);
    }
    speak(sound){
        console.log(`O Papagaio ${this.name} falou: ${sound}!`);
    }

}

const cat = new Cat("Thanos");
const dog = new Dog("Jubileu");
const parrot = new Parrot("Armstrong");

cat.speak();
dog.speak();
parrot.speak("Pisei na Lua!");