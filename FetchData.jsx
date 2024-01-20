import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [expandedTextIds, setExpandedTextIds] = useState([]);

  const toggleText = (postId) => {
    setExpandedTextIds((prevIds) =>
      prevIds.includes(postId)
        ? prevIds.filter((id) => id !== postId)
        : [...prevIds, postId]
    );
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Posts</h3>
        <table className="table">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  {expandedTextIds.includes(post.id)
                    ? post.body
                    : post.body.slice(0, 20) + " ..."}
                  {post.body.length > 20 && (
                    <button onClick={() => toggleText(post.id)}>
                      {expandedTextIds.includes(post.id)
                        ? "View Less"
                        : "View More"}
                    </button>
                  )}
                </td>
                <td>
                  <Link to={`/details/${post.id}`}>
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchData;
