class StatisticalCalc extends React.Component {
    renderTextArea(i, id) {
        return <TextArea value={i} id={id}/>;
    }

    renderSquare(i, id, addClass) {
      return <Square value={i} id={id} addClass={addClass} onClick={() => this.props.onClick(i)}/>;
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
          {this.renderSquare('std','btn_std', 'operator-btn')}
          {this.renderSquare('sci', 'btn_sci', 'operator-btn2')}
          {this.renderSquare('stat', 'btn_stat', 'operator-btn3')}
          {this.renderSquare('prog', 'btn_prog', 'operator-btn4')}
        </div>
        <div className="clearfix">
          {this.renderSquare('^','btn_exp', 'operator-btn')}
          {this.renderSquare('(', 'btn_open_paren', 'operator-btn')}
          {this.renderSquare(')', 'btn_close_paren', 'operator-btn')}
          {this.renderSquare('/', 'btn_divide', 'operator-btn')}
        </div>
        <div className="clearfix">
          {this.renderSquare(7, 'btn_7')}
          {this.renderSquare(8, 'btn_8')}
          {this.renderSquare(9, 'btn_9')}
          {this.renderSquare('*', 'btn_multiply', 'operator-btn')}
        </div>
        <div className="clearfix">
          {this.renderSquare(4, 'btn_4')}
          {this.renderSquare(5, 'btn_5')}
          {this.renderSquare(6, 'btn_6')}
          {this.renderSquare('-', 'btn_subtract', 'operator-btn')}
        </div>
        <div className="clearfix">
          {this.renderSquare(1, 'btn_1')}
          {this.renderSquare(2, 'btn_2')}
          {this.renderSquare(3, 'btn_3')}
          {this.renderSquare('+', 'btn_add', 'operator-btn')}
        </div>
        <div className="clearfix">
          {this.renderSquare('C', 'btn_C', 'operator-btn5')}
          {this.renderSquare(0, 'btn_0')}
          {this.renderSquare('.', 'btn_decimal', 'operator-btn')}
          {this.renderSquare('=', 'btn_equal', 'operator-btn6')}
        </div>
      </div>
    );
  }
}