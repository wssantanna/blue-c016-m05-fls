import { Server } from 'miragejs';

function Mock() {

    return new Server({

        routes() {

            this.urlPrefix = "https://www.wssantanna.dev/";
            this.namespace = "api/account";

            this.get('/', () => {
                return { message: "Servidor Okay" }
            });

        }

    });
}

export default Mock;