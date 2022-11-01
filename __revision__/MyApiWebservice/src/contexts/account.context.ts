import { PrismaClient } from "@prisma/client";

const AccountClient = new PrismaClient();

class AccountContext {

    static async Register(registrationForm: any) {
        const { firstname, lastname, username, password } = registrationForm;

        try {
            const userRegistration = await AccountClient.user.create({
                data: {
                    firstname,
                    lastname,
                    credential: {
                        create: {
                            username,
                            password
                        }
                    }
                }
            });

            return userRegistration ? userRegistration : null;

        }
        catch {
            throw "ServerError";
        }
    }

    static async Authenticate(credential: any) {

        const { username, password } = credential;

        try {
            const userFound = await AccountClient.credential.findFirst(
                {
                    where: { username, password }
                }
            );

            return userFound ? userFound : null;
        }
        catch {
            throw "ServerError";
        }
    }
}

export { AccountContext }