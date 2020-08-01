const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
};

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>
            <Counter score={props.score} />
        </div>
    );
};

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
};

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={1} />
            {/* Player List*/}
            <Player name="Tommy Ayrton" score={50} />
            <Player name="Gustavo" score={90} />
            <Player name="Maria" score={70} />
            <Player name="Katherin" score={10} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
