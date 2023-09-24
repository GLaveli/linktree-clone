import React, { useState, useEffect } from 'react';
import { useData } from '../../../contexts/DataUserContext';

const ProfileSearch = () => {
  const userInfoContext = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    if (!userInfoContext || userInfoContext == []) {
      return;
    }

    const results = userInfoContext.filter(profile =>
      profile.profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, userInfoContext]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>
      <ul>
        {filteredData.map((item, index) => (
          <div key={index}>
            < a href={`/u/${item.profile.name}`}>
              <li key={index}>{item.profile.name}</li>
            </a>
          </div>

        ))
        }
      </ul >
    </div >
  );
}

export default ProfileSearch;
