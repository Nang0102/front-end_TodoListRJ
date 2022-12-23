/* eslint-disable no-const-assign */
/* eslint-disable no-cond-assign */
import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

function Username() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [RowData, setRowData] = useState([]);
  localStorage.getItem("Data");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userId, setUserId] = useState("");
  const [id, setId] = useState("");

  const GetUser = async () => {
    let url;
    // const url = `http://localhost:5000/user/abc`;
    setLoading(true);
    if ((url = `https://backendtodolist.onrender.com/user`)) {
      axios

        .get(`${url}/${id}`)

        .then((response) => {
          const result = response.data;
          setData(result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    GetUser();
  }, []);

  const [ViewEdit, SetEditShow] = useState(false);
  const handleEditShow = () => {
    SetEditShow(true);
  };
  const hanldeEditClose = () => {
    SetEditShow(false);
  };

  const handleEdit = () => {
    const url = `https://backendtodolist.onrender.com/user`;
    // const url = `http://localhost:5000/user`;
    let Credentials;
    if ((Credentials = { username, email })) {
      console.log("Credentials", Credentials);

      axios
        .put(`${url}/${id}`, Credentials)
        .then((response) => {
          const result = response.data;
          console.log("resUser", result);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if ((Credentials = { avatar })) {
      console.log("Credentials", Credentials);
      const formData = new FormData();

      formData.append("avatar", avatar);
      console.log("formData", formData);
      // formData
      axios
        .put(`${url}/upload/${id}`, formData)
        .then((response) => {
          const result = response.data;

          const { status, message } = result;
          console.log("resultAv", result);
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
    }
  };

  const [ViewDelete, setDeleteShow] = useState(false);
  const handleDeleteShow = () => {
    setDeleteShow(true);
  };
  const hanldeDeleteClose = () => {
    setDeleteShow(false);
  };
  const handleDelete = () => {
    let url;
    if ((url = `https://backendtodolist.onrender.com/user/${id}`)) {
      axios

        .delete(url)

        .then((response) => {
          const result = response.data;
          // setData(result);
          const { status, message } = result;

          console.log("delete", result);
          if (status !== "SUCCESS") {
            alert(message, status);
          } else {
            alert(message);
            window.location.reload();
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
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
      selector: (row) => (
        <img
          style={{ height: 50, width: 50, borderRadius: "50%" }}
          src={row.avatar}
          onError={(event) => {
            event.target.src =
              "https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-white-background-profile-107327860.jpg";
            event.onerror = null;
          }}
          alt=""
        />
      ),
    },

    {
      name: <div style={{ fontSize: "20px" }}>Actions </div>,

      cell: (row) => {
        return (
          <div style={{ fontSize: "12px" }}>
            <Button
              style={{
                backgroundColor: "#EBE8FD",
                color: "#5C42C3",
                borderRadius: 20,
                borderColor: "#5C42C3",
              }}
              size="sm"
              variant="danger"
              onClick={() => {
                handleEditShow(
                  setRowData(row),
                  setId(row._id),
                  setAvatar(row.avatar),
                  setUsername(row.username),
                  setEmail(row.email),
                  setUserId(row.userId)
                );
              }}
            >
              View
            </Button>
            <Button
              style={{
                margin: 18,
                backgroundColor: "#FFE7EB",
                color: "#BD4452",
                borderRadius: 20,
                borderColor: "#BD4452",
              }}
              onClick={() => {
                handleDeleteShow(
                  setRowData(row),
                  setId(row._id),
                  setAvatar(row.avatar),
                  setUsername(row.username),
                  setEmail(row.email),
                  setUserId(row.userId)
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
        style={{ padding: 15 }}
        columns={columns}
        data={Data}
        progressPending={loading}
        fixedHeader
        fixedHeaderScrollHeight="800px"
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
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  placeholder="Please Enter..."
                  // defaultValue={avatar}
                />
              </div>

              <Button
                style={{
                  backgroundColor: "#EBE8FD",
                  color: "#5C42C3",
                  borderRadius: 20,
                  borderColor: "#5C42C3",
                }}
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
                style={{
                  margin: 18,
                  backgroundColor: "#FFE7EB",
                  color: "#BD4452",
                  borderRadius: 20,
                  borderColor: "#BD4452",
                }}
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
