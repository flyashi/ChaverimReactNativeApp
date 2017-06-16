import FakeDataSource from '../data/FakeDataSource';
import DataSource from '../data/DataSource';

export const loginWithAuthToken = (authToken) => {
  return new Promise((resolve, reject) => {
    if (authToken === FakeDataSource.authToken) {
      DataSource.turnOnFakeData();
      resolve();
    } else {
      // Attempt server login
      reject();
    }
  });
};
