import Cookies from 'js-cookie';

const TokenKey: string = 'Admin-Token'

export const getToken = (): string => {
  return Cookies.get(TokenKey);
}

export const setToken = (): void => {
  Cookies.set(TokenKey);
}

export const removeToken = (): void => {
  Cookies.remove(TokenKey);
}