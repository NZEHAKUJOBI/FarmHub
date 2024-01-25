import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem link="#" text="Home" />
              <NavItem link="#" text="Link" />
              <DropdownItem />
              <NavItem link="#" text="Disabled" disabled={true} />
            </ul>
            <SearchForm />
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ link, text, disabled }) => {
  return (
    <li className="nav-item">
      <a className={`nav-link ${disabled ? 'disabled' : ''}`} href={link} tabIndex={disabled ? -1 : 0} aria-disabled={disabled}>
        {text}
      </a>
    </li>
  );
};

const DropdownItem = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <DropdownSubItem text="Action" />
        <DropdownSubItem text="Another action" />
        <hr className="dropdown-divider" />
        <DropdownSubItem text="Something else here" />
      </ul>
    </li>
  );
};

const DropdownSubItem = ({ text }) => {
  return (
    <li><a className="dropdown-item" href="#">{text}</a></li>
  );
};

const SearchForm = () => {
  return (
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
};

export default Navbar;
