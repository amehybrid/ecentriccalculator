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
    } else if (['std'].indexOf(i) > -1) {
        this.setState({
            calcType: 0,
            history: history,
            stepNumber: this.state.stepNumber,
        }) 
    } else if (['sci'].indexOf(i) > -1) {
        this.setState({
            calcType: 1,
            history: history,
            stepNumber: this.state.stepNumber,
        }) 
    } else if (['prog'].indexOf(i) > -1) {
        this.setState({
            calcType: 2,
            history: history,
            stepNumber: this.state.stepNumber,
        }) 
    } else if (['stat'].indexOf(i) > -1) {
        this.setState({
            calcType: 4,
            history: history,
            stepNumber: this.state.stepNumber,
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
    if (this.state.calcType === 1) {
        return (
            <div className="app">
              <ScientificCalc operations={current.operations}
                  display1={formula}
                  display2={output}
                  onClick={(i) => this.handleClick(i)}
              />
            </div>
          );
    } else if (this.state.calcType === 2) {
        return (
            <div className="app">
              <ProgrammableCalc operations={current.operations}
                  display1={formula}
                  display2={output}
                  onClick={(i) => this.handleClick(i)}
              />
            </div>
          );
    } else if (this.state.calcType === 3) {
        return (
            <div className="app">
              <StatisticalCalc operations={current.operations}
                  display1={formula}
                  display2={output}
                  onClick={(i) => this.handleClick(i)}
              />
            </div>
          );
    } else {        
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
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
