import { useHistory } from "react-router-dom";

export function FeelingsPage() {
  const history = useHistory();
  const nextPage = () => {
    history.push("/understanding");
  };
  return (
    <div>
      <h2>How are you feeling today?</h2>
      <input type="number"  placeholder="0"/>
      <button onClick={nextPage}>Next</button>
    </div>);
}
