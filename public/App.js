/* eslint-disable comma-dangle */
/* eslint-disable require-jsdoc */
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

class StandardCalc extends React.Component {
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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 0,
      history: [
        {
          operations: [],
          cacheNumber: '',
          cacheOperator: '',
          isDone: false,
        },
      ],
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    if (current.isDone) {
        this.setState({
            stepNumber: 0,
            history: [
                {
                  operations: [],
                  cacheNumber: '',
                  cacheOperator: '',
                  isDone: false,
                },
            ]
        }, () => {
            this.handleClick2(i)
        })
    } else {
        this.handleClick2(i);
    }
  }

  handleClick2(i) {
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    let operations = current.operations.slice();

    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].indexOf(i) > -1) {
        if (current.cacheOperator) {
            if ((operations.length === 0) || (operations[operations.length - 1] === '(')) {
                this.setState({
                    history: history.concat([{
                        operations: operations,
                        cacheNumber: '' + i,
                        cacheOperator: '',
                        isDone: false,
                    }]),
                    stepNumber: this.state.stepNumber + 1,
                })
            } else {
                this.setState({
                    history: history.concat([{
                        operations: operations.concat([current.cacheOperator]),
                        cacheNumber: '' + i,
                        cacheOperator: '',
                        isDone: false,
                    }]),
                    stepNumber: this.state.stepNumber + 1,
                })
            }
        } else {
            this.setState({
                history: history.concat([{
                    operations: operations,
                    cacheNumber: current.cacheNumber + '' + i,
                    cacheOperator: '',
                    isDone: false,
                }]),
                stepNumber: this.state.stepNumber + 1,
            })
        }
    } else if (['+', '-', '*', '/', '^'].indexOf(i) > -1) {
        if (current.cacheNumber) {
            this.setState({
                history: history.concat([{
                    operations: operations.concat([current.cacheNumber]),
                    cacheNumber: '',
                    cacheOperator: i,
                    isDone: false,
                }]),
                stepNumber: this.state.stepNumber + 1,
            })
        } else {
            this.setState({
                history: history.concat([{
                    operations: operations,
                    cacheNumber: '',
                    cacheOperator: i,
                    isDone: false,
                }]),
                stepNumber: this.state.stepNumber + 1,
            })        
        }
    } else if (['(', ')'].indexOf(i) > -1) {
        if (current.cacheNumber) {
            this.setState({
                history: history.concat([{
                    operations: operations.concat([current.cacheNumber, i]),
                    cacheNumber: '',
                    cacheOperator: '',
                    isDone: false,
                }]),
                stepNumber: this.state.stepNumber + 1,
            })
        } else {
            if (i === ')') {
                this.setState({
                    history: history.concat([{
                        operations: operations.concat([i]),
                        cacheNumber: '',
                        cacheOperator: '',
                        isDone: false,
                    }]),
                    stepNumber: this.state.stepNumber + 1,
                })
            } else {
                this.setState({
                    history: history.concat([{
                        operations: operations.concat([current.cacheOperator, i]),
                        cacheNumber: '',
                        cacheOperator: '',
                        isDone: false,
                    }]),
                    stepNumber: this.state.stepNumber + 1,
                })
            }
        }
    } else if (['='].indexOf(i) > -1) {
        if (current.cacheNumber) {
            this.setState({
                history: history.concat([{
                    operations: operations.concat([current.cacheNumber]),
                    cacheNumber: '',
                    cacheOperator: '',
                    isDone: true,
                }]),
                stepNumber: this.state.stepNumber + 1,
            })        
        } else {
            this.setState({
                history: history.concat([{
                    operations: operations,
                    cacheNumber: '',
                    cacheOperator: '',
                    isDone: true,
                }]),
                stepNumber: this.state.stepNumber + 1,
            })
        }
    } else if (['C'].indexOf(i) > -1) {
 
      this.setState({
          history: history.concat([{
              operations: [],
              cacheNumber: '',
              cacheOperator: '',
              isDone: false,
          }]),
          stepNumber: this.state.stepNumber + 1,
      }) 
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    let formula = current.operations.join(' ');
    if (current.cacheOperator) {
        formula += ' ' + current.cacheOperator;
    }
    let operations = current.operations.slice(0).filter((element)=> {
      return element !== "";
    })
    const total = calculator.getResult(calculator.preFormatOperations(operations));
    const output = current.isDone ? total : current.cacheNumber;
    return (
      <div className="app">
        <StandardCalc operations={current.operations}
            display1={formula}
            display2={output}
            onClick={(i) => this.handleClick(i)}
        />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
