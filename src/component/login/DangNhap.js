import React, { useState } from "react";
import styles from "./DangNhap.module.css";
// import images from "../images/Final_logo.png";
import { useNavigate } from "react-router-dom";

function DangNhap() {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isToggledd, setisToggledd] = useState(false);

  const onchangename = (event) => {
    setName(event.target.value);
  };
  const onchangepassword = (event) => {
    setPassword(event.target.value);
  };
  const submitform = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const url = "https://backendtodolist.onrender.com/Login";
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    response.json().then((val) => {
      if (val.role === "user") {
        navigate(`/VatTu`);
      }
      if (val.role === "admin") {
        navigate(`/VatTu`);
      }
      if (val.VaiTro === "NhanVien") {
        navigate(`/BanHang`);
      }
      if (val.VaiTro === "QuanLy") {
        navigate(`/User`);
      }
      localStorage.setItem("Idchu", val._id);
      console.log("Idchu", val._id);
    });
    console.log("danhap", response.json());
  };
  return (
    <div className={styles.container}>
      <form style={{ width: "20%", color: "red" }}>
        <div className={styles.formInner}>
          {/* <div style={{ display: "flex" }}> */}
          <img
            className={styles.images}
            src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
            alt="images"
          />
          <h2 className={styles.title}>Đăng Nhập</h2>

          {/* </div> */}

          <div className={styles.formGroup}>
            <label style={{ marginTop: "10px" }}>Tên email</label>
            <input type="text" name="name" id="name" onChange={onchangename} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" style={{ marginTop: "10px" }}>
              Mật khẩu
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onchangepassword}
            />
          </div>
          <div style={{ textAlign: "center", display: "flex" }}>
            <input onClick={submitform} type="submit" value="Đăng Nhập " />
            <input
              style={{ marginLeft: "6px" }}
              onClick={() => {
                navigate(`/DangKy`);
              }}
              type="submit"
              value="Đăng Ký "
            />
          </div>
        </div>

        {/* <div className={styles.images}>
          <img
            src={images}
            src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
            alt="images"
            style={{ width: "100px", height: "100px" }}
          />
          <h2>APP ToDo By Team 1</h2>
        </div> */}
      </form>

      {/* <div>
  {isToggledd && <Viewxchaomung  closemodal={setisToggledd}/>}
</div> */}
    </div>
  );
}

export default DangNhap;
