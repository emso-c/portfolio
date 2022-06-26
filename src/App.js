import React from 'react';

class Board extends React.Component {
    render(){
        return <Square value={1}></Square>
    }
}

class Square extends React.Compenent {
    render(){
        return (
            <div>
                hello
                <button className="Square">
                    {this.props.value}
                </button>
            </div>
        )
    }
}

function App() {
    return (
        <div>
            hello
            <Board></Board>
        </div>
    )
}

export default App;
