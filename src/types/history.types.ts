export type TTabData = {
  title: string;
  value: string;
};

export type TDataProps = Pick<TTabData, 'title'>;

export interface TData extends TDataProps {
  icon: JSX.Element;
  category: string;
  historyData: TTransaction[];
}

export enum ECategory {
  CREDITCARD = 'credit-card',
  SUBSCRIPTIONS = 'subscriptions',
  FINANCING = 'financing',
  VEHICLES = 'vehicles',
  OTHERS = 'others',
}

export interface TTransaction extends TDataProps {
  date: string;
  type: string;
  price: string;
}
