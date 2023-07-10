import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../helpers/inputValidation";

export function UnderstandingPage() {
  const [understanding, setUnderstanding] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    if (validateInput(understanding)) {
      history.push(`${pageNum + 1}`);
      dispatch({ type: `NEXT_PAGE` });
      dispatch({ type: `ADD_UNDERSTANDING`, payload: understanding });
    }
    return;
  };

  const previousPage = () => {
    history.push(`/`);
    dispatch({ type: `PREVIOUS_PAGE` });
  }

  return (
    <div>
      <h2>How well did you understand today's material?</h2>
      <input
        value={understanding}
        onChange={(e) => setUnderstanding(e.target.value)}
        type="number"
        placeholder="1-5"
      />
      <button onClick={nextPage}>Next</button>
      <button onClick={previousPage}>Back</button>
    </div>
  );
}
