
import { useEffect, useState } from 'react';

// Estruturar as pastas e melhorar a arquitetura do projeto (0,5 ponto);
// (x) (0.5 ponto) Estrutura de componentes
import Item from './Item';
// (x) (0.5 ponto) Estrutura de servicoes
import WebService from '../servicos/WebService';
//
import { IJogoResponse } from '../interfaces/Jogo';
//
import { Categorias } from '../tipos/Categorias';

// (x) (1 ponto) Implementar o componente Lista
export default function Lista() {

	const [jogos, definirJogos] = useState<IJogoResponse[]>([]);
	const [nome, definirNome] = useState<string>();
	const [categoria, definirCategoria] = useState<Categorias>();
	const [descricacao, definirDescricao] = useState<string>();
	const [erro, definirError] = useState(null);

	useEffect(() => {
		// Realizo a requisicao e aguardo uma promessa de lista de jogos
		WebService.listarJogos()
			// Atualiza o estado da minha aplicacao para renderizarmos a pagina com os novos valores
			.then(listaDeJogos => definirJogos(listaDeJogos))
			// Caso apresente algum erro atualizar o estado da minha aplicacao
			.catch(mensagemErro => definirError(mensagemErro))
	}, []);

	function enviarCadastroDoJogo() {
		// const novoJogo = 
	}

	return (
		<>
			<article>
				<h2>Meus jogos</h2>


				<section>
					<h2>Adicione um jogo</h2>
					<form onSubmit={(e) => {
						e.preventDefault();
						enviarCadastroDoJogo();
					}}>
						<div>
							<label htmlFor="tituloJogo">Nome do jogo</label>
							<input
								type="text"
								name='tituloJogo'
								onChange={(e) => { definirNome(e.target.value) }}
							/>
						</div>
						<div>
							<label htmlFor="categoriaJogo">Categoria do jogo</label>
							<select
								name="categoriaJogo"
								onSelect={(e) => { console.log((e.currentTarget.selectedOptions)) }}
							>
								<option value="luta">Luta</option>
								<option value="acao">Acao</option>
								<option value="rpg">RPG</option>
								<option value="fps">FPS</option>
								<option value="aventura">Aventura</option>
							</select>
						</div>
						<div>
							<label htmlFor="descricaoJogo">Descricao do jogo</label>
							<textarea
								name='descricaoJogo'
								onChange={(e) => { definirDescricao(e.target.value) }}
							/>
						</div>
					</form>
				</section>

				<section>
					<h2>Todos os jogos</h2>
					<ul>
						{jogos.map(jogo => <Item key={jogo.id} item={jogo} />)}
					</ul>
				</section>

				<section>
					<h2>Jogos de luta</h2>
					{
						// (x) (1 ponto) Criar a sessão de jogos classificados por gênero;
						jogos
							.filter(jogo => jogo.categoria == 'luta')
							.map(jogoDeLuta => <Item key={jogoDeLuta.id} item={jogoDeLuta} />)
					}
				</section>
			</article>
		</>
	)
}