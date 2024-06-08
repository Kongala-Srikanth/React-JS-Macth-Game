import './index.css'

const GameImages = props => {
  const {images, onSelectedImg} = props
  const {thumbnailUrl, id} = images

  const onSeletedCorrectImg = () => onSelectedImg(id)

  return (
    <li>
      <button type="button" className="hide-btn">
        <img
          src={thumbnailUrl}
          className="thumbnail-img"
          alt="thumbnail"
          onClick={onSeletedCorrectImg}
        />
      </button>
    </li>
  )
}

export default GameImages
