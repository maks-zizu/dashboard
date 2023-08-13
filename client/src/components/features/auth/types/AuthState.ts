import { User } from '../../users/type';

export type AuthState = {
  user: User | undefined;
  error: string | undefined;
  pending: boolean;
};
