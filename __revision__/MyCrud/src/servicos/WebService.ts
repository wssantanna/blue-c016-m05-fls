
// (x) (Respeito) Definir tipos (Contratos/Retornos)
import { IJogo, IJogoResponse } from '../interfaces/Jogo';

// (2 ponto) - Consumir a API (backend) utilizando o Axios/fetch;
/*
    (x) 0,5 C
    (x) 0,5 R
    (x) 0,5 U
    (x) 0,5 D
*/

export default class WebService {
    // Create
    static async cadastrarJogo(jogo: IJogo): Promise<IJogoResponse> {
        // Realizo a requisicao para endipoint
        const requererCriacaoDeUmJogo = await fetch('', {
            method: 'POST',
            body: JSON.stringify(jogo)
        });
        // Aguardo a resposta e converto em json
        const jogoCadastrado: IJogoResponse = await requererCriacaoDeUmJogo.json();
        // Retorno o novo jogo (objeto do jogo) cadastrado
        return jogoCadastrado;
    }
    // Read
    static async listarJogos(): Promise<IJogoResponse[]> {
        // Realizo a requisicao para endpoint
        const requererJogos = await fetch('', { method: 'GET' });
        // Aguardo a resposta e converto em json
        // const listaJogos: Array<IJogoResponse> = await requererJogos.json();
        const listaJogos: IJogoResponse[] = await requererJogos.json();
        // Retorno uma lista (array) de jogos (objeto do jogo)
        return listaJogos;
    }
    // Update
    static async editarJogo(novoJogo: IJogo): Promise<IJogoResponse> {
        // Realizo a requisicao para endpoint
        const requererEdicaoDoJogo = await fetch('',
            {
                method: 'PUT',
                body: JSON.stringify(novoJogo)
            });
        // Aguardo a resposta e converto em json
        const jogoEditado: IJogoResponse = await requererEdicaoDoJogo.json();
        // Retorno o jogo (objeto do jogo) com os dados editados
        return jogoEditado;
    }
    // Delete
    static async deletarJogo(idJogo: number | string): Promise<boolean> {
        const requererRemocaoDoJogo = await fetch(`/${idJogo}`,
            {
                method: 'DELETE'
            });
        const statusDaRequisicao = requererRemocaoDoJogo.status;

        return (statusDaRequisicao == 200);
    }
}