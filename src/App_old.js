import React from 'react';

const squareNotation = Object.freeze({
    x: 'Ｘ',
    o: 'Ｏ',
    empty: "＋",
})

const winningLines = Object.freeze([
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
])

function printRowCol(i){
    if (i === null){
        return;
    }
    const row = (i % 3) + 1;
    const col = Math.floor(i / 3) + 1;
    return '(' + row + ' ' + col + ')';
}

function checkWinner(squares){
    let condition = null;
    winningLines.map((line, i) =>{
        const [a,b,c] = line;
        if (squares[a] === squareNotation.empty){
            return null;
        }
        if (squares[a] === squares[b] && squares[a] === squares[c]){
            condition = squares[a];
        }
        return null;
    })
    return condition;
}

function Square(props){
    return (
        <button onClick={()=>props.onClick()}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    renderSquare(i){
        return (
            <Square 
                value={this.props.squares[i]}
                onClick={()=>this.props.onClick(i)}
            />
        )
    }
    render(){
        return (
            <div>
                <div>
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
                </div>
                <div>
                    {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(squareNotation.empty),
                locations: Array(9).fill(null),
            }],
            currentStep: 0,
            isXturn: true
        };
    };

    handleClick(i){
        /* 
            Update squares, shouldn't update the states directly
            and use setState instead. That's why we should create
            a shallow copy first by using an empty slice method.

            The following implementation is wrong:
            this.state.squares[i] = 'X'
        */
        const history = this.state.history.slice(0, this.state.currentStep + 1); // ???
        const current = history[history.length - 1];
        // const locations = current.locations.slice(0, this.state.currentStep + 1);
        const locations = current.locations;
        const squares = current.squares.slice();
        if(checkWinner(squares)){
            return
        }
        if(squares[i] === squareNotation.empty){
            squares[i] = this.state.isXturn ? squareNotation.x  : squareNotation.o;
            locations[this.state.currentStep + 1] = i 
            this.setState({
                history: history.concat([{
                    squares: squares,
                    locations: locations
                }]),
                currentStep: history.length, // ??
                isXturn: !this.state.isXturn
            })
        }
    }

    leapBackTo(i){
        this.setState({
            currentStep: i,
            isXturn: (i % 2) === 0, // ??
        })
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.currentStep];
        let status = 'Current player: ' + (this.state.isXturn ? squareNotation.x : squareNotation.o);
        const winner = checkWinner(current.squares);
        if (winner){
            status = winner + 'has won!';
        }
        return (
            <div>
                <div>
                    <div>
                        {status}
                    </div>
                    <Board
                        squares={current.squares}
                        onClick={(i)=>this.handleClick(i)}
                    />
                </div>
                <div>
                    History
                    <ol>
                        {history.map((history, i) => {
                                return (
                                    <li>
                                        <button onClick={()=>this.leapBackTo(i)}>
                                            Back to move #{i} {printRowCol(current.locations[i])}
                                        </button>
                                    </li>
                                )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

function App() {
    return (
        <Game />
    )
}

export default App;
