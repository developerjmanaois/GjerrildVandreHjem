import "./mailList.css"

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className="mailTitle text-3xl">Spar tid, spar penge!</h1>
      <span className='mailDesc text-md'>Tilmeld dig, så sender vi de bedste tilbud til dig</span>
      <div className="mailInputContainer">
        <input type="text" placeholder='Din Email'/>
        <button>Tilmeld</button>
      </div>
    </div>
  )
}

export default MailList
