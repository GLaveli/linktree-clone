import React from 'react';
import LinkItem from '../LinkItens';

function LinkList({ links }) {

  return (
    <div className="link-list">
      {links.map((url, index) => {
        return (
          <div key={index}>
            <LinkItem title={url.title} url={url.url} />
          </div>
        )
      }
      )}
    </div>
  );
}


export default LinkList;
