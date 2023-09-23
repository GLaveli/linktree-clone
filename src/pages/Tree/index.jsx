import React from 'react';
import { useParams } from 'react-router-dom';
import LinkList from '../../components/tree/LinkList';
import Profile from '../../components/tree/Profile';
import data from '../../database/mockup-db.json';
import './styles.css';


function Tree() {
  const { channel } = useParams();
  const userData = data.find(user => user.profile.name.toLowerCase() === channel.toLocaleLowerCase());

  if (!userData) {
    return <h1>User not found!</h1>
  }

  return (
    <div className='treeContainer'>
      <Profile name={userData.profile.name} imageUrl={userData.profile.imageUrl} />
      <LinkList links={userData.links} />
    </div>
  );
};

export default Tree;
