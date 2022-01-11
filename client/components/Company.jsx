import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate, generatePath } from 'react-router-dom';
import axios from 'axios';

function Company() {
  const { state } = useLocation();
  const currCompany = state.str;
  const [questionsList, setQuestionsList] = useState([]);
  useEffect(async () => {
    try {
      console.log(currCompany);
      //{data:[{"organization":"facebook"},{"organization":"testing"},{"organization":"codesmith"}]}
      const response = await axios.get(`/api/questions/${currCompany}`);
      console.log(response);

      // setOrgs(
      //   response.data
      //     .map((obj) => obj.organization)
      //     .map((str) => (
      //       <button
      //         onClick={() =>
      //           navigate(generatePath('/companies/:id', { id: str }), {
      //             state: { str },
      //           })
      //         }
      //       >
      //         {str}
      //       </button>
      //     ))
      // );
      // console.log(orgs, 'here');
    } catch (err) {
      console.log(err);
    }
  }, []);
  return <div>{currCompany}</div>;
}
export default Company;
