import React from 'react'

const Navbar = () => {
  return (
    <div style={{backgroundColor:"red"}}>
        <div className="container" >
            <div className="row" >
                <div className="col col-12 col sm-12 col md-12 col lg-12 col xl-12 col xxl-12">
      <nav class="navbar navbar-expand-lg bg-body-danger" >
  <div class="container-fluid"  style={{backgroundColor:"red"}}>
    <a class="navbar-brand" href="#">DoseNews</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">Add</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\2">View</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\3">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\4">Delete</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
        </div>
    </div>
  )
}

export default Navbar
