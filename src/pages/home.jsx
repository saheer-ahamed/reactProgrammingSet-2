import "./home.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home({ setShowRowData }) {
  const selectRef = useRef();
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();

  const optionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSubmit = (e) => {
    e.preventDefault();


    const filteredData = rowData.filter(
      (each) => {
        return each?.userId === Number(selectRef.current.value)
      }
    );

    setShowRowData(filteredData);

    navigate("/grid");
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((result) => {
          setRowData(result.data);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <span>
        <strong>Choose User Id</strong>
      </span>
      <form onSubmit={handleSubmit} className="SelectionForm">
        <select ref={selectRef}>
          {optionArray.map((each) => (
            <option key={each}>{each}</option>
          ))}
        </select>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
