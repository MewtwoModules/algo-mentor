import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, generatePath } from 'react-router-dom';
import NavBar from './NavBar.jsx';

function Companies(props) {
  const { state } = useLocation();
  const [orgs, setOrgs] = useState([]);
  const [orgsList, setOrgsList] = useState([]);
  const navigate = useNavigate();
  useEffect(async () => {
    try {
      //{data:[{"organization":"facebook"},{"organization":"testing"},{"organization":"codesmith"}]}
      const response = await axios.get('/api/questions/org');
      //array of orgs eg ['facebook', 'testing', 'codesmith']
      setOrgs(
        response.data
          .map((obj) => obj.organization)
          .map((str) => (
            <button
              key={str}
              onClick={() =>
                navigate(generatePath('/companies/:id', { id: str }), {
                  state: { str },
                })
              }
            >
              {str}
            </button>
          ))
      );
      console.log(orgs, 'here');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <NavBar />
      {orgs}
    </div>
  );
}

export default Companies;
