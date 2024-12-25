export type UserData = {
  basicInfor: UserBasicInfor;
  phones: UserPhone[];
  emails: UserEmail[];
  addresses: UserAddress[];
  identification: UserIdentification[];
  occupation: UserOccupation[];
};

export type UserBasicInfor = {
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: Date;
  age: number;
};

export type ContactInfor = {
  addresses: UserAddress[];
  emails: UserEmail[];
  phones: UserPhone[];
  identifications: UserIdentification[];
  occupations: string;
};

export type UserAddress = {
  country: string;
  city: string;
  street: string;
  postalCode?: string;
  addressType: AddressType;
};

export type UserEmail = {
  emailAddress: string;
  emailType: EmailType;
  preferred: boolean;
};

export type UserPhone = {
  phoneNumber: string;
  phoneType: PhoneType;
  preferred: boolean;
};

export type UserIdentification = {
  idType: IdentificationType;
  expiryDate: Date;
  file?: File;
};

export type UserOccupation = {
  occupationType: OccupationType;
  fromDate: Date;
  toDate: Date;
};

export enum AddressType {
  Mailing = "mailing",
  Work = "work",
}

export enum EmailType {
  Work = "work",
  Personal = "personal",
}

export enum PhoneType {
  Work = "work",
  Personal = "personal",
}

export enum IdentificationType {
  NationalIdCard = "national-id-card",
  DriverLicense = "driver-license",
}

export enum OccupationType {
  Unemployed = "unemployed",
  Teacher = "teacher",
  Engineer = "engineer",
  Doctor = "doctor",
  Others = "others",
}
