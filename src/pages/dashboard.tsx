import React from "react";
import AdminSideBar from "../components/admin-sidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img
            src={
              "data:image/jpeg;base64,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"
            }
            alt="User"
          />
        </div>
        <section className="widget-container">
          <WidjetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgba(0,115,255)"
          />
              <WidjetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />
          <WidjetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />
          <WidjetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>
      </main>
    </div>
  );
};

interface WidjetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidjetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidjetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>
    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);
export default Dashboard;
