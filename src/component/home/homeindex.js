import React from "react";
import Header from "../../components/Navbar/header";

import * as IoIcons from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
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
            <FaUserFriends
              style={{
                marginLeft: "45%",
                textAlign: "center",
                height: "45px",
                width: "45px",
                background: "#white",
                color: "black",
              }}
            />
            <div
              style={{
                // marginLeft: "244px",
                marginLeft: "20%",
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
          <span style={{ marginLeft: "18%", fontSize: "20px" }}>
            <b style={{ marginTop: "15%" }}>Meetings Schedule</b>
          </span>
          <div
            style={{
              textAlign: "center",
              marginLeft: "6%",
              height: "17%",
              width: "80%",
              background: "#fff1d6",
              marginTop: "5%",
              borderRadius: "15px",
            }}
          >
            <div>
              <p style={{ paddingTop: "10px" }}> 8:20 AM - 9:00 AM</p>
              <p> Meetings Nazmul Hassan</p>
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/10980885/pexels-photo-10980885.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
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
              marginLeft: "6%",
              height: "17%",
              width: "80%",
              background: "#d1e7ff",
              marginTop: "5%",
              borderRadius: "15px",
            }}
          >
            <div>
              <p style={{ paddingTop: "10px" }}> 10:10 AM - 11:00 AM</p>
              <p> Product Development Team</p>
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/10980885/pexels-photo-10980885.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
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
              marginLeft: "6%",
              height: "17%",
              width: "80%",
              background: "#ffd8d9",
              marginTop: "5%",
              borderRadius: "15px",
            }}
          >
            <div>
              <p style={{ paddingTop: "10px" }}> 1:20 PM - 2:00 PM</p>
              <p> Product planning</p>
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/10980885/pexels-photo-10980885.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/14578996/pexels-photo-14578996.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
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
              marginLeft: "6%",
              height: "17%",
              width: "80%",
              background: "#d9ffe5",
              marginTop: "5%",
              borderRadius: "15px",
            }}
          >
            <div>
              <p style={{ paddingTop: "10px" }}> 3:10 PM - 4:00 PM</p>
              <p> Social Product Review</p>
              <img
                className={styles.meeting}
                style={{
                  marginRight: "10px",
                }}
                src="https://images.pexels.com/photos/10980885/pexels-photo-10980885.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
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
        </div>
      </div>
    </div>
  );
}

export default Home;
