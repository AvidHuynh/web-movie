import { Home, Movie, People, TVShow } from './../../pages';

const publicRouters = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/movie',
        component: Movie,
    },
    {
        path: '/People',
        component: People,
    },
    {
        path: '/tvshow',
        component: TVShow,
    },
];

export { publicRouters };
