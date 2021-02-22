import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({
  text = ''
}) => {
  return (
    <div className="breadcrumb">
      <ol className="breadcrumb-list l-container">
        <li className="breadcrumb-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="breadcrumb-item">
          <span>{text}</span>
        </li>
      </ol>
    </div>
  );
}

export default Breadcrumb;
