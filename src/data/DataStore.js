import {AsyncStorage} from 'react-native';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';

export const fetchAuthToken = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(AUTH_TOKEN_KEY, (err, authToken) => {
      if (err) {
        reject(err);
      } else {
        resolve(authToken);
      }
    });
  });
};

export const setAuthToken = (authToken) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(AUTH_TOKEN_KEY, authToken, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};