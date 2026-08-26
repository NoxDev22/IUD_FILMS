export function Pagination({ currentPage, totalPages, onPageChange, limit }) {
  const pages = Math.ceil(Number(totalPages) / Number(limit)) || 0;

  return (
    <div className="pagination" aria-label="Navegación de páginas">
      <button
        className="pagination_btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &laquo; Anterior
      </button>
      <p className="pagination_info">
        Pagina
        <span>{currentPage}</span>
        de
        <span>{pages}</span>
      </p>

      <button
        className="pagination_btn"
        disabled={Number(currentPage) === pages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente &raquo;
      </button>
    </div>
  );
}
