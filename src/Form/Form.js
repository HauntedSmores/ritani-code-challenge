import React, { useState } from 'react';
import './Form.css';

function Form({ setUser, setLoading, fetchUser }) {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetchUser(query)
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        onInput={e => setQuery(e.target.value)}/>
    </form>
  );
}

export default Form;
