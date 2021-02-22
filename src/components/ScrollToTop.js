import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });

    return () => {
      unlisten();
    }

  }, [history]);

  return <>{children}</>;
}

export default withRouter(ScrollToTop);
