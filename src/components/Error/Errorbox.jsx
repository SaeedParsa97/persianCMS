import './Errorbox.css'

const Errorbox = ({msg}) => {


  return (
    <div className='cms-empty-err'>
      <h1>{msg}</h1>
    </div>
  )
}

export default Errorbox
