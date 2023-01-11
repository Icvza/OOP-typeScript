class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log(`${this.name} makes some generic animal sound`);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log(`${this.name} meows`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): void {
        console.log(`${this.name} barks`);
    }
}

class GenericAnimal extends Animal {

    constructor(name: string) {
        super(name)
    }
}

let wolf = new GenericAnimal('howler')

console.log(wolf.makeSound())


