import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.nav`
  ul {
    display: grid;
    grid-template-columns: 100px 1fr repeat(3, 100px);
    grid-template-rows: 50px;
    column-gap: 1rem;
    align-items: center;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    li {
      height: fit-content;
      border: 1px solid blue;
    }
    a {
      text-decoration: none;
    }
    .logo {
    }
  }
  border: 1px solid red;
`

export default function Nav({}) {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/" className="logo">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </NavStyles>
  )
}
