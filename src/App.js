import React, { useState, useEffect }  from 'react';
import './App.css';

/*
function SecretComponent() {
  return <h1>
    Secret info for authorized users only
  </h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component</h1>;
  
}

function App(props) {
  return (
    <>
    {
      props.authorized ? 
      <SecretComponent /> : 
      <RegularComponent />
    }
    </>
  );
}
*/

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    );
  }

  return <div>No User Available</div>;

}

export default App;
