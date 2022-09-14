
/*
    Os 4 pilares da Programação orientada à objeto

    (x) 1. Encapsulamento
    (x) 2. Abstração
    (x) 3. Herança
    (x) 4. Polimorfismo
*/

// 1. Encapsulamento
class Animal {

    /*
        2. Abstração

        2.1. Modificadores de acesso

        -> public (padrão) -    Acessível pela instância e/ou classe que herdar
        -> private -            Acessível apenas na classe de origem
        -> protected -          Acessível na classe de origem e através de herança
        -> readonly -           Acessível apenas para leitura. Obs.: É possível utilizá-la com os demais modificadores (Dener Batista)
    */
    protected _tutor: string;
    private _id: number = 1;
    // Nota: É possível
    readonly name?: string;

    /*
        2.2. Get/Set 
    */
    set id(id: number) {
        this._id = id;
    }
    get id(): number {
        return this._id;
    }
    // Nota: É possível utilizar apenas Get ou o Set conforme sua necessidade
    get tutor(): string {
        return this._tutor;
    }

    constructor(tutor: string, name?: string) {
        this._tutor = tutor;
        this.name = name;
    }

    public Speak(): void {
        console.log('NaN');
    }
}

// 3. Herança
class Dog extends Animal {

    // 4. Polimorfismo
    public Speak(): void {
        console.log('Au Au');
    }
}

// 3. Herança
class Cat extends Animal {

    // 4. Polimorfismo
    public Speak(): void {
        console.log('Miau');
    }
}

class Fish extends Animal { }

const animal = new Animal('Willian');
const myCat = new Cat('Max Cleiton');
const myDog = new Dog('Dener Batista');
const myFish = new Fish('Edinilson Fragoso');


console.log(animal.Speak());
console.log(myCat.Speak());
console.log(myCat.tutor);
console.log(myDog.Speak());
console.log(myDog.tutor);
console.log(myFish.Speak());
console.log(myFish.tutor);


// Exemplo 2: 

// Objeto
class Auth {

    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    IsValid() {
        if (this.username != null && this.password !== null) {
            console.log('É válido');
        }
    }
}

// Instância
const myAuth = new Auth('wssantanna', '1234');
myAuth.IsValid();
const otherAuth = new Auth('biah', '1234');


