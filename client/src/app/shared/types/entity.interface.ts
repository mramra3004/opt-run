import {Action, MessageStatus, PaymentGateway, TemplateLevelType, TemplateStatus, TransactionStatus} from './enum';

export interface Entity {
  id: string;
  createdDate: Date;
  lastUpdatedDate: Date;
}

export interface QueryResult<T> {
  items: T[];
  count: number;
}

export interface ResultModel<T>{
  data: T;
  errorMessage: string;
  isError: boolean;
}

export interface Result<T>{
  value: ResultModel<T>;
  statusCode: string;
  contentType: string;
}

export interface TemplateKey extends Entity {
  code: string;
}

export interface Template extends Entity {
  name: string;
  content: string;
  status: TemplateStatus;
  templateTypeId: number;
  brandName: string;
  htmlContent: string;
  templateId: string;
  oaId: string;
  oaName: string;
}
export interface Customer extends Entity {
  name: string;
  userName: string;
  address: string;
  phoneNumber: string;
  email: string;
  vip: boolean;
  status: number;
  walletDto: Wallet;
  clientId: string;
  clientSecret: string;
  companyName: string;
}

export interface Wallet extends Entity {
  totalAmount: number;
  subTotalAmount: number;
  totalAmountOfZalo: number;
  totalAmountOfSms: number;
}

export interface Price extends Entity {
  description: string;
  gaponePrice: number;
  sellingPrice: number;
  vat: number;
  isActive: boolean;
  templateLevelType: TemplateLevelType;
}

export interface BrandSms extends Entity {
  brandSmsCode: string;
  status: number;
  companyName: string;
}

export interface CashFund extends Entity {
  name: string;
  totalAmount: number;
}

export interface OrderHistory extends Entity{
  requestId: string;
  numberPhone: string;
  message: string;
  webType: WebType;
  status: OrderStatus;
  username: string;
  otpCode: string;
}

export interface Transaction extends Entity{
  totalAmount: number;
  note: string;
  errorMessage: string;
  action: Action;
  bankAccount: string;
  completedDate: Date;
  response: string;
  username: string;
  paymentGateway: PaymentGateway;
  status: TransactionStatus;
}

export interface CurrentUser{
  id: string;
  email: string;
  balance: number;
  totalAmountUsed: number;
  deposit: number;
  discount: number;
  clientSecret: string;
}

export interface Report{
  totalBalance: number;
  totalRechargeToday: number;
  totalRecharge: number;
  totalRequest: number;
  totalRequestSuccess: number;
  totalRequestError: number;
}

export enum WebType {
  RunOtp,
  OtpTextNow
}

export enum OrderStatus {
  Created,
  Processing,
  Success,
  Error,
}

// export interface Transaction extends Entity {
//   totalAmount: number;
//   note: string;
//   errorMessage: string;
//   bankAccount: string;
//   completedDate: Date;
//   response: string;
//   customerId: string;
//   customer: Customer;
//   status: TransactionStatus;
//   paymentGateway: PaymentGateway;
// }

export interface SubscriptionPlan extends Entity {
  name: string;
  description: string;
  price: number;
}

export interface Subscription extends Entity {
  subscriptionPlanId: string;
  customerId: string;
}

export interface Message extends Entity {
  content: string;
  customerId: string;
  channel: string;
  from: string;
  to: string;
  messageTypeId: number;
  messageStatus: MessageStatus;
  response: MessageResponse;
}

export interface MessageResponse {
  sentStatus: number;
  sentTime: Date;
  receivedTime: Date;
  errorStatus: number;
  errorMessage: string;
}

export enum UserStatus{
  Active,
  InActive
}

export interface UserDto extends Entity{
  email: string;
  username: string;
  balance: number;
  totalAmountUsed: number;
  deposit: number;
  discount: number;
  totalRequest: number;
  totalSuccess: number;
  totalFailed: number;
  clientSecret: string;
  status: UserStatus;
}


export interface WebConfiguration extends Entity{
  apiSecret: string;
  url: string;
  webName: string;
  endpoint: string;
  webType: WebType;
  selected: boolean;
}
