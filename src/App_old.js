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

function Square(props){
    return (
        <button onClick={()=>props.onClick()}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(squareNotation.empty),
            isXturn: true,
        }
    }

    checkWinner(){
        let condition = null;
        winningLines.map((line, i) =>{
            const [a,b,c] = line;
            if (this.state.squares[a] === squareNotation.empty){
                return null;
            }
            if (this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]){
                condition = this.state.squares[a];
            }
            return null;
        })
        return condition;
    }

    handleClick(i){
        /* 
            Update squares, shouldn't update the states directly
            and use setState instead. That's why we should create
            a shallow copy first by using an empty slice method.

            The following implementation is wrong:
            this.state.squares[i] = 'X'
        */

        const squares = this.state.squares.slice()
        if(this.checkWinner()){
            return
        }
        if(squares[i] === squareNotation.empty){
            squares[i] = this.state.isXturn ? squareNotation.x  : squareNotation.o;
            this.setState({
                squares: squares,
                isXturn: !this.state.isXturn
            })
        }
    }

    renderSquare(i){
        return (
            <Square 
                value={this.state.squares[i]}
                onClick={()=>this.handleClick(i)}
            />
        )
    }
    render(){
        let status = 'Current player: ' + (this.state.isXturn ? squareNotation.x : squareNotation.o);
        const winner = this.checkWinner();
        if (winner){
            status = winner + 'has won!';
        }
        return (
            <div>
                <div className="Status">
                    {status}
                </div>
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
        this.setState({
            history: null
        });
    };

    render(){
        return (
            <Board />
        )
    }

}

function App() {
    return (
        <Game />
    )
}

export default App;
