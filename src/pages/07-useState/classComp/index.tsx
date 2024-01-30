import * as React from 'react'

export interface ClassCompProps { }
export interface ClassCompState {
  counter: number
}

export class ClassComp extends React.Component<ClassCompProps, ClassCompState> {

  state: Readonly<ClassCompState> = {
    counter: 0
  }

  constructor(props: ClassCompProps) {
    super(props)
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
  }

  add() {
    this.setState((prev) => ({
      ...prev,
      counter: prev.counter + 1
    }))
  }

  subtract() {
    this.setState((prev) => ({
      ...prev,
      counter: prev.counter - 1
    }))
  }

  render() {
    return (
      <div className={'ClassComp'}>
        <h2>
          Contador (com classe)
        </h2>

        <button onClick={this.subtract}>-</button>
        <span>{this.state.counter}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}