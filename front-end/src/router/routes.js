import { Home, Dashboard, Login, Register } from '../components/pages/index';

export const routes = [
  {
    key: '/home',
    path: '/home',
    type: 'public',
    name: 'Inicio',
    scope: 'menu',
    component: Home,
  },
  {
    key: '/login',
    path: '/login',
    type: 'auth',
    mode: 'public',
    name: 'Ingresar',
    scope: 'menu',
    component: Login,
  },
  {
    key: '/register',
    path: '/register',
    type: 'auth',
    mode: 'public',
    name: 'Registrarse',
    scope: 'menu',
    component: Register,
  },
  {
    key: '/upload',
    path: '/upload',
    type: 'private',
    name: 'Imagenes',
    scope: 'menu',
    component: Home,
  },
  {
    key: '/dashboard',
    path: '/dashboard',
    type: 'private',
    name: 'dashboard',
    role: ['admin'],
    scope: 'menu',
    component: Dashboard,
  },
  {
    key: '/logout',
    path: '/logout',
    type: 'auth',
    mode: 'private',
    name: 'Salir',
    scope: 'menu',
  },
  {
    key: '/',
    path: '/',
    type: 'public',
    scope: 'menu',
    pathTo: '/home',
  },
  /*{
    key: '/',
    path: '/',
    type: 'private',
    scope: 'menu',
    pathTo: '/home',
    redirect: true,
  }, */
];

const mode = sessionStorage.isLogged ? 'private' : 'public';
const role = 'admin';
console.log(role);

export const routes2 = () =>
  routes.filter(
    (item) =>
      ((item.type === 'auth' && item.mode === mode) || (item.type === mode && !item.redirect)) &&
      (!item.role || item.role.includes(role))
  );

console.log(routes2());
