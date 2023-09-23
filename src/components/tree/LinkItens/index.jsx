import React from 'react';
import './styles.css';

function LinkItem({ title, url }) {
  return (
    <a href={url} className="linkItem">
      {title}
    </a>
  );
}

export default LinkItem;
