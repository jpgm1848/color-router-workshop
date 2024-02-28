function RandomColor() {
  let randomNum = Math.floor(Math.random() * 2);

  if (randomNum === 0) {
    return (
      <>
        <div className="red">
          <h1>Random Red</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="blue">
          <h1>Random Blue</h1>
        </div>
      </>
    );
  }
}
export default RandomColor;
