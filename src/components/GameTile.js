import './GameTile.css'

function GameTile({ letter, state = "empty" }) {
    function getStyle(state) {
        const yellow = '#c9b458';
        const green = '#6aaa64';

        if (state == "empty") {
            return { border: '2px solid #d3d6da' };
        }
        if (state == "pending") {
            return { border: '2px solid #878a8c' };
        }
        if (state == "absent") {
            return { color: 'white', backgroundColor: '#787c7e' };
        }
        if (state == "present") {
            return { color: 'white', backgroundColor: yellow };
        }
        if (state == "correct") {
            return { color: 'white', backgroundColor: green };
        }
    }

    return (
        <div className='game-tile' style={getStyle(state)}>
            {letter}
        </div>
    )
}

export default GameTile;