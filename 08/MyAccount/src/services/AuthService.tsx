interface IUser {
    fistname: string,
    lastname: string
}

interface IAuthorization {
    token: string,
    user?: IUser
}

type AuthorizationResponse = IAuthorization | false;

class AuthService {

    static async Authentication(): Promise<AuthorizationResponse> {
        const require = await fetch('/api/auth', { method: 'POST' });
        const authorization: AuthorizationResponse = await require.json();

        return authorization;
    }

    static async RegisterUser(user: IUser): Promise<boolean> {
        const requireRegister = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(user)
        });
        const hasRegistered: boolean = requireRegister.ok;

        return hasRegistered;
    }

}

export default AuthService;