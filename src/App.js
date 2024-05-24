import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [userId, setUserId] = useState();

  const onChange = (e) => {
setUserId(e.target.value);
  }
  const onSubmit = async () => {
    const requestBody = {
      data: userId
  };
const response = await axios.post('http://127.0.0.1:3005/signin', requestBody);
console.log(response);
localStorage.setItem('token', response.data);
  }
  return (
    <div className="App">
      <input type = "text" placeholder = "user id" onChange = {onChange} value = {userId}></input>
      <button onClick = {onSubmit}>Submit</button>
    </div>
  );
}

export default App;
