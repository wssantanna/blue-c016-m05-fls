
// 1. Type Alias (atalho)

// Exemplo 3: 

type Student = {
    id: number,
    fistName: string,
    lastName: string,
    email?: string;
}

type Preferences = {
    theme: 'light' | 'dark'
}

type Account = Student & Preferences;

const student: Account = {
    theme: 'light',
    id: 1,
    fistName: 'Willian',
    lastName: 'Sant Anna',
}

// Exemplo 2:

type Plataform = 'Window' | 'Linux' | 'MacOs';

function redirectTo(platform: Plataform): string {
    return `Ir para download na plataforma ${platform}.`;
}

redirectTo('Window');

redirectTo('Linux');

redirectTo('MacOs');

// Exemplo 1: 

type Uid = number | string;

function getById(id: Uid): string {
    return `Usuário de id ${id} não encontrado...`;
}

getById('1');
getById(1);

