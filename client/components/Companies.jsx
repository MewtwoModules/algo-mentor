import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Companies(props) {
  const { state } = useLocation();
  const [orgs, setOrgs] = useState([]);

  useEffect(async () => {
    //[{"organization":"facebook"},{"organization":"testing"},{"organization":"codesmith"}]
    try {
      const response = await axios.get('/api/questions/org');
      //array of orgs eg ['facebook', 'testing', 'codesmith']
      console.log(response.data);
      setOrgs(response.data.map((obj) => obj.organization));
      console.log(orgs);
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(orgs);
  const orgList = orgs.map((str) => <p>{str}</p>);
  return <div>{orgList}</div>;
}

export default Companies;
