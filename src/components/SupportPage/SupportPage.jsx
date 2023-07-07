import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function SupportPage() {
  const [support, setSupport] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
  };

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
    </div>
  );
}
