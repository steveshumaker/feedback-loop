import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function ReviewPage() {
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`/`);
    dispatch({ type: `RESET` });
  };

  return (
    <div>
      <h2>Please review your submission:</h2>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
