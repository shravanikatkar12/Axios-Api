import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailView() {
  const { id } = useParams();
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setRowData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h2>Details for ID: {id}</h2>
      {rowData ? (
        <div>
          <ul>
            {Object.entries(rowData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailView;