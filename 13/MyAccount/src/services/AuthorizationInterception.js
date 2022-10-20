import TokenService from './TokenService';

class AuthorizationInterception {

    static GetJwtBearerAuthorization() {

        const jwtBearerAuthorization = `Bearer ${TokenService.GetTokenFromStorage}`;

        return jwtBearerAuthorization;
    }
}

return AuthorizationInterception;

/*
const AuthorizationInterception = ServerAccount.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${TokenService.GetTokenFromStorage}`;

    return config;
});*/