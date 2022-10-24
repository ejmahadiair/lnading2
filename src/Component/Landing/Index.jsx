import React from "react";
import "./style.css";
import { data } from "../Comon/data";

const Index = () => {
  return (
    <>
      <ul className="nav">
        {data.map((item) => {
          return (
            <>
              <li className="nav-item">
                <a className="nav-link" href={`#${item?.left?.id}`}>
                  {item?.left?.nish}
                </a>
              </li>
            </>
          );
        })}
      </ul>

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
                      {item?.right?.desc?.map((rightitem) => {
                        return (
                          <>
                            <li className="item-list">
                              <p>{rightitem?.text}</p>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Index;
