import './index.css'

const GameTabList = props => {
  const {tabText, onChangeCategory, isTabActive} = props
  const {tabId, displayText} = tabText

  const activeTab = isTabActive === tabId ? 'active-tab' : ''

  const onActiveCategory = () => onChangeCategory(tabId)

  return (
    <li className={`tabs-text ${activeTab}`}>
      <button type="button" className="tab-btn" onClick={onActiveCategory}>
        {displayText}
      </button>
    </li>
  )
}

export default GameTabList
