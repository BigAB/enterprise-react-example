import { Person } from './person';

export interface UserAccount {
  id: string | number;
  user: Person;
  emails?: string[];
}
