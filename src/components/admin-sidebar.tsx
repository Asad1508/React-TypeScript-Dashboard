import React from "react";
import { IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";

const AdminSideBar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            text="Dashboard"
            Icon={RiDashboardFill}
            location={location}
          />
          <Li
            url="/admin/customer"
            text="Customer"
            Icon={IoIosPeople}
            location={location}
          />
          <Li
            url="/admin/product"
            text="Product"
            Icon={RiShoppingBag3Fill}
            location={location}
          />
          <Li
            url="/admin/transaction"
            text="Transaction"
            Icon={AiFillFileText}
            location={location}
          />
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          <Li
            url="/admin/chart/bar"
            text="Bar"
            Icon={FaChartBar}
            location={location}
          />
          <Li
            url="/admin/chart/pie"
            text="Pie"
            Icon={FaChartPie}
            location={location}
          />
          <Li
            url="/admin/chart/line"
            text="Line"
            Icon={FaChartLine}
            location={location}
          />
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          <Li
            url="/admin/app/stopwatch"
            text="Stop"
            Icon={FaStopwatch}
            location={location}
          />
          <Li
            url="/admin/app/coupon"
            text="Coupon"
            Icon={RiCoupon3Fill}
            location={location}
          />
          <Li
            url="/admin/app/toss"
            text="Toss"
            Icon={FaGamepad}
            location={location}
          />
        </ul>
      </div>
    </aside>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1"
          : "white",
      }}
    >
      <Link to={url}>
        <Icon />
        {text}
      </Link>
    </li>
  );
};

export default AdminSideBar;
