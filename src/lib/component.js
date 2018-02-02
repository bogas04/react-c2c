import React from 'react';
import PropTypes from 'prop-types';
import copy from './utils/c2c';


export class C2C extends React.PureComponent {
  state = {
    copied: false
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onCopy: PropTypes.func,
    options: PropTypes.shape({
      debug: PropTypes.bool
    })
  };


  static defaultProps = {
    onCopy: undefined,
    options: undefined
  };


  onClick = event => {
    const {
      text,
      options
    } = this.props;

    const copied = copy(text, options);

    this.setState({
      copied
    });
  };


  render() {
    const {
      children,
      render,
      ...props
    } = this.props;
    
    const {
      copied
    } = this.state;
    
    const renderProp = children || render;
    
    return (typeof renderProp === 'function')
      ? renderProp({ copied, handleClick: this.onClick })
      : null;
    
  }
}
