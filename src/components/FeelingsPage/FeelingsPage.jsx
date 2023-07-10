import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { validateInput } from "../helpers/inputValidation";

export function FeelingsPage() {
  const [feeling, setFeeling] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    if (validateInput(feeling)) {
      history.push(`${pageNum + 1}`);
      dispatch({ type: `NEXT_PAGE` });
      dispatch({ type: `ADD_FEELING`, payload: feeling });
    }
    return;
  };

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <input
        value={feeling}
        onChange={(e) => setFeeling(e.target.value)}
        type="number"
        placeholder="1-5"
      />
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
