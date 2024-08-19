import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="https://www.liverpoolfc.com/liverpoolfc_crest.png" width="60px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/Home" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/Player" className="nav-link active" aria-current="page">Player</Link>
              </li>
              <li className="nav-item">
                <Link href="/Shopping" className="nav-link active" aria-current="page">Shopping</Link>
              </li>

            </ul>
            <div className="d-lex">
              <Link href="/signin">
                <button type="button" class="btn btn-outline-secondary">sign in</button>
              </Link>


            </div>
          </div>
        </div>
      </nav>

      <div id="carouselExampleIndicators" class="carousel slide">
        <center>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://i.ytimg.com/vi/RlKyOejFHgk/maxresdefault.jpg"></img>
            </div>
          </div></center>
      </div>

      <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src="https://i.ytimg.com/vi/RlKyOejFHgk/maxresdefault.jpg" className="img-thumbnail" alt="..." />
                <h5 className="card-title">Home</h5>
                <p className="card-text">Home Page</p>
                <a href="#" className="btn btn-primary">Go Home</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <img src="https://www.thisisanfield.com/wp-content/uploads/2023-08-19-110-Liverpool_Bournemouth-1.jpg" className="img-thumbnail" alt="..." />
                <h5 className="card-title">Player</h5>
                <p className="card-text">Players</p>
                <a href="/Player" className="btn btn-primary">Go Player</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <img src="https://www.illuma.co.uk/media/case_studies/library/liverpool-fc-club-shop-2.jpg" className="img-thumbnail" alt="..." />
                <h5 className="card-title">Shopping</h5>
                <p className="card-text">Shopping</p>
                <a href="/Shopping" className="btn btn-primary">Go Shopping</a>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
