import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";

const Question = ({ text, answer, onClick, toggle, id }) => {
  return (
    <div>
      <div>
        <h4>{text}</h4>
        <button onClick={onClick}>
          {!toggle[id] ? (
            <FontAwesomeIcon icon={faSquarePlus} />
          ) : (
            <FontAwesomeIcon icon={faSquareMinus} />
          )}
        </button>
      </div>

      <div
        style={{
          display: !toggle[id] ? "none" : "block",
        }}
      >
        <div className="underline"></div>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
