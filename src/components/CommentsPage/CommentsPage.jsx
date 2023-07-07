import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function CommentsPage() {
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
  };

  return (
    <div>
      <h2>Please enter your comments below:</h2>
      <input type="text" />
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
