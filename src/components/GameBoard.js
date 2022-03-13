import React from 'react';
import './GameBoard.css'

function GameBoard({ width = 350, height = 420 }) {


    return (
        <div style={{ width, height }} className='game-board'>
            <div className='game-board-row'>
                <div className='game-board-letter'>
                    T
                </div>
                <div className='game-board-letter'>
                    O
                </div>
                <div className='game-board-letter'>
                    A
                </div>
                <div className='game-board-letter'>
                    S
                </div>
                <div className='game-board-letter'>
                    T
                </div>
            </div>
            <div className='game-board-row'>
                <div className='game-board-letter'>
                    T
                </div>
                <div className='game-board-letter'>
                    O
                </div>
                <div className='game-board-letter'>
                    A
                </div>
                <div className='game-board-letter'>
                    S
                </div>
                <div className='game-board-letter'>
                    T
                </div>
            </div>
            <div className='game-board-row'>
                <div className='game-board-letter'>
                    T
                </div>
                <div className='game-board-letter'>
                    O
                </div>
                <div className='game-board-letter'>
                    A
                </div>
                <div className='game-board-letter'>
                    S
                </div>
                <div className='game-board-letter'>
                    T
                </div>
            </div>
            <div className='game-board-row'>
                <div className='game-board-letter'>
                    T
                </div>
                <div className='game-board-letter'>
                    O
                </div>
                <div className='game-board-letter'>
                    A
                </div>
                <div className='game-board-letter'>
                    S
                </div>
                <div className='game-board-letter'>
                    T
                </div>
            </div>
            <div className='game-board-row'>
                <div className='game-board-letter'>
                    T
                </div>
                <div className='game-board-letter'>
                    O
                </div>
                <div className='game-board-letter'>
                    A
                </div>
                <div className='game-board-letter'>
                    S
                </div>
                <div className='game-board-letter'>
                    T
                </div>
            </div>
            <div className='game-board-row'>
                <div className='game-board-letter'>
                    T
                </div>
                <div className='game-board-letter'>
                    O
                </div>
                <div className='game-board-letter'>
                    A
                </div>
                <div className='game-board-letter'>
                    S
                </div>
                <div className='game-board-letter'>
                    T
                </div>
            </div>
        </div>
    );
}

export default GameBoard;