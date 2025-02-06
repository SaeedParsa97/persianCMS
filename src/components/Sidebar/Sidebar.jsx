import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد مدیرت خوش آمدید</h1>

      <ul className="sidebar-links">
        <li>
          <Link to="/">
            <AiOutlineHome className="icon" />
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link to="/products">
            <MdOutlineProductionQuantityLimits className="icon" />
            محصولات
          </Link>
        </li>
        <li className="active">
          <Link to="comments">
            <TfiCommentAlt className="icon" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="users">
            <FaUsers className="icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="orders">
            <IoBagCheckOutline className="icon" />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to="offs">
            <BsCurrencyDollar className="icon" />
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
