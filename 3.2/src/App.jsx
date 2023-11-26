import "./App.css";

function App() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!"
  const joined = data.join(" ")
  const sum = number1 + number2

  return (
    
    <>
      <div>{<h1>{joined}</h1>}</div>
      <div>{`${number1} + ${number2} = ${sum}`}</div>
      <div>{`The string’s length is : ${string.length}`}</div>
    </>
  )
}

export default App;
