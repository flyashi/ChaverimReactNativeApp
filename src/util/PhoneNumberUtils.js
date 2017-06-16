export const extractDigits = (phoneNumber: string): string => {
  const parts = [];
  const re = /\d+/g;
  while (match = re.exec(phoneNumber)) {
    parts.push(match[0]);
  }
  return parts.join('');
};

export const formatPhoneNumber = (phoneNumber: string, international : boolean): string => {
  international = international || false;
  if (isValidUSPhoneNumber(phoneNumber)) {
    return formatUSPhoneNumber(phoneNumber, international);
  }
  return phoneNumber;
};

export const formatUSPhoneNumber = (phoneNumber: string, international: boolean): string => {
  if (!isValidUSPhoneNumber(phoneNumber)) {
    return phoneNumber;
  }
  const part1 = phoneNumber.substr(0, 3);
  const part2 = phoneNumber.substr(3, 3);
  const part3 = phoneNumber.substr(6, 4);
  const USformat = `(${part1}) ${part2}-${part3}`;
  if (international) {
    return `+1 ${USformat}`;
  } else {
    return USformat;
  }
};

export const isValidUSPhoneNumber = (phoneNumber: string): boolean => {
  if (!phoneNumber) return false;
  let sanitized = extractDigits(phoneNumber);
  if (sanitized[0] === '1') {
    sanitized = sanitized.substr(1);
  }
  return sanitized.length === 10;
};

export const isInitiateFakeDataPhoneNumber = (phoneNumber: string): boolean => {
  return extractDigits(phoneNumber) === '111';
};
