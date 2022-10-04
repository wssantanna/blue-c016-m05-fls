import { createServer, Model } from 'miragejs';

class GamesController {

    static GetGames() {
        const [schema] = arguments;

        return schema.games.all();
    }

    static GetGameById() {
        const [schema, request] = arguments;
        const { idGame } = request.params;
        const gameFound = schema.games.find(idGame);

        return gameFound;
    }

    static GetGameByCategoryName() {
        const [schema, request] = arguments;
        const { categoryName } = request.params;
        const gamesFound = schema.games.where({ category: categoryName });

        return gamesFound;
    }

    static CreateGame() {
        const [schema, request] = arguments;
        const newGame = JSON.parse(request.requestBody);

        return schema.games.create(newGame);
    }

    static UpdateGameById() {
        const [schema, request] = arguments;
        const gameUpdated = JSON.parse(request.requestBody)
        const { idGame } = request.params;
        const gameFound = schema.games.find(idGame);

        return gameFound.update(gameUpdated);

    }

    static DeleteGame() {
        const [schema, request] = arguments;
        const { idGame } = request.params;
        const gameFound = schema.games.find(idGame);

        return gameFound.destroy();
    }
}

class Mock {

    static Initialize(): void {

        createServer({

            models: {
                game: Model
            },

            routes() {

                this.namespace = 'api';

                this.post(
                    '/jogos',
                    GamesController.CreateGame
                );

                this.get(
                    '/jogos',
                    GamesController.GetGames
                );

                this.get(
                    '/jogos/:categoryName',
                    GamesController.GetGameByCategoryName
                )

                this.get(
                    '/jogos/:idGame',
                    GamesController.GetGameById
                );

                this.patch(
                    '/jogos/:idGame',
                    GamesController.UpdateGameById
                );

                this.del(
                    '/jogos/:idGame',
                    GamesController.DeleteGame
                );

            }
        });
    }
}

export default Mock;