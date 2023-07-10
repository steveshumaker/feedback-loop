import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../helpers/inputValidation";

export function SupportPage() {
  const [support, setSupport] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    if (validateInput(support)) {
      history.push(`${pageNum + 1}`);
      dispatch({ type: `NEXT_PAGE` });
      dispatch({ type: `ADD_SUPPORT`, payload: support });
    }
    return;
  };

  const previousPage = () => {
    history.push(`${pageNum - 1}`);
    dispatch({ type: `PREVIOUS_PAGE` });
  }

  return (
    <div>
      <h2>How supported do you feel today?</h2>
      <input
        value={support}
        onChange={(e) => setSupport(e.target.value)}
        type="number"
        placeholder="1-5"
      />
      <button onClick={nextPage}>Next</button>
      <button onClick={previousPage}>Back</button>
    </div>
  );
}
