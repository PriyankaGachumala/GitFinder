import React from "react";
import PropTypes from "prop-types";

const User = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='user'
        className='round-img'
        style={{ width: "60px" }}
      ></img>
      <h2>{login}</h2>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          Get into profile
        </a>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
