import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
const lakeList = [
  'Lake 1',
  'Lake 2',
  'Lake 3',
  'blah'
];

function App({ lakes }) {
  return(
    <ul>
      {lakes.map(
        lake => <li>{lake}</li>
      )}
    </ul>
  )
}

ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById('root')
);

function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState('Alex');
  const [status, setStatus] = useState('abc');
  return (
    <>
      <div>
        <h1>{year}</h1>
        <button 
          onClick={() => setYear(year + 1)}
        >
          New Year!
        </button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button 
          onClick={() => setManager('Rachel')}
        >
          New Manager
        </button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button 
          onClick={() => setStatus('Open')}
        >
          Open
        </button>
        <button 
          onClick={() => setStatus('Back in 5')}
        >
          Break
        </button>
        <button 
          onClick={() => setStatus('Closed')}
        >
          Closed
        </button>
      </div>
    </>
  );
}

function Checkbox() {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <>
      <input 
        type='checkbox' 
        value={checked} 
        onChange={() => 
          setChecked(checked => !checked)
        } 
      />
      {checked ? 'checked' : 'not checked'}
    </>
  );
}

function App() {
  const [val, setVal] = useState('');
  const [val2, setVal2] = useState('');

  useEffect(() => {
    console.log(`field 1: ${val}`)
  }, [val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`)
  }, [val2]);

  return (
    <>
      <label>
        Favorite Phrase:
        <input 
          value={val} 
          onChange={e => setVal(e.target.value)}
        />
      </label>
      <br />
      <label>
        Second Favorite Phrase:
        <input 
          value={val2} 
          onChange={e => setVal2(e.target.value)}
        />
      </label>
    </>
  );
}
*/

function GitHubUser({ login }) {
  const [data, setData] = useState(null)
  useEffect(() =>  {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);

  if(data) {
    return (
      <div>{JSON.stringify(data)}</div>
    );
  }
  return null;
}

function App() {
  return <GitHubUser login='fengcheng0126' />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

