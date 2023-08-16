import { useState } from 'react';
import './styles.css';

const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2002,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
  },
];

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Card
          key={question.id}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
}

function Card({ question, answer }) {
  const [select, setSelect] = useState(false);

  function clickHandler() {
    setSelect((s) => (!s ? true : false));
  }

  return (
    <div onClick={clickHandler} className={select ? 'selected' : ''}>
      {!select ? question : answer}
    </div>
  );
}
