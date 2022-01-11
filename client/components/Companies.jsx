import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Companies(props) {
  const { state } = useLocation();
  const [orgs, setOrgs] = useState('');

  useEffect(() => {
    //[{"organization":"facebook"},{"organization":"testing"},{"organization":"codesmith"}]
    try {
      const response = await axios.get('/api/questions/org');
      //array of orgs eg ['facebook', 'testing', 'codesmith']
      setOrgs(response.map((obj) => obj[organization]));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <div></div>;
}

export default Companies;
