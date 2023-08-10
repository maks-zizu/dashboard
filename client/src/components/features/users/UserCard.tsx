import React from 'react';
import { User } from './type';

function UserCard({ user }: { user: User }): JSX.Element {
  return (
    <>
      <div>{user.name}</div>
      <img src={user.photo} alt="..." />
    </>
  );
}

export default UserCard;
