import axios from "axios";
import { useState, useEffect } from "react";

import { Button, Modal } from "react-bootstrap";
import Pagination from "./pagination";

const Avatar = () => {
  const [posts, setPosts] = useState([]);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalRows: 21,
  });

  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
  });
  // const url = `http://localhost:5000/user`;
  const url = `https://backendtodolist.onrender.com/user`;

  useEffect(() => {
    const getPosts = async () => {
      const { data: res, pagination } = await axios.get(url);
      setPosts(res);
      setPagination(pagination);
    };
    getPosts();
  }, [filter]);

  function handlepageChange(newPage) {
    console.log("New Page:", newPage);
    setFilter({
      ...filter,
      page: newPage,
    });
  }

  const handleInput = (e) => {
    setTitleInputValue(e.target.value);
  };

  // const addPost = async () => {
  //   const post = { avatar: titleInputValue };
  //   await axios.post(url, post);
  //   setPosts([post, ...posts]);
  //   setTitleInputValue("");
  // };
  const addPost = async () => {
    const post = { avatar: "New Post", body: "new" };
    await axios.post(`${url}/upload/avatar`, post);
    setPosts([post, ...posts]);
  };

  const handleUpdate = async (post) => {
    const updatePosts = [...posts];
    const updatePost = post;
    let newavatar = prompt(`Update ${post.avatar}`, post.avatar);
    await axios.put(url + "/" + post._id, { avatar: newavatar });
    updatePost.avatar = newavatar;
    let index = updatePosts.findIndex((obj) => obj.avatar === post.avatar);

    updatePosts.splice(index, 1, updatePost);
    setPosts(updatePosts);
  };

  const handleDelete = async (post) => {
    await axios.delete(url + "/" + post._id + post);
    setPosts(posts.filter((p) => p._id !== post._id));
  };

  if (posts.length === 0) return <h2> there are no post in the Database </h2>;
  return (
    <>
      <div className="container">
        <h2> there are {posts.length} post in the Database </h2>
        <input
          placeholder="please enter..."
          onChange={handleInput}
          value={titleInputValue}
        />
        <button onClick={addPost} className="btn btn-primary btn-sm">
          Add Post
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>avatar</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <td> {post.avatar} </td>
                <td>
                  <button
                    onClick={() => handleUpdate(post)}
                    className="btn btn-info btn-sm"
                    value={titleInputValue}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <Pagination
              pagination={pagination}
              onPageChange={handlepageChange}
            />
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Avatar;
