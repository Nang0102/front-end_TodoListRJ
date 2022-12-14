import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

function Username() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [RowData, setRowData] = useState([]);
  // var id = localStorage.getItem("Idchu");

  const [ViewEdit, SetEditShow] = useState(false);
  const handleEditShow = () => {
    SetEditShow(true);
  };
  const hanldeEditClose = () => {
    SetEditShow(false);
  };

  const handleEdit = () => {
    console.log("handle edit dkf", id);

    const url = `https://backendtodolist.onrender.com/user/${id}`;
    // const url = `http://localhost:5000/user/${id}`;

    const Credentials = { username, email, avatar };
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

  const [ViewDelete, setDeleteShow] = useState(false);
  const handleDeleteShow = () => {
    setDeleteShow(true);
  };
  const hanldeDeleteClose = () => {
    setDeleteShow(false);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [id, setId] = useState("");

  const GetUser = async () => {
    // setLoading(true);

    const url = `https://backendtodolist.onrender.com/user/${id}`;
    // const url = `http://localhost:5000/user${id}`;

    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    GetUser();
  });

  const handleDelete = () => {
    const url = `https://backendtodolist.onrender.com/user/${id}`;
    // const url = `http://localhost:5000/user${id}`;

    axios
      .delete(url)
      .then((response) => {
        const result = response.data;
        console.log("ress", result);
        alert(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const columns = [
    {
      name: <div style={{ fontSize: "20px" }}>Username </div>,
      selector: (row) => row.username,
    },
    {
      name: <div style={{ fontSize: "20px" }}>Email</div>,
      selector: (row) => row.email,
    },
    {
      name: <div style={{ fontSize: "20px" }}>Avatar</div>,
      selector: (row) => row.avatar,
    },

    {
      name: <div style={{ fontSize: "20px" }}>Actions </div>,

      cell: (row) => {
        return (
          <div style={{ fontSize: "12px" }}>
            <Button
              size="sm"
              variant="danger"
              onClick={() => {
                handleEditShow(
                  setRowData(row),
                  setId(row._id),
                  setAvatar(row.avatar),
                  setUsername(row.username),
                  setEmail(row.email)
                );
              }}
            >
              View
            </Button>
            <Button
              style={{ margin: 25 }}
              onClick={() => {
                handleDeleteShow(
                  setRowData(row),
                  setId(row._id),
                  setAvatar(row.avatar),
                  setUsername(row.username),
                  setEmail(row.email)
                );
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ marginLeft: "260px" }}>
      <h1>User</h1>

      <DataTable
        columns={columns}
        data={Data}
        progressPending={loading}
        fixedHeader
        fixedHeaderScrollHeight="500px"
        highlightOnHover
        pagination
      />

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
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={username}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={email}
                />
              </div>
              <div className="form-group mt-3">
                <label>Avatar</label>
                <input
                  className="form-control"
                  onChange={(e) => setAvatar(e.target.value)}
                  placeholder="Please Enter..."
                  defaultValue={avatar}
                />
              </div>

              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Edit Task
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
    </div>
  );
}

export default Username;
