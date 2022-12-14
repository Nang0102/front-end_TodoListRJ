const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const { page, limit, totalRows } = pagination;
  const totalPages = Math.ceil(totalRows / limit);

  function handlepageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <button disabled={page <= 1} onClick={() => handlepageChange(page - 1)}>
        Prev
      </button>
      <button
        disabled={page >= totalPages}
        onClick={() => handlepageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
