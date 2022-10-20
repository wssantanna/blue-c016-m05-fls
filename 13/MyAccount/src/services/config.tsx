import axios from 'axios';
import AuthorizationInterception from './AuthorizationInterception';

const baseURL = import.meta.env.VITE_BASE_URL;

const ServerAccount = axios.create({ baseURL });

ServerAccount.interceptors.request.use()

export { ServerAccount }