import React from 'react';

class SelectBox extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='select'>
        <label>select box
        <select name="select-closed">
          <option value="hide">please select an option...</option>
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
          <option>option 4</option>
          <option>option 5</option>
        </select>
        </label>

        <label>select box - open
        <select name="select-open">
          <option>please select an option...</option>
        </select>
        <div className="option">option 1</div>
        <div className="option-even">option 2</div>
        <div className="option">option 3</div>
        <div className="option-even">option 4</div>
        <div className="option">option 5</div>
        </label>
      </div>
    );
  }
}

export default SelectBox;