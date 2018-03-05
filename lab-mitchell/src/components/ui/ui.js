import '../../styles/_reset.scss';
import '../../styles/_ui.scss';

import React from 'react';
import ReactDom from 'react-dom';
import SelectBox from '../ui/components/select-box';
import TextForm from '../ui/components/text-form';

class UIChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({title: ''});
  }

  render() {
    return(
      <div className='ui'>
        <TextForm />
        <SelectBox />
        {/* <CheckBox /> */}
        {/* <Radio /> */}
        {/* <Submit /> */}
      </div>
    );
  }
}

export default UIChallenge;