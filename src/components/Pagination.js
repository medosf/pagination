import { useEffect, useState } from "react";

const Pagination = ({ totalPages, setCurrentPage }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = Array(totalPages)
      .fill()
      .map((i, indx) => 1 + indx);
    setList(arr);
  }, []);

  return (
    <div>
      {list.length > 0 &&
        list.map((item, i) => (
          <button key={i} onClick={() => setCurrentPage(item)}>
            {item}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
