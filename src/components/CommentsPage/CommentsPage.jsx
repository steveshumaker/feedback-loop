import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function CommentsPage() {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
    dispatch({ type: `ADD_COMMENTS`, payload: comments });

  };

  return (
    <div>
      <h2>Please enter your comments below:</h2>
      <input
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        type="text"
      />
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
