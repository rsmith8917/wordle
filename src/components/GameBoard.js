import React from 'react';
import './GameBoard.css'
import GameTile from './GameTile';

function GameBoard({ width = 350, height = 420 }) {
    return (
        <div style={{ width, height }} className='game-board'>
            <div className='game-board-row'>
                <GameTile letter="T" state="correct" />
                <GameTile letter="O" state="absent" />
                <GameTile letter="A" state="present" />
                <GameTile letter="S" state="absent" />
                <GameTile letter="T" state="present" />
            </div>
            <div className='game-board-row'>
                <GameTile letter="W" state="pending" />
                <GameTile letter="E" state="pending" />
                <GameTile letter="A" state="pending" />
                <GameTile />
                <GameTile />
            </div>
            <div className='game-board-row'>
                <GameTile />
                <GameTile />
                <GameTile />
                <GameTile />
                <GameTile />
            </div>
            <div className='game-board-row'>
                <GameTile />
                <GameTile />
                <GameTile />
                <GameTile />
                <GameTile />
            </div>
            <div className='game-board-row'>
                <GameTile />
                <GameTile />
                <GameTile />
                <GameTile />
                <GameTile />
            </div>
            <div className='game-board-row'>
                <GameTile />
                <GameTile />
                <GameTile />
                <GameTile />
                <GameTile />
            </div>
        </div>
    );
}

export default GameBoard;