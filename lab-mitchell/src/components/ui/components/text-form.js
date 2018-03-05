import React from 'react';

class TextForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='text-input'>
        <label>text input
        <input type="text" name="text-input" placeholder="placeholder text"/>
        </label>

        <label >text input w/ validation error
        <input className="invalid-input" type="text" name="text-input-validation" placeholder="placeholder text" required/>
        <div className="invalid-warn">please enter a valid username</div>
        </label>
      </div>
    );
  }
}

export default TextForm;