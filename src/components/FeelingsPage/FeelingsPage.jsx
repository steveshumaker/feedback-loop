import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function FeelingsPage() {
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
  };

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <input type="number" placeholder="1-5" />
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
