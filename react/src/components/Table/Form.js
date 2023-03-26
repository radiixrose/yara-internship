import React from 'react';

function Form({ formValues, handleInputChange, handleSaveClick, setShowForm }) {
  return (
    <div className="ani-form">
      <h2>Form</h2>
      <div className="inputs">
        <div className="input">
          <label>Input - Column 1</label>
          <input
            name="column1"
            onChange={handleInputChange}
            value={formValues.column1}
          />
        </div>
        <div className="input">
          <label>Input - Column 2</label>
          <input
            name="column2"
            onChange={handleInputChange}
            value={formValues.column2}
          />
        </div>
        <div className="input">
          <label>Input - Column 3</label>
          <input
            name="column3"
            onChange={handleInputChange}
            value={formValues.column3}
          />
        </div>
      </div>
      <div className="buttons">
        <div className="button">
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
        <div className="button">
          <button onClick={handleSaveClick}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
