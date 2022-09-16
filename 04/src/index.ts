// 1. Construtor

class Humano {

    constructor(birthDate: Date) {
        console.log('Humano');
        console.log("Sua idade é:", birthDate);
    }
}

class Pai extends Humano {

    constructor(firstname: string, lastname: string, birthDate: Date) {
        super(birthDate);

        console.log('Pai');
        console.log('Seu nome completo é:', firstname, lastname);
    }
}

// 2. Interfaces

interface Employee {
    firstname: string,
    lastname: string,
    fullname?: () => string
}

class Developer implements Employee {

    firstname: string = "Alexandre";
    lastname: string = "Pereira";

    fullname(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}

const funcionario: Employee = {
    firstname: "Willian",
    lastname: "Sant Anna"
}

// 3. Interface vs. Type alias

// A. Declaração 

type Student = {
    id: number,
    firstname: string,
    lastname: string
}

interface Teacher {
    id: number,
    firstname: string,
    lastname: string
}

// B. Consigo extender interfaces


interface Teacher {
    birthDate: string
    skill?: "Full Stack" | "Front End"
}

const teacher: Teacher = {
    id: 1,
    firstname: 'Willian',
    lastname: 'Sant Anna',
    birthDate: '1990-08-31'
}

// C. Consigo herdar/extender Types alias

interface Teacher extends Student { };

// D. Interface não tem suporte a tuplas

type fullname = [string, string];

const student: fullname = ["Willian", "Sant Anna"];

interface skills {
    0: string,
    1: string
}

const professional: skills = ["Javascript", "Typescript", "React"]


// E. Interfaces não herdam tipos primitivos

type Uid = number | string