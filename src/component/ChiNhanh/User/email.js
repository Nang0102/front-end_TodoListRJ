import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const Email = () => {
  const [posts, setPosts] = useState([]);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [loading, setLoading] = useState(true);

  // const url = `http://localhost:5000/user`;
  const url = `https://backendtodolist.onrender.com/user`;

  useEffect(() => {
    setLoading(true);
    const getPosts = async () => {
      const { data: res } = await axios.get(url);
      setPosts(res);
      setLoading(false);
    };
    getPosts();
  }, []);

  const handleInput = (e) => {
    setTitleInputValue(e.target.value);
  };

  const addPost = async () => {
    const post = { email: titleInputValue };
    await axios.post(url, post);
    setPosts([post, ...posts]);
    setTitleInputValue("");
  };

  const handleUpdate = async (post) => {
    const updatePosts = [...posts];
    const updatePost = post;
    let newEmail = prompt(`Update ${post.email}`, post.email);
    await axios.put(url + "/" + post._id, { email: newEmail });
    updatePost.email = newEmail;
    let index = updatePosts.findIndex((obj) => obj.email === post.email);

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
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {loading && <p> Loading ...</p>}
          {!loading && posts.length > 0 && (
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td> {post.email} </td>
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
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};
export default Email;
