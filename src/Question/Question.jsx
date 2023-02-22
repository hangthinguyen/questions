import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";

const Question = ({ text, answer, onClick, toggle, id }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg shadow-slate-300 gap-y-2">
      <div className="flex flex-row justify-between">
        <h4>{text}</h4>
        <button
          onClick={onClick}
          className="text-amber-600 transition duration-300 ease-out hover:rotate-90"
        >
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
        <hr className="decoration-violet-400 h-px width-10/12 p-1" />
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
