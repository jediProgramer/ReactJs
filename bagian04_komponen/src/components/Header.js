//File: scr/components/Header.js
const Header=()=> {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="#" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Tentang</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;