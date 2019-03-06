class TextArea extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div id={this.props.id} className="formula-display">
            {this.props.value}
        </div>
      );
    }
}