import ICredential from '@interfaces/Credential';
import IRegistration from '@interfaces/Registration';
import IAuthorization from '@interfaces/Autorization';
import TokenService from './TokenService';

import { ServerAccount } from './config';

type AuthorizationResponse = IAuthorization | false;

class AuthService {

    static async Authentication(credential: ICredential): Promise<boolean> {

        const currentAuthorization = await ServerAccount.post('/api/auth', credential);

        TokenService.SaveTokenToStorage(currentAuthorization);

        return currentAuthorization ? true : false;

    }

    static async RegisterUser(userRegistration: IRegistration): Promise<AuthorizationResponse | false> {

        const currentAuthorization = await ServerAccount.post('/api/register', userRegistration);

        TokenService.SaveTokenToStorage(currentAuthorization);

        return currentAuthorization ? currentAuthorization : false;
    }

    static Logout(): void {
        TokenService.ClearTokenFromStorage();
    }

}

export default AuthService;