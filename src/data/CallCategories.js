let Categories = {};

Categories = {
  FLAT: {
    id: 'FLAT',
    name: 'Flat',
    subcategoryIDs: [
      'FLAT_HAS_SPARE',
      'FLAT_NO_SPARE',
      'FLAT_UNSURE_OF_SPARE',
      'FLAT_TWO_FLATS_ONE_SPARE'
    ],
  },
  FLAT_HAS_SPARE: {
    id: 'FLAT_HAS_SPARE',
    name: 'Flat - Has Spare',
    parentCategoryID: 'FLAT'
  },
  FLAT_NO_SPARE: {
    id: 'FLAT_NO_SPARE',
    name: 'Flat - No Spare',
    parentCategoryID: 'FLAT'
  },
  FLAT_UNSURE_OF_SPARE: {
    id: 'FLAT_UNSURE_SPARE',
    name: 'Flat - Unsure Of Spare',
    parentCategoryID: 'FLAT'
  },
  FLAT_TWO_FLATS_ONE_SPARE: {
    id: 'FLAT_TWO_FLATS_ONE_SPARE',
    name: 'Flat - Two Flats One Spare',
    parentCategoryID: 'FLAT',
  },
  BOOST: {
    id: 'BOOST',
    name: 'Boost',
  },
  OUT_OF_GAS: {
    id: 'OUT_OF_GAS',
    name: 'Out of Gas',
  },
  LOCK_OUT: {
    id: 'LOCK_OUT',
    name: 'Lockout',
    subcategoryIDs: [
      'AUTO_LOCK_OUT',
      'HOUSE_LOCK_OUT',
    ]
  },
  AUTO_LOCK_OUT: {
    id: 'AUTO_LOCK_OUT',
    name: 'Auto L/O',
    parentCateogryID: 'LOCK_OUT',
  },
  HOUSE_LOCK_OUT: {
    id: 'HOUSE_LOCK_OUT',
    name: 'House L/O',
    parentCateogryID: 'LOCK_OUT',
  }
};

export default Categories;

