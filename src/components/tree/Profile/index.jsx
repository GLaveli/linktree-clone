import React from 'react';
import './styles.css'

function Profile({ name, imageUrl }) {
  return (
    <div className="profile-container">
      <img src={imageUrl} alt={name} className="profile-image" />
      <h2>{name}</h2>
    </div>
  );
}
export default Profile;
