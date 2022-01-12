import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate, generatePath } from 'react-router-dom';
import axios from 'axios';
import Question from './Question.jsx';
import NavBar from './NavBar.jsx';

function Company() {
  const { state } = useLocation();
  const currCompany = state.str;
  const [questionsList, setQuestionsList] = useState([]);
  useEffect(async () => {
    try {
      console.log(currCompany);
      //{data:[{"organization":"facebook"},{"organization":"testing"},{"organization":"codesmith"}]}
      const response = await axios.get(`/api/questions/${currCompany}`);
      //console.log(response);
      //[{organization: "facebook", qdetails: "adding two numbers", qid: 2, qtitle: "sum of two numbers", qtype: "algo", qurl: "facebook.com",userid: 2}]
      setQuestionsList(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const questions = questionsList.map((obj) => <Question props={obj} />);
  console.log(questions[0]);
  //console.log(questions);
  return (
    <div>
      <NavBar />
      {questions}
    </div>
  );
}
export default Company;
