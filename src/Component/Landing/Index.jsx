import React from "react";
import "./style.css";
import { data } from "../Comon/data";
import logo from "../Media/Image/8676D41F-1F9F-4D1A-AA0E-4CBEC516DA0F.png";
import { Button, Form, Input } from "antd";
const Index = () => {
  return (
    <>
      <div className="banner">
        <div className="gray-box"></div>
        <div className="black-box"></div>
        <div className="banner-side">
          <div className="side-img">
            <img src={logo} alt="" />
          </div>
          <p>The Access Foundation Youth Development Programs</p>
          <div className="logo-side">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="main-container">
        {data.map((item, idx) => {
          return (
            <>
              <div
                id={`${item?.left?.id}`}
                className="container"
                style={{
                  display: "flex",
                  width: "80%",
                  margin: "10px auto",
                  gap: "20px",
                }}
              >
                {/* Left */}
                <div className="card-box">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      padding: "10px",
                      boxSizing: "border-box",
                    }}
                  >
                    <div className="nish sub">{item?.left?.nish}</div>
                    <div className="nish-title">{item?.left?.title}</div>
                    <ul>
                      {item?.left?.desc?.map((leftitem) => {
                        return (
                          <>
                            <li className="item-list">
                              <p>{leftitem?.text}</p>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                {/* Right */}
                <div className="card-box">
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      padding: "10px",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      className="photo sub"
                      style={{ width: "100%", height: "300px" }}
                    >
                      <img
                        src={item?.right?.img}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="nish-title">{item?.right?.title}</div>
                    <ul>
                      {/* {item?.right?.desc?.map((rightitem) => {
                        return (
                          <>
                            <li className="item-list">
                              <p>{rightitem?.text}</p>
                            </li>
                          </>
                        );
                      })} */}
                      <div className="right-content">
                        <p>CONTACT</p>
                        <p>FOR</p>
                        <p>PRICING</p>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="footer-banar">
        <div className="contact-info">
          <p>Questions</p>
          <p>314-374-2358</p>
        </div>
        <div className="ceo">
          <p>Keithen Stallings</p>
          <p>CEO</p>
        </div>
        <form action="">
          <input
            type="email"
            required={true}
            placeholder="Enter Your Email Address"
          />
          <button
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            // }}
          >
            Get It
          </button>
        </form>
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Index;
