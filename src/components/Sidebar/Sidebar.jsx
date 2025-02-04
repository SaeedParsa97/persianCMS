import "./Sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد مدیرت خوش آمدید</h1>

      <ul className="sidebar-links">
        <li>
          <a href="#">
            <AiOutlineHome className="icon" />
            صفحه اصلی
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineProductionQuantityLimits className="icon" />
            محصولات
          </a>
        </li>
        <li className="active">
          <a href="#">
            <TfiCommentAlt className="icon" />
            کامنت ها
          </a>
        </li>
        <li>
          <a href="#">
            <FaUsers className="icon" />
            کاربران
          </a>
        </li>
        <li>
          <a href="#">
            <IoBagCheckOutline className="icon"/>
            سفارشات</a>
        </li>
        <li>
          <a href="#">
            <BsCurrencyDollar className="icon"/>
            تخفیف ها</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
