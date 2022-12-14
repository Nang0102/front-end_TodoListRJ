import React, { useState } from "react";
import styles from "./DangNhap.module.css";
import images from "../images/Final_logo.png";
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
      <form>
        <div className={styles.formInner}>
          <h2>Đăng Nhập</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Tên email</label>
            <input type="text" name="name" id="name" onChange={onchangename} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onchangepassword}
            />
          </div>
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

        <div className={styles.images}>
          <img
            src={images}
            alt="images"
            style={{ width: "150px", height: "150px" }}
          />
          <h2>APP ToDo By Team 1</h2>
        </div>
      </form>

      {/* <div>
  {isToggledd && <Viewxchaomung  closemodal={setisToggledd}/>}
</div> */}
    </div>
  );
}

export default DangNhap;
