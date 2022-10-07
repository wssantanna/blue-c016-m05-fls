
class TokenService {

    static SaveTokenToStorage(currentToken: any, memorize: boolean = false): void {
        if (memorize) {
            localStorage.setItem('Authorization', JSON.stringify(currentToken));
        }
        else {
            sessionStorage.setItem('Authorization', JSON.stringify(currentToken));
        }
    }

    static GetTokenFromStorage(): string | false {

        let currentToken = localStorage.getItem('Authorization');

        return currentToken ? currentToken : false;
    }

    static ClearTokenFromStorage(): void {
        /*
            localStorage.getItem();
            localStorage.removeItem();
            localStorage.clear();
        */
        localStorage.clear();
        sessionStorage.clear();
    }
}

export default TokenService;