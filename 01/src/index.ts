
/*

    Tipagem estática
*/

// 1. boolean
let usuarioAtivo: boolean = true;

// 2. string
let saldar: string = 'Olá';

// 3. number
let valorTotal: number = 200.50;
let cor: number = 0xff0;

// 4. array (lista)
let sacola: string[] = ['uva', 'mamão', 'pêra'];
let salarios: Array<number> = [2560, 3210.50, 1917.23];

// 5. tuple / vetor
let produto: [string, number] = ['leite', 8.10];

// 6. enum
enum cores {
    black = '#000',
    white = '#fff'
}

// 7. any
let qualquerValor: any = '1';
qualquerValor = 1;

// 8. void
function inicializar(): void {
    console.log('Inicializa o programa');
}

// 9. never
function error(): never {
    throw new Error('Error');
    // Não vai chegar nesse ponto da aplicação...
    console.log('Disparou um error');
}

// 10. type
type Abacate = string | number;

function requererUsuario(id: Abacate): void {

}

function deletarUsuario(id: Abacate): void {

}

requererUsuario('1');
requererUsuario(1);
// requererUsuario(true);

// 11. object
let cartao: object = {
    chave: 'valor',
    numero: ['abc', 1]
}

// extra. type inference
let mensagem = 'mensagem';
mensagem = 1;