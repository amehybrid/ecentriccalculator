class ScientificCalc extends React.Component {
    renderTextArea(i, id) {
        return <TextArea value={i} id={id}/>;
    }

  renderSquare(i, id) {
    return <Square value={i} id={id} onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    
    return (
      <div>
        <div className="clearfix">
          {this.renderTextArea(this.props.display1, 'display_1')}
        </div>
        <div className="clearfix">
          {this.renderTextArea(this.props.display2, 'display_2')}
        </div>
        <div className="clearfix">
          {this.renderSquare('std','btn_std')}
          {this.renderSquare('sci', 'btn_sci')}
          {this.renderSquare('stat', 'btn_stat')}
          {this.renderSquare('prog', 'btn_prog')}
        </div>
        <div className="clearfix">
          {this.renderSquare('sin','btn_sin')}
          {this.renderSquare('cos', 'btn_cos')}
          {this.renderSquare('tan', 'btn_tan')}
          {this.renderSquare('log', 'btn_log')}
        </div>
        <div className="clearfix">
          {this.renderSquare('csc','btn_csc')}
          {this.renderSquare('sec', 'btn_sec')}
          {this.renderSquare('cot', 'btn_cot')}
          {this.renderSquare('10^x', 'btn_10tox')}
        </div>
        <div className="clearfix">
          {this.renderSquare('integ','btn_integ')}
          {this.renderSquare('dv', 'btn_dv')}
          {this.renderSquare('sqrt', 'btn_sqrt')}
          {this.renderSquare('nroot', 'btn_nroot')}
        </div>
        <div className="clearfix">
          {this.renderSquare('^','btn_exp')}
          {this.renderSquare('(', 'btn_open_paren')}
          {this.renderSquare(')', 'btn_close_paren')}
          {this.renderSquare('/', 'btn_divide')}
        </div>
        <div className="clearfix">
          {this.renderSquare(7, 'btn_7')}
          {this.renderSquare(8, 'btn_8')}
          {this.renderSquare(9, 'btn_9')}
          {this.renderSquare('*', 'btn_multiply')}
        </div>
        <div className="clearfix">
          {this.renderSquare(4, 'btn_4')}
          {this.renderSquare(5, 'btn_5')}
          {this.renderSquare(6, 'btn_6')}
          {this.renderSquare('-', 'btn_subtract')}
        </div>
        <div className="clearfix">
          {this.renderSquare(1, 'btn_1')}
          {this.renderSquare(2, 'btn_2')}
          {this.renderSquare(3, 'btn_3')}
          {this.renderSquare('+', 'btn_add')}
        </div>
        <div className="clearfix">
          {this.renderSquare('C', 'btn_C')}
          {this.renderSquare(0, 'btn_0')}
          {this.renderSquare('.', 'btn_decimal')}
          {this.renderSquare('=', 'btn_equal')}
        </div>
      </div>
    );
  }
}