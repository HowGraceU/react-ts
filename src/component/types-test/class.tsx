import * as React from 'react';

import DefProps from './DefProps';

interface State {
  itemText: string
}

export default class TodoInput extends React.Component<DefProps, State> {
  static defaultProps = new DefProps();

  private divRef = React.createRef<HTMLDivElement>();

  constructor(props: DefProps) {
    super(props);
    this.state = {
      itemText: '123',
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log(this.props);
  }

  private handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const text = e.target.value;

    this.setState({
      itemText: text,
    });
    this.divRef.current.innerText = `refText: ${text}`;
  }


  render() {
    const { itemText } = this.state;
    const { textObj } = this.props;

    return (
      <>
        <div>{textObj.text}</div>
        <div>{itemText}</div>
        <input type="text" onChange={this.handleChange} />
        <div ref={this.divRef} />
      </>
    );
  }
}
