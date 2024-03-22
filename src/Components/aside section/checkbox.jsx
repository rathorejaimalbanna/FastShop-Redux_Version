import React from 'react';
import Form from 'react-bootstrap/Form';

// CheckBox component renders a checkbox option
function CheckBox(props) {
  return (
    <Form>
      <div key={`default-checkbox`} className="mb-3">
        {/* Render checkbox */}
        <Form.Check 
          type='checkbox'
          id={props.option}
          label={props.option}
          onChange={() => { props.handleChange(props.option) }}
        />
      </div>
    </Form>
  );
}

export default CheckBox;
