export type UserData = {
  basicInfor: UserBasicInfor;
  contactInfor: ContactInfor[];
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
  type: "mailing" | "work";
};

export type UserEmail = {
  emailAddress: string;
  type: "work" | "personal";
  preferred: boolean;
};

export type UserPhone = {
  phoneNumber: number;
  type: "work" | "personal";
  preferred: boolean;
};

export type UserIdentification = {
  type: "national_id_card" | "driver_license";
  expiryDate: Date;
  file: File;
};

export type UserOccupation = {
  type: "unemployed" | "teacher" | "engineer" | "doctor" | "others";
  fromDate: Date;
  toDate: Date;
};
