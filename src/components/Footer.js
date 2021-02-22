import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo-footer.png';

const Footer = () => {
  const scrollToTop = () => {
     window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-inner l-container">
          <Link to="/">
            <img className="footer-logo" src={logo} alt="BLOG" />
          </Link>

          <p className="footer-text">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</p>

          <button className="footer-goto-top" onClick={scrollToTop}>TOP</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="l-container">
          <small className="footer-copyright">Copyright©2007-2019 Blog Inc.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
