import React from "react";
import User from "./User";

const Users = ({ users, loading }) => {
  return (
    <div className='grid-3'>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
