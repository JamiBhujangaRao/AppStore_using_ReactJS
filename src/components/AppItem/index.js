import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {appName, imageUrl} = itemDetails

  return (
    <li className="appItem">
      <img alt={appName} className="itemImage" src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
