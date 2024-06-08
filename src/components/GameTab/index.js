import {Component} from 'react'
import GameNavBar from '../GameNavBar'
import GameTabList from '../GameTabList'
import GameImages from '../GameImages'
import WinOrLose from '../WinOrLose'
import './index.css'

class GameTab extends Component {
  state = {
    isActive: '',
    seconds: 60,
    score: 0,
    uniqueImage: '',
    winGame: '',
  }

  componentDidMount() {
    const {imagesList} = this.props
    const {tabsList} = this.props
    // const randomImage = this.randomDisplayImage()
    this.setState({
      uniqueImage: imagesList[0].imageUrl,
      isActive: tabsList[0].tabId,
    })
    this.timerStart()
  }

  /*
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  */

  categoryFilterdImages = imagesList => {
    const {isActive} = this.state
    return imagesList.filter(each => each.category === isActive)
  }

  onSelectActiveTab = id => this.setState({isActive: id})

  playAgain = () => {
    // clearInterval(this.timerId)
    const {tabsList} = this.props
    const newImage = this.randomDisplayImage()
    this.setState({
      isActive: tabsList[0].tabId,
      seconds: 60,
      score: 0,
      uniqueImage: newImage,
      winGame: '',
    })
    this.timerStart()
  }

  selectedImage = value => {
    const {imagesList} = this.props
    const nxtRandomImage = this.randomDisplayImage()

    const {uniqueImage} = this.state
    const requiredImg = imagesList.filter(each => value === each.id)
    if (uniqueImage === requiredImg[0].imageUrl) {
      this.setState(prevState => ({
        winGame: true,
        score: prevState.score + 1,
        uniqueImage: nxtRandomImage,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({winGame: false})
    }
  }

  timerStart = () => {
    this.timerId = setInterval(() => {
      const {seconds} = this.state

      if (seconds > 0) {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1,
        }))
      } else if (seconds === 0) {
        clearInterval(this.timerId)
        this.setState({winGame: false})
      }
    }, 1000)
  }

  randomDisplayImage = () => {
    const {imagesList} = this.props
    const randomImage =
      imagesList[parseInt(Math.random() * imagesList.length - 1)].imageUrl
    return randomImage
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {isActive, seconds, score, uniqueImage, winGame} = this.state
    console.log(seconds)

    const filterImages = this.categoryFilterdImages(imagesList)

    return (
      <div className="bg-container">
        <GameNavBar scoreTimeDetails={{score, seconds}} />

        {winGame === false ? (
          <div className="win-container-position">
            <WinOrLose winnerScore={score} onPlayAgainBtn={this.playAgain} />
          </div>
        ) : (
          <div className="main-container">
            <img src={uniqueImage} alt="match" className="random-image" />
            <ul className="tabs-container">
              {tabsList.map(each => (
                <GameTabList
                  key={each.tabId}
                  tabText={each}
                  isTabActive={isActive}
                  onChangeCategory={this.onSelectActiveTab}
                />
              ))}
            </ul>
            <ul className="thumbnail-container">
              {filterImages.map(each => (
                <GameImages
                  key={each.thumbnailUrl}
                  images={each}
                  onSelectedImg={this.selectedImage}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default GameTab
