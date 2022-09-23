// import logo from './logo.svg';
// import './App.css';
import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: red;
  color: #fff;
  font-size: 2rem;
`;

const SecondButton = styled.button`
  background: #0000ff;
  color: #fff;
  font-size: 3rem;
`;
function App() {
  return (
    <div>
      <SecondButton>Click Me</SecondButton>
      <Button>Click Me</Button>
      <Landing />
    </div>
  );
}

export default App;
