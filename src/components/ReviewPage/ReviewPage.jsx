import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function ReviewPage() {
  const dispatch = useDispatch();
  const pageNum = useSelector((store) => store.pages);
  const review = useSelector((store) => store.submission)
  const history = useHistory();

  const nextPage = () => {
    history.push(`${pageNum + 1}`);
    dispatch({ type: `NEXT_PAGE` });
  };

  return (
    <div>
      <h2>Please review your submission:</h2>
      <div>
        <ul>
          <li>Feeling: {review.feeling}</li>
          <li>Understanding: {review.understanding}</li>
          <li>Support: {review.support}</li>
          <li>Comments: {review.comments}</li>
        </ul>
      </div>
      <button onClick={nextPage}>Submit</button>
    </div>
  );
}
