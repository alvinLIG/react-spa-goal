import { Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Single from '../views/Posts/Single';
import EditPost from '../views/Posts/edit/EditPost';
import NewPost from '../views/Posts/new/NewPost';
import urlPath from './urlPath'

const routes = [
    {
        Layout: Route,
        Component: NewPost,
        path: urlPath['new']
    },
    {
        Layout: Route,
        Component: EditPost,
        path: urlPath['edit']
    },
    {
        Layout: Route,
        Component: Single,
        path: urlPath['single']
    },
    {
        Layout: Route,
        Component: Home,
        path: urlPath['/']
    },
];

export default routes;
