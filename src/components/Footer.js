function Footer() {
  return (
    <footer className="page-footer cyan">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Fortnite Shop
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
