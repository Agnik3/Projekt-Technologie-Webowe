import React, { useState, useEffect } from 'react';

export const AddAuthor = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (event) => {
    if (name && surname) {
      onAdd(name, surname);
      setName('');
      setSurname('');
  };
  };
    return(
      <fieldset >
        <form onSubmit={onAdd}>
          <div className="xdd">
            <label htmlFor="name" className="xdd">Name: </label>
            <input 
              id="name" 
              name="name" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
    
          <div className="xdd">
            <label htmlFor="surname" className="xdd">Surname: </label>
            <input 
              id="surname" 
              surname="surname" 
              value={surname}
              onChange={(e) => setSurname(e.target.value)} 
            />
          </div>

          <button className="btn">Add</button>
        </form>
      </fieldset>
    );
};
