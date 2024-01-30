import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar name="Profile Picture" photoName="Profile pic" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Profile pic"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Cesar Cervantes</h1>
      <p>
        Former General Motors Software Developer. Experienced in front-end web
        development and web applications, backend microservices with RESTful
        APIs. When I'm not enjoy time with my family or playing games. I'm
        always enhancing my skills by following tutorials and/or create projects
        with current or new technology.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Java" emoji="💪" color="purple" />
      <Skill skill="RESTful APIs" emoji="💪" color="green" />
      <Skill skill="Python" emoji="💪" color="skyBlue" />
      <Skill skill="TensorFlow" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
