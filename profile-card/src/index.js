import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="card">
      <Avatar photo="./jonas.jpeg" name="Jonas Schmedtmann" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photo} alt={props.name} />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course. I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="lightgreen" />
      <Skill skill="Git and GitHub" emoji="👍" color="red" />
      <Skill skill="React" emoji="💪" color="skyblue" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
