/**
 * Login =======================================================
 */

export type LoginData = {
  email: string;
  password: string;
  remember: string;
};

export type ResetPasswordData = {
  email: string;
  password: string;
  confirmPassword: string;
  accept: boolean;
};

/**
 * User information =======================================================
 */

export type UserData = {
  basicInfor: UserBasicInfor;
  role: UserRole;
  organization?: string;
  department?: string;
  phones: UserPhone[];
  emails: UserEmail[];
  addresses: UserAddress[];
  identification: UserIdentification[];
  occupation: UserOccupation[];
  incomes?: Income[];
  assets?: Asset[];
  liabilities?: Liability[];
  sourceOfWealths?: SourceOfWealth[];
  netWorths?: string;
  investments?: Investment;
};

export type UserBasicInfor = {
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: string;
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
  preferred: PreferredType;
};

export type UserPhone = {
  phoneNumber: string;
  phoneType: PhoneType;
  preferred: PreferredType;
};

export type UserIdentification = {
  idType: IdentificationType;
  expiryDate: string;
  file?: File;
};

export type UserOccupation = {
  occupationType: OccupationType;
  fromDate: string;
  toDate: string;
};

export enum PreferredType {
  True = "true",
  False = "false",
}

export enum UserRole {
  Admin = "admin",
  User = "user",
}

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

export type Income = {
  incomeType: IncomeType;
  amount: string;
};

export type Asset = {
  assetType: AssetType;
  amount: string;
};

export type Liability = {
  liabilityType: LiabilityType;
  amount: string;
  totalAmount: string;
};

export type SourceOfWealth = {
  sourceOfWealthType: SourceOfWealthType;
  amount: string;
  totalAmount: string;
};

export type Investment = {
  experiment: ExperimentType;
  riskTolerance: RiskPercent;
};

export enum IncomeType {
  Salary = "salary",
  Investment = "investment",
  Others = "others",
}

export enum AssetType {
  Bond = "bond",
  Liquidity = "liquidity",
  RealEstate = "real-estate",
  Others = "others",
}

export enum LiabilityType {
  PersonalLoan = "personal-loan",
  RealEstateLoan = "real-estate-loan",
  Others = "others",
}

export enum SourceOfWealthType {
  Inheritance = "inheritance",
  Donation = "donation",
}

export enum ExperimentType {
  LessThan5Year = "< 5 years",
  From5to10Year = "> 5 and < 10 years",
  Over10Year = "> 10 years",
}

export enum RiskPercent {
  TenPercent = "10%",
  ThirtyPercen = "30%",
  AllIn = "all-in",
}

/**
 * Submission =================================================================
 */

export type SubmissionData = {
  id: string;
  name: string;
  status: SubmissionStatus;
  date: string;
  action: SubmissionAction;
};

export enum SubmissionStatus {
  Active = "Active",
  Inactive = "Inactive",
  Pending = "Pending",
}

export enum SubmissionAction {
  Approve = "Approve",
  Reject = "Reject",
  Waiting = "Waiting",
}

/**
 * User Submission =================================================================
 */

export type UserSubmission = {
  id: string;
  name: string;
  requestDate: string;
  confirmDate?: string;
  status: SubmissionAction;
  action: UserSubmissionAction;
};

export enum UserSubmissionAction {
  Cancel = "Canceled",
  Request = "Requested",
}
