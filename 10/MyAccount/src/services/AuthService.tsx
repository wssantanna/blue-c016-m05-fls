import ICredential from '@interfaces/Credential';
import IRegistration from '@interfaces/Registration';
import IAuthorization from '@interfaces/Autorization';

type AuthorizationResponse = IAuthorization | false;

class AuthService {

    static async Authentication(credential: ICredential): Promise<AuthorizationResponse> {
        const require = await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify(credential)
        });
        const currentAuthorization: AuthorizationResponse = await require.json();

        return currentAuthorization;
    }

    static async RegisterUser(userRegistration: IRegistration): Promise<boolean> {
        const requireRegister = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(userRegistration)
        });
        const hasRegistered: boolean = requireRegister.ok;

        return hasRegistered;
    }

}

export default AuthService;