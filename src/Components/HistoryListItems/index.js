import './index.css'

const HistoryListItems = props => {
  const {historyList, deleteBrowserHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList
  const deleteBrowser = () => {
    deleteBrowserHistory(id)
  }

  return (
    <li className="list-items">
      <div className="container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="Url">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={deleteBrowser}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryListItems
