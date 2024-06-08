import './index.css'

const WinOrLose = props => {
  const {winnerScore, onPlayAgainBtn} = props

  const onResetGame = () => onPlayAgainBtn()

  return (
    <div className="win-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="score-text">YOUR SCORE</p>
      <p className="score">{winnerScore}</p>
      <button type="button" className="play-again-btn" onClick={onResetGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default WinOrLose
