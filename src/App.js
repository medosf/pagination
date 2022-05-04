import React, { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const postsList = postData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(postData.length / postPerPage);

  useEffect(() => {
    const init = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const resData = await res.json();
      setPostData(resData);
    };
    init();
  }, []);

  return (
    <div className="App">
      <h1>Pagination page : {currentPage} </h1>
      <Posts isLoading={isLoading} postsList={postsList} />
      <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
