import axios from "axios";
import { useState, useEffect } from "react";

const Avatar = () => {
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState();
  const [titleInputValue, setTitleInputValue] = useState("");
  localStorage.getItem("post");

  const params = {};

  // const url = `http://localhost:5000/user`;
  const url = `https://backendtodolist.onrender.com/user/`;

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(url, params);
      setPosts(res);
    };
    getPosts();
  }, []);

  const handleInput = (e) => {
    setTitleInputValue(e.target.files[0]);
  };

  const addPost = async () => {
    const post = { avatar };
    await axios.post(`${url}/upload`, post);
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

  if (posts.length === 0)
    return (
      <h2 style={{ marginLeft: "45%" }}> there are no post in the Database </h2>
    );
  return (
    <>
      <div className="container" style={{ marginLeft: "15%" }}>
        <h2> there are {posts.length} post in the Database </h2>
        <input
          type="file"
          placeholder="please enter..."
          accept="/upload"
          onChange={handleInput}
          // value={titleInputValue}
        />
        <button onClick={addPost} className="btn btn-primary btn-sm">
          Add Post
        </button>

        <table className="table" style={{ marginLeft: "10%" }}>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <img
                  src={post.avatar}
                  alt=""
                  style={{ height: 100, width: 100, borderRadius: "50%" }}
                />
                <td>
                  <button
                    style={{
                      margin: 15,
                      backgroundColor: "#EBE8FD",
                      color: "#5C42C3",
                      borderRadius: 20,
                      borderColor: "#5C42C3",
                    }}
                    onClick={() => handleUpdate(post)}
                    className="btn btn-info btn-sm"
                    value={titleInputValue}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    style={{
                      margin: 15,
                      backgroundColor: "#FFE7EB",
                      color: "#BD4452",
                      borderRadius: 20,
                      borderColor: "#BD4452",
                    }}
                    onClick={() => handleDelete(post)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Avatar;
