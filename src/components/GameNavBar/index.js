import './index.css'

const GameNavBar = props => {
  const {scoreTimeDetails} = props
  const {score, seconds} = scoreTimeDetails

  return (
    <nav className="nav-bar">
      <ul className="nav-bar">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </li>
        <div className="nav-score-container">
          <li>
            <p className="nav-score">
              Score: <span className="highlight-text">{score}</span>
            </p>
          </li>
          <li>
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-icon"
              />
              <p className="highlight-text">{seconds} sec</p>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default GameNavBar
