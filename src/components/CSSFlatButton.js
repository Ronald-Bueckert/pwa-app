/*import './CSSFlatButton.css';*/

const CSSFlatButton = ({ text }) => {
  return (
    <div className="App">
      <label>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
      </label>
    </div>
  );
}

export default CSSFlatButton;
