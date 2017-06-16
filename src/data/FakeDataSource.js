import Categories from './CallCategories'

const FAKE_CALLS = [
  {
    uuid: 1,
    categoryID: Categories.FLAT_HAS_SPARE.id,
    isOpen: true,
    lat: 40.9,
    lng: -74.1,
  },
  {
    uuid: 2,
    categoryID: Categories.BOOST.id,
    isOpen: false,
    isCompleted: false,
  },
  {
    uuid: 3,
    categoryID: Categories.AUTO_LOCK_OUT.id,
    isOpen: false,
    isCompleted: true
  },
  {
    uuid: 4,
    categoryID: Categories.OUT_OF_GAS.id,
    isOpen: false,
    isCompleted: false,
    isCanceled: true
  }
];

const FAKE_USER = {
  name: 'Shimon Shimshimowitz',
  unit_numbers: ['B-C89','5T-F98', 'L-23'],
  is_dispatcher: true,
  is_responder: true,
  is_admin: true,
};

const FAKE_PHONE_CALLS = [
  '7183371800',
  '2125551212',
  '8454254357',
];

const FakeDataSource = {
  authToken: 'fakeAuthToken',
  fake: true,
  _callsArray: ()=>{return FAKE_CALLS},
  phoneCalls: ()=>{return FAKE_PHONE_CALLS},
  user: ()=>{return FAKE_USER},
  createCall: ()=>{return null},
};

export default FakeDataSource;