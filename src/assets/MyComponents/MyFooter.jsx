const MyFooter = () => (
  <footer
    fixed="bottom"
    expand="lg"
    className="d-flex bg-dark mt-2 sticky-bottom"
  >
    <span className="text-white m-auto p-2">
      <strong>EPICODE</strong> - Copyright {new Date().getFullYear()}
    </span>
  </footer>
);

export default MyFooter;
