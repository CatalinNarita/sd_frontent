export interface IUser {
  id?: number;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
}

export interface IRole {
  id?: number;
  roleName?: string;
  user?: IUser;
}

export interface IProduct {
  id?: number;
  name?: string;
  category?: string;
  price?: number;
  productSpec: IProductSpec;
}

export interface IProductSpec {
  id?: number;
  monitorSpec?: IMonitorSpec;
  laptopSpec?: ILaptopSpec;
  smartphoneSpec?: ISmartphoneSpec;
}

export interface IMonitorSpec {
  id?: number;
  producer?: string;
  guarantee?: string;
  diagonal?: number;
  resolution?: string;
  colour?: string;
  aspectRatio?: string;
}

export interface ILaptopSpec {
  id?: number;
  producer?: string;
  guarantee?: string;
  processor?: string;
  ram?: number;
  videoCard?: string;
  hddCapacity?: number;
  diagonal?: number;
}

export interface ISmartphoneSpec {
  id?: number;
  producer?: string;
  guarantee?: string;
  colour?: string;
  screen?: string;
  processor?: string;
  resolution?: string;
  memory?: number;
}
