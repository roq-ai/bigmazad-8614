import { BidInterface } from 'interfaces/bid';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AdInterface {
  id?: string;
  title: string;
  description?: string;
  image?: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  bid?: BidInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    bid?: number;
  };
}

export interface AdGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  organization_id?: string;
  user_id?: string;
}
