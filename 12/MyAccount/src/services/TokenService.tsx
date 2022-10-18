
class TokenService {

    static SaveTokenToStorage(currentToken: any): void {
        localStorage.setItem('Authorization', JSON.stringify(currentToken));
    }

    static GetTokenFromStorage(): string | [] {

        let currentToken = localStorage.getItem('Authorization');

        return currentToken ? currentToken : [];
    }

    static ClearTokenFromStorage(): void {
        localStorage.clear();
    }
}

export default TokenService;