import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, login } from './Actions'
import { useState } from 'react';
import { getData } from './user';

function App() {

  // react-redux
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  // states
  const [userData, setUserData] = useState('');

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={() => dispatch(increment())} style={{width: '1.8em', margin:'10px'}}>+</button>
      <button onClick={() => dispatch(decrement())} style={{width: '1.8em', margin:'10px'}}>-</button>
      <br />
      {
        !isLogged ?
          <button onClick={async () => {
            dispatch(login())
            const user = await getData();
            setUserData(user);
          }} style={{ margin: '20px' }}>{isLogged ? 'Logout' : 'Login'}</button>
          :
          <button onClick={async () => {
            dispatch(login())
            setUserData('');
          }} style={{ margin: '20px' }}>Logout</button>
      }
      {
        isLogged && userData !== '' && <>
          <p>You're Logged In</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <pre style={{ textAlign: 'left' }}>{JSON.stringify(userData, null, 2)}</pre>
          </div>
        </>
      }
    </div>
  );
}

export default App;
