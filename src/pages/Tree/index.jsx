import React from 'react';
import { useParams } from 'react-router-dom';
import LinkList from '../../components/tree/LinkList';
import Profile from '../../components/tree/Profile';
import { useData } from '../../contexts/DataUserContext';
import './styles.css';


function Tree() {
  const data = useData();
  const { channel } = useParams();
  const userData = data.find(user => user.profile.name.toLowerCase() === channel.toLocaleLowerCase());

  if (!userData) {
    return <p>User not found!</p>
  }

  return (
    <div className='treeContainer'>
      <Profile name={userData.profile.name} imageUrl={userData.profile.imageUrl} />
      <LinkList links={userData.links} />
    </div>
  );
};

export default Tree;
