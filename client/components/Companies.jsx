import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, generatePath } from 'react-router-dom';

function Companies(props) {
  const { state } = useLocation();
  const [orgs, setOrgs] = useState([]);
  const [orgsList, setOrgsList] = useState([]);
  const navigate = useNavigate();
  useEffect(async () => {
    //[{"organization":"facebook"},{"organization":"testing"},{"organization":"codesmith"}]
    try {
      const response = await axios.get('/api/questions/org');
      //array of orgs eg ['facebook', 'testing', 'codesmith']
      setOrgs(
        response.data
          .map((obj) => obj.organization)
          .map((str) => (
            <button
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

  return <div>{orgs}</div>;
}

export default Companies;
