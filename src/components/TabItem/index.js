import './index.css'

const TabItem = props => {
  const {tabDetails, isTabActive, onTabChange} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    onTabChange(tabId)
  }

  const activeClassName = isTabActive ? 'btn active' : 'btn'
  return (
    <li className="tab">
      <button type="button" className={activeClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
