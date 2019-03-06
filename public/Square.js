class Square extends React.Component {
    render() {
      return (
        <button
          id={this.props.id} 
          className="square"
          onClick={() => this.props.onClick(this.props.value)}>
          {this.props.value}
        </button>
      );
    }
  }