import { React, useState, useEffect } from "react";
import axios from "axios";
const Avatar = () => {
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    const Avatar = async () => {
      try {
        const res = await axios.get(
          "https://backendtodo123.herokuapp.com/user"
        );
        setAvatar(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    Avatar();
  });
  return (
    <div>
      <div>
        {avatar.data.map((item, index) => {
          return (
            <div key={index}>
              <p> Avatar: {`url(${item.avatar})`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Avatar;
