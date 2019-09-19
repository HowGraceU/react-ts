import React from 'react';
import PropTypes from 'prop-types';

type PropsProps = {
  /**
   * text 注释
   */
  text?: string
  /**
   * className 注释
   */
  className: string
}

const Props: React.SFC<PropsProps> = (props) => {
  const { text, className } = props;

  return (
    <div className={className}>{text}</div>
  );
};


Props.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string.isRequired,
};

Props.defaultProps = {
  text: '',
};

export default Props;
