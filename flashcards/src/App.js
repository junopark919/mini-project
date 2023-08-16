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
      <FlashCards />
    </div>
  );
}

// function FlashCards() {
//   return (
//     <div className="flashcards">
//       {questions.map((question) => (
//         <Card
//           key={question.id}
//           question={question.question}
//           answer={question.answer}
//         />
//       ))}
//     </div>
//   );
// }

// function Card({ question, answer }) {
//   const [select, setSelect] = useState(false);

//   function clickHandler() {
//     setSelect((s) => (!s ? true : false));
//   }

//   return (
//     <div onClick={clickHandler} className={select ? 'selected' : ''}>
//       <p>{!select ? question : answer}</p>
//     </div>
//   );
// }

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={questions.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? 'selected' : ''}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

// onClick={() => handleClick(question.id)}
// to call the function only when this event happens
