import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>Gh CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a target="_blank" rel="noreferrer">
          Next Js CRM Project
        </a>
      </footer>
    </>
  );
};

export default Layout;
