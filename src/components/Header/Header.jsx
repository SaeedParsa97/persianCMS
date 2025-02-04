import './Header.css';
import { FaRegBell } from "react-icons/fa6";
import { BsBrightnessHigh } from "react-icons/bs";

const Header = () => {
  return (
    <div className='header'>
      <div className='admin-profile'>
        <img src="/images/robert.jpg" alt="Admin Profile" />
        <div>
            <h1>محمد کاظمی</h1>
            <h3>برنامه نویس فرانت اند</h3>
        </div>
      </div>

      <div className='header-left-section'>
        <div className='search-box'>
            <input type="text" placeholder='جستوجو کنید...' />
            <button>جستوجو</button>
        </div>

        <button className='header-left-icon'>
            <FaRegBell/>
        </button>
        <button className='header-left-icon'>
            <BsBrightnessHigh />
        </button>
      </div>
    </div>
  )
}

export default Header
