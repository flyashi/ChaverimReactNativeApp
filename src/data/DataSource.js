import {isValidUSPhoneNumber} from '../util/PhoneNumberUtils';
import FakeDataSource from './FakeDataSource';
import {setAuthToken} from './DataStore';

const DataSource = {
  authToken: undefined,
  fake: false,
  _callsArray: (): Array<{uuid: string}> =>{return []},
  calls: (uuid?: string)=>{
    if (uuid) {
      // return DataSource._callsArray().filter(x => {return x.uuid === uuid});
      return DataSource._callsArray().find(x => x.uuid === uuid);
    }
    return DataSource._callsArray();
  },
  openCalls: (): Array<{uuid: string}> => {
    return DataSource._callsArray().filter(x => {return x.isOpen && !x.isCanceled});
  },
  recentCalls: (): Array<{uuid: string}> => {
    return DataSource._callsArray().filter(x => {return !x.isOpen && !x.isCompleted && !x.isCanceled});
  },
  completedCalls: (): Array<{uuid: string}> => {
    return DataSource._callsArray().filter(x => {return x.isCompleted || x.isCanceled});
  },
  phoneCalls: (): Array<any>=>{return []},
  user: (): {name: string, is_dispatcher: boolean, is_responder: boolean, is_admin: boolean} =>{return {}},
  createCall: ()=>{return null},
  requestPhoneNumberConfirmationSMS: (phoneNumber: string): Promise => {
    // request SMS
    return new Promise((resolve, reject) => {
      if (isValidUSPhoneNumber(phoneNumber)) {
        // attempt to send SMS
        resolve();
      } else {
        reject();
      }
    });
  },
  confirmPhoneNumber: (phoneNumber: string, code: string): boolean => {

  },
  turnOnFakeData: () => {
    Object.assign(DataSource, FakeDataSource);
    setAuthToken(DataSource.authToken);
  },
  isLoggedIn: () => !!(DataSource.authToken || false),
};

// FOR TESTING ONLY (and so hot reloading works better)
//DataSource.turnOnFakeData();

export default DataSource;