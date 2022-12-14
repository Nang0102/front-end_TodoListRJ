/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
// import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
// import moment from 'moment';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

import TRANG1 from "./TRANG1.js";
import TRANG2 from "./TRANG2.js";
import TRANG3 from "./TRANG3.js";
import TRANG4 from "./TRANG4.js";

// import Chinhnh from "../ChiNhanh"
const VatTu = () => {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  // const [Data, setData] = useState([]);
  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  // const [TimKiem, setTimKiem] = useState("");
  // const [loading, setLoading] = useState(false)

  var idd = localStorage.getItem("Idchu");

  // var userId=localStorage.getItem("Idchu");

  const Gettask = async () => {
    const url = `https://backendtodolist.onrender.com/Task/${idd}`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          setData1(data);
          console.log("Trang ", data);
          // gettrang2(data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const gettrang2 = (data) => {
  //   data.map((i) =>{
  //     if(i.level=="important"){
  //       console.log("Trang vao dc r ",i)
  //       setData2.set([...Data2, i])
  //     }
  //   })
  // }
  const handlelevel = (item) => {
    if (Data2.indexOf(item) === -1) {
      setData2([...Data2, item]);
      return;
    } else {
      return;
    }
  };

  const Gettaskimportane = async () => {
    const url = `https://backendtodolist.onrender.com/Task/c/${idd}`;
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          //   data.map((i) =>{
          //    if(i.level==="important"){
          // let item={

          //   complete: i.complete,
          //   description:  i.description,
          //   enddate:  i.enddate,
          //   startday:  i.startday,
          //   level:  i.level,
          //   title:  i.title,
          //   userId:  i.userId,
          //   icontype:  i.icontype,
          //   type:  i.type

          // }
          // // Data2.push(item)
          // handlelevel(item)
          //      }
          //        })

          setData2(data);
          // gettrang2(data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Gettask();
    Gettaskimportane();
  });
  let a = "   ";
  return (
    <div>
      <div>
        <div style={{ marginLeft: "260px" }}>
          <h1>Today Task</h1>
          <span
            style={{ color: "black", fontSize: "20px" }}
            onClick={() => {
              setshow(true);
              setshow1(false);
              setshow2(false);
              setshow3(false);
            }}
          >
            <a
              style={{
                marginRight: "9px",
                width: "100%",
                background: "#eae6fd",
                marginTop: "14px",
                borderRadius: "36%",
                color: "#5b44b9",
              }}
            >
              {a + Data1.length + a}
            </a>
            ALL
          </span>

          <span
            style={{ color: "black", marginLeft: "130px", fontSize: "20px" }}
            onClick={() => {
              setshow(false);
              setshow1(true);
              setshow2(false);
              setshow3(false);
            }}
          >
            <a
              style={{
                marginRight: "9px",
                width: "100%",
                background: "#eae6fd",
                marginTop: "14px",
                borderRadius: "36%",
                color: "#5b44b9",
              }}
            >
              {Data2.length}
            </a>
            Improtant
          </span>

          <span
            style={{ color: "black", marginLeft: "130px", fontSize: "20px" }}
            onClick={() => {
              setshow(false);
              setshow1(false);
              setshow2(true);
              setshow3(false);
            }}
          >
            <a
              style={{
                marginRight: "9px",
                width: "100%",
                background: "#eae6fd",
                marginTop: "14px",
                borderRadius: "36%",
                color: "#5b44b9",
              }}
            >
              {" "}
              20{" "}
            </a>
            Notes
          </span>
          <span
            style={{ color: "black", marginLeft: "130px", fontSize: "20px" }}
            onClick={() => {
              setshow(false);
              setshow1(false);
              setshow2(false);
              setshow3(true);
            }}
          >
            Links
          </span>
        </div>
        <div style={{ borderBottom: "1px solid gray", marginTop: "20px" }}>
          {" "}
        </div>
      </div>

      <div style={{ marginLeft: "260px" }}>
        {show && <TRANG1 Data1={Data1} />}
        {/* <Chinhnh/> */}
        {show1 && <TRANG2 Data2={Data2} />}
        {show2 && <TRANG3 />}
        {show3 && <TRANG4 />}
      </div>
    </div>
  );
};

export default VatTu;
