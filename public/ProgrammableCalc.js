class ProgrammableCalc extends React.Component {
    renderTextArea(i, id) {
        return <TextArea value={i} id={id}/>;
    }

  renderSquare(i, id) {
    return <Square value={i} id={id} onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    
    return (
      <div>
        <div className="standard-calc-row">
          {this.renderTextArea(this.props.display1, 'display_1')}
        </div>
        <div className="standard-calc-row">
          {this.renderTextArea(this.props.display2, 'display_2')}
        </div>
        <div className="standard-calc-row">
          {this.renderSquare('std','btn_std')}
          {this.renderSquare('sci', 'btn_sci')}
          {this.renderSquare('stat', 'btn_stat')}
          {this.renderSquare('prog', 'btn_prog')}
        </div>
        <div className="standard-calc-row">
          {this.renderSquare('^','btn_exp')}
          {this.renderSquare('(', 'btn_open_paren')}
          {this.renderSquare(')', 'btn_close_paren')}
          {this.renderSquare('/', 'btn_divide')}
        </div>
        <div className="standard-calc-row">
          {this.renderSquare(7, 'btn_7')}
          {this.renderSquare(8, 'btn_8')}
          {this.renderSquare(9, 'btn_9')}
          {this.renderSquare('*', 'btn_multiply')}
        </div>
        <div className="standard-calc-row">
          {this.renderSquare(4, 'btn_4')}
          {this.renderSquare(5, 'btn_5')}
          {this.renderSquare(6, 'btn_6')}
          {this.renderSquare('-', 'btn_subtract')}
        </div>
        <div className="standard-calc-row">
          {this.renderSquare(1, 'btn_1')}
          {this.renderSquare(2, 'btn_2')}
          {this.renderSquare(3, 'btn_3')}
          {this.renderSquare('+', 'btn_add')}
        </div>
        <div className="standard-calc-row">
          {this.renderSquare('C', 'btn_C')}
          {this.renderSquare(0, 'btn_0')}
          {this.renderSquare('.', 'btn_decimal')}
          {this.renderSquare('=', 'btn_equal')}
        </div>
      </div>
    );
  }
}