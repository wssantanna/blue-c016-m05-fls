import ICredential from '@interfaces/Credential';
import IRegistration from '@interfaces/Registration';
import IAuthorization from '@interfaces/Autorization';
import TokenService from './TokenService';

type AuthorizationResponse = IAuthorization | false;

class AuthService {

    static async Authentication(credential: ICredential): Promise<boolean> {
        const require = await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify(credential)
        });

        const currentAuthorization: AuthorizationResponse = await require.json();

        TokenService.SaveTokenToStorage(currentAuthorization);

        return currentAuthorization ? true : false;

    }

    static async RegisterUser(userRegistration: IRegistration): Promise<AuthorizationResponse | false> {
        const requireRegister = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(userRegistration)
        });

        const currentAuthorization: AuthorizationResponse = await requireRegister.json();

        TokenService.SaveTokenToStorage(currentAuthorization);

        return currentAuthorization ? currentAuthorization : false;
    }

    static Logout(): void {
        TokenService.ClearTokenFromStorage();
    }

}

export default AuthService;