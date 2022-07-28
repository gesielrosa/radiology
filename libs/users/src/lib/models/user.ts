import {AuthRole} from '@lib/auth';

export interface User {
  id: string;
  institution_id: string;
  name: string;
  role: AuthRole;
  email: string;
  password?: string;
  created_at: string;
  deleted_at: string;
  updated_at: string;
}
