import Cookies from 'js-cookie';

const TokenKey: string = 'Admin-Token'

export const getToken = (): string => {
  return Cookies.get(TokenKey);
}

export const setToken = (token: string): void => {
  Cookies.set(TokenKey, token);
}

export const removeToken = (): void => {
  Cookies.remove(TokenKey);
}