import { FriendRequestEntity, UserEntity, UserJwt } from '@app/shared';
import { NewUserDTO } from '../dtos/new-user.dto';
import { ExistingUserDTO } from '../dtos/existing-user.dto';

export interface AuthServiceInterface {
  getUsers(): Promise<UserEntity[]>;
  findByEmail(email: string): Promise<UserEntity>;
  hashPassword(password: string): Promise<string>;
  register(newUser: Readonly<NewUserDTO>): Promise<UserEntity>;
  doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean>;
  validateUser(email: string, password: string): Promise<UserEntity>;
  login(exisingUser: Readonly<ExistingUserDTO>);
  verifyJwt(jwt: string): Promise<{ user: UserEntity; exp: number }>;
  findById(id: number): Promise<UserEntity>;
  getUserFromHeader(jwt: string): Promise<UserJwt>;
  addFriend(userId: number, friendId: number): Promise<FriendRequestEntity>;
  getFriends(userId: number): Promise<FriendRequestEntity[]>;
}
