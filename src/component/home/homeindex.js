import React from "react";
import Header from "../../components/Navbar/header";

import * as IoIcons from "react-icons/io";

import styles from "./homeindex.module.css";
function Home({ children }) {
  let icon = <IoIcons.IoMdPeople />;

  return (
    <div>
      <Header></Header>
      <div className={styles.Fix}>
        <div className={styles.fixcontent}>{children}</div>

        <div className={styles.wrapp}>
          {/* <Chatclock/> */}
          <div style={{ display: "flex" }}>
            <div
              style={{
                // marginLeft: "244px",
                marginLeft: "65%",
                textAlign: "center",
                height: "45px",
                width: "45px",
                background: "#38c3a4",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <b style={{ fontSize: "30px" }}>5</b>
            </div>
          </div>
          <span
            style={{ marginLeft: "24px", marginTop: "14px", fontSize: "20px" }}
          >
            <b>Meetings Schedule</b>
          </span>
          <div
            style={{
              textAlign: "center",
              marginLeft: "24px",
              height: "16%",
              width: "80%",
              background: "#fff1d6",
              marginTop: "14px",
              borderRadius: "10px",
            }}
          >
            <div>
              <p style={{ paddingTop: "5px" }}> 8:20 AM - 9:00 AM</p>
              <p> Meetings Nazmul Hassan</p>
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/14720564/pexels-photo-14720564.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/6530613/pexels-photo-6530613.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                src="https://images.pexels.com/photos/3398194/pexels-photo-3398194.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginLeft: "24px",
              height: "16%",
              width: "80%",
              background: "#d1e7ff",
              marginTop: "14px",
              borderRadius: "15px",
            }}
          >
            <div>
              <p style={{ paddingTop: "5px" }}> 8:20 AM - 9:00 AM</p>
              <p> Product Development Team</p>
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/14720564/pexels-photo-14720564.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/6530613/pexels-photo-6530613.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                src="https://images.pexels.com/photos/3398194/pexels-photo-3398194.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginLeft: "24px",
              height: "16%",
              width: "80%",
              background: "#ffd8d9",
              marginTop: "5%",
              borderRadius: "15px",
            }}
          >
            <div>
              <p style={{ paddingTop: "5px" }}> 8:20 AM - 9:00 AM</p>
              <p> Product planning</p>
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/14720564/pexels-photo-14720564.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/6530613/pexels-photo-6530613.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                src="https://images.pexels.com/photos/3398194/pexels-photo-3398194.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginLeft: "24px",
              height: "16%",
              width: "80%",
              background: "#d9ffe5",
              marginTop: "14px",
              borderRadius: "15px",
            }}
          >
            <div>
              <p style={{ paddingTop: "5px" }}> 8:20 AM - 9:00 AM</p>
              <p> Social Product Review</p>
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/14720564/pexels-photo-14720564.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/6530613/pexels-photo-6530613.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                src="https://images.pexels.com/photos/3398194/pexels-photo-3398194.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
          </div>

          {/* <Chat/>
          <Clock/> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
