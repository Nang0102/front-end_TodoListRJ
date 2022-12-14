import React from "react";

import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import moment from "moment";

import DataTable from "react-data-table-component";

import axios from "axios";
function TRANG1({ Data1 }) {
  var idddd = localStorage.getItem("Idchu");
  const [TimKiem, setTimKiem] = useState("");
  const [loading, setLoading] = useState(false);
  const [RowData, SetRowData] = useState([]);
  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false);
  const handleEditShow = () => {
    SetEditShow(true);
  };
  const hanldeEditClose = () => {
    SetEditShow(false);
  };
  //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false);
  const handleDeleteShow = () => {
    SetDeleteShow(true);
  };
  const hanldeDeleteClose = () => {
    SetDeleteShow(false);
  };

  //FOr Delete Model
  const [Viewadd, SetaddShow] = useState(false);
  const handleaddShow = () => {
    SetaddShow(true);
  };
  const hanldeaddClose = () => {
    SetaddShow(false);
  };

  //define the
  const [title, settitle] = useState("");
  const [complete, setcomplete] = useState("");
  const [level, setlevel] = useState("");
  const [description, setdescription] = useState("");
  const [enddate, setenddate] = useState("");
  const [idd, setidd] = useState("");

  const columns = [
    {
      name: <div style={{ fontSize: "18px" }}>Title </div>,
      selector: (row) => row.title,
    },
    {
      name: <div style={{ fontSize: "18px" }}>Complete</div>,
      selector: (row) => row.complete,
    },
    {
      name: <div style={{ fontSize: "18px" }}>Date-Start</div>,
      selector: (row) => moment(row.startdate).format("DD/MM/YYYY"),
    },
    {
      name: <div style={{ fontSize: "18px" }}>Date-End</div>,
      selector: (row) => moment(row.enddate).format("DD/MM/YYYY"),
    },

    {
      name: <div style={{ fontSize: "18px" }}>Level</div>,
      cell: (row) => {
        return (
          <>
            <div style={{ fontSize: "12px" }}>
              <Button size="sm" variant="primary">
                {row.level}
              </Button>
            </div>
          </>
        );
      },
    },
    {
      name: <div style={{ fontSize: "18px" }}>Action</div>,
      cell: (row) => {
        return (
          <>
            <div style={{ fontSize: "12px" }}>
              <Button
                size="sm"
                variant="danger"
                onClick={() => {
                  handleEditShow(
                    SetRowData(row),
                    settitle(row.title),
                    setidd(row._id),
                    setcomplete(row.complete),
                    setdescription(row.description),
                    setenddate(row.enddate),
                    setlevel(row.level)
                  );
                }}
              >
                View
              </Button>

              <Button
                style={{ marginLeft: 25 }}
                size="sm"
                variant="danger"
                onClick={() => {
                  handleDeleteShow(
                    SetRowData(row),
                    settitle(row.title),
                    setidd(row._id),
                    setcomplete(row.complete),
                    setdescription(row.description),
                    setenddate(row.enddate),
                    setlevel(row.level)
                  );
                }}
              >
                Delete
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  function search(rows) {
    return rows.filter((row) => row.name.toLowerCase().indexOf(TimKiem) > -1);
  }

  const handleSubmite = () => {
    const url = "https://backendtodolist.onrender.com/Task";
    let userId = idddd;

    const Credentials = { title, level, description, enddate, userId };
    axios
      .post(url, Credentials)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          alert(message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    const url = `https://backendtodolist.onrender.com/Task/${idd}`;

    const Credentials = { title, complete, level, description, enddate };
    axios
      .put(url, Credentials)
      .then((response) => {
        const result = response.data;
        const { status, message } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          alert(message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = () => {
    const url = `https://backendtodolist.onrender.com/Task/${idd}`;
    axios
      .delete(url)
      .then((response) => {
        const result = response.data;
        const { status, message } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          alert(message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <input  style={{border:"1px solid",borderRadius: '5px!important',margin:"5px",position:"relative",top:"20px",left:"50px"}} placeholder="Tìm Kiếm" value={TimKiem} onChange={(a)=> setTimKiem(a.target.value)} ></input> */}
      {/* <h1>trang 1</h1> */}

      <DataTable
        columns={columns}
        data={Data1}
        progressPending={loading}
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
        pagination
      />

      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          handleaddShow();
        }}
      >
        CREATE
      </Button>

      {/* Modal for Edit  */}
      <div className="model-box-view">
        <Modal
          show={ViewEdit}
          onHide={hanldeEditClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>DETAIL TASK</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <label>Tile</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => settitle(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={title}
                />
              </div>
              <div className="form-group mt-3">
                <label>Complete</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setcomplete(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={complete}
                />
              </div>
              <div className="form-group mt-3">
                <label>Level</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setlevel(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={level}
                />
              </div>
              <div className="form-group mt-3">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={description}
                />
              </div>
              <div className="form-group mt-3">
                <label>End-Date</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setenddate(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={moment(enddate).format("YYYY-MM-DD")}
                />
              </div>

              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Eddit Task
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldeEditClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Modal for delete */}
      <div className="model-box-view">
        <Modal
          show={ViewDelete}
          onHide={hanldeDeleteClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>DETAIL TASK</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h2>ARE YOU SURE</h2>

              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleDelete}
              >
                Delete Task
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldeDeleteClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Modal for add  */}
      <div className="model-box-view">
        <Modal
          show={Viewadd}
          onHide={hanldeaddClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>CREATE TASK</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <label>Tile</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => settitle(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={title}
                />
              </div>
              <div className="form-group mt-3">
                <label>Level</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setlevel(e.target.value)}
                  placeholder="Please Enter..."
                />
              </div>
              <div className="form-group mt-3">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="Please Enter..."
                />
              </div>
              <div className="form-group mt-3">
                <label>End-Date</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setenddate(e.target.value)}
                  placeholder="Please Enter..."
                />
              </div>

              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleSubmite}
              >
                CREATE Task
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldeaddClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
// export  {isToggled};
export default TRANG1;
