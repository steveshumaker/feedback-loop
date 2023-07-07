import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function ThanksPage() {
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const history = useHistory();

  const nextPage = () => {
    history.push(`/`);
    dispatch({ type: `RESET` });
  };

  return (
    <div>
      <h2>Thank you for your submission!</h2>
      <button onClick={nextPage}>Leave new feedback</button>
    </div>
  );
}
