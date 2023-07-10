export function validateInput(score) {
  if (score < 1 || score > 5) {
    alert('Please enter a value between 1 and 5!');
    return false;
  }
  return true;
}