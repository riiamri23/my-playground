import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    'doing somthing productive',
    'let\'s do something',
  ]);
  const [input, setInput] = useState('');

  const addTodo = (e)=>{
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="container mx-auto rounded-xl shadow border p-8 m-10">
      <form>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">What Are you doing? </label>
            <div className="mt-2">
              <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2" value={input} onChange={e => setInput(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={addTodo}>Save</button>

        </div>
      </form>

      <div className="mt-10 space-y-10">
        <fieldset>
          {todos.length > 0 && todos.map((todo, index)=> <Todo todo={todo} key={index} index={index} />)}
        </fieldset>
      </div>
    </div>
  );
}

export default App;
