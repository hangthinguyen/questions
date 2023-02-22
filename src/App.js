import Question from "./Question/Question";
import "./App.css";
import { useCallback, useState } from "react";

const questions = [
  {
    id: 1,
    text: "Do you accept all major credit cards?",
    answer:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.",
  },
  {
    id: 2,
    text: "Do you support local farmers?",
    answer:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.",
  },
  {
    id: 3,
    text: "Do you use organic ingredients?",
    answer:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.",
  },
];

function App() {
  const [toggle, setToggle] = useState({});

  const handleToggle = useCallback(
    (Id) => {
      setToggle({
        [Id]: !toggle[Id],
      });
    },
    [toggle]
  );

  return (
    <div className="App">
      <h2>General Questions</h2>
      <div className="questions-container">
        {questions.map((question) => (
          <Question
            id={question.id}
            key={question.id}
            text={question.text}
            answer={question.answer}
            onClick={() => handleToggle(question.id)}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
