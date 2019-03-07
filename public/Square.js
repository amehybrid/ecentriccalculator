class Square extends React.Component {
    render() {
      let className = 'square';
      if (this.props.addClass) {
        className += ' ' + this.props.addClass;
      }
      return (
        <button
          id={this.props.id} 
          className={className}
          onClick={() => this.props.onClick(this.props.value)}>
          {this.props.value}
        </button>
      );
    }
  }