import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from './routes/routes';
import ScrollToTop from './components/ScrollToTop';

const Routes = () => {
  return (
    <main style={{marginTop: '100px'}}>
      <ScrollToTop>
        <Redirect to="/" />
        <Switch>
          {
            routes.map(({ Layout, Component, path  }) => {
              return (
                <Layout path={path} key={Component}>
                  <Component />
                </Layout>
              )
            })
          } 
        </Switch>
      </ScrollToTop>
    </main>
  )
}

export default Routes;
