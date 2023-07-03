import { AdInterface } from 'interfaces/ad';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BidInterface {
  id?: string;
  amount: number;
  ad_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  ad?: AdInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BidGetQueryInterface extends GetQueryInterface {
  id?: string;
  ad_id?: string;
  user_id?: string;
}
