import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Popup from "reactjs-popup";
import QuestionsPopup from "./QuestionsPopUp";// Import the QuestionsPopup component

function HomePage() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage the popup visibility

  const adminSignUp = (e) => {
    e.preventDefault();
    navigate("/adminSignUp");
  };
  const adminLogin = (e) => {
    e.preventDefault();
    navigate("/adminLogin");
  };

  const userSignUp = (e) => {
    e.preventDefault();
    navigate("/userSignIn");
  };
  const UserLogin = (e) => {
    e.preventDefault();
    navigate("/userLogin");
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="mcqcontainer">
        <img
          className="mcqlogo"
          src="https://media.istockphoto.com/id/1616906708/vector/vector-speech-bubble-with-quiz-time-words-trendy-text-balloon-with-geometric-grapic-shape.jpg?s=612x612&w=0&k=20&c=3-qsji8Y5QSuShaMi6cqONlVZ3womknA5CiJ4PCeZEI="
        />
        <div className="popupflexing">
          <div>
            <Popup
              className="popupbgcolour"
              trigger={
                <button type="button" className="mcqbutton">
                  SignUp
                </button>
              }
              position="bottom right"
            >
              <div className="popupcontainer">
                <button className="signupbutton" onClick={(e) => userSignUp(e)}>
                  UserSignUp
                </button>
                <button
                  className="signupbutton"
                  onClick={(e) => adminSignUp(e)}
                >
                  AdminSignUp
                </button>
              </div>
            </Popup>
          </div>
          <div>
            <Popup
              trigger={
                <button type="button" className="mcqbutton">
                  LogIn
                </button>
              }
              position="bottom right"
            >
              <div className="popupcontainer">
                <button className="signupbutton" onClick={(e) => UserLogin(e)}>
                  UserLogIn
                </button>
                <button className="signupbutton" onClick={(e) => adminLogin(e)}>
                  AdminLogIn
                </button>
              </div>
            </Popup>
          </div>
        </div>
      </div> 
      <div className="mcqcontainer1">
        <div className="headingContainer">
          <h1 className="quizHeading">Greetings, Welcome to Quiz Time!</h1>
          <h4 className="para">Test yourself right here by taking a quick Quiz</h4>
          <p className="demo-para">click below for the sample test</p>
          <button className="mcqbutton1" onClick={openPopup}>
            Demo Test
          </button>
        </div>
        <div className="mcqimagecontainer">
          <img
            className="mcqimage"
            src="https://hips.hearstapps.com/hmg-prod/images/quiz-questions-answers-1669651278.jpg"
            style={{ width: "600px", borderRadius:"10px"}}
          />
        </div>
      </div>
      <div className="mcqcontainer2"></div>

      {/* Add the QuestionsPopup component here */}
      <QuestionsPopup open={isPopupOpen} onClose={closePopup} />
    </>
  );
}

export default HomePage;