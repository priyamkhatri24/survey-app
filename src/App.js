import React, {useState, useEffect} from "react";
import classes from "./App.module.css";
import Container from "./components/Container/container.js";
import Header from "./components/Header/header";
import FrequentlyAsked from "./components/frequentlyAsked/frequentlyAsked";
import Questions from './components/questionCards/questionCard';
import Robo from "./components/robotIcon/robo";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions([
            'Can I redeam my FB before the orignal term?',
            'How do I pay my Credit card bill?',
            'How can I get my Account Statement?',
            'What is the tenure of Fixed Deposit?'
        ])
    }, [])
    const questionsMarkup = questions.map(ques => <Questions question={ques} key={ques+Date.now()}/>)

  return (
    <div className={classes.app}>
    <Container type='outer'>
      <Header />
      <Robo />
      <Container type='inner'> 
        <FrequentlyAsked />
        {questionsMarkup}
        <Footer />
      </Container>
    </Container>
    </div>
  );
};

export default App;
