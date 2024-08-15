import './index.css';
import React from 'react';
import questions from './questions'
import Result from './components/Result'
import Game from './components/Game'


function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1)
    if(index === question.correct){
      setCorrect(correct + 1)
    }
  }
  
  return (
    <div className='App'>
      {
        step !== questions.length ? (
          <Game  step={step} question={question} onClickVariant={onClickVariant}/>
        ) : (
          <Result  correct={correct}/>
        )
      }
    </div>
  )
}

export default App;
