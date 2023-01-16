import "./pagination.css";
const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-layout">
      {pages.map((item, idx) => (
        <button
          key={idx}
          className={`${
            item === currentPage ? "pagination pagination-active" : "pagination"
          } `}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
