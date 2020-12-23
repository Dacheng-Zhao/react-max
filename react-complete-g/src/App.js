import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersons] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Random', age: 29 },
      { name: 'Tom', age: 25 }
    ]
  })

  const switchNameHandler = name => {
    console.log(name);
    setPersons({
      persons: [
        { name: 'Max!!!', age: 30 },
        { name: 'Random', age: 29 },
        { name: 'Tom', age: 25 }
      ]
    });
  }

  const nameChangeHandler = event => {
    setPersons({
      persons: [
        { name: 'Max', age: 30 },
        { name: event.target.value, age: 29 },
        { name: 'Tom', age: 25 }
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, react app!</h1>
      <button
        style={style}
        onClick={switchNameHandler.bind(this, 'abc')}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        changed={nameChangeHandler}
        click={switchNameHandler.bind(this, '123')} />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={switchNameHandler}
        changed={nameChangeHandler}>
        Hobby is studying
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
        changed={nameChangeHandler} />
    </div>
  );
}

export default App;
