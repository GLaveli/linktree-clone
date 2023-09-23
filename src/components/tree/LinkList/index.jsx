import React from 'react';
import LinkItem from '../LinkItens';

function LinkList({ links }) {

  return (
    <div className="link-list">
      {links.map((url, index) => {
        return (
          <>
            <LinkItem title={url.title} url={url.url} key={index} />
          </>
        )
      })}
    </div>
  );
}


export default LinkList;
