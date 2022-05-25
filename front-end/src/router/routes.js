import { Home, Dashboard, Login, Register } from "../components/pages/index";

export const routes = [
	{
		key: "/home",
		path: "/home",
		type: "public",
		name: "Inicio",
		role: "all",
		scope: "menu",
		component: Home,
	},
	{
		key: "/login",
		path: "/login",
		type: "auth",
		mode: "public",
		name: "Ingresar",
		role: "all",
		scope: "menu",
		component: Login,
	},
	{
		key: "/register",
		path: "/register",
		type: "auth",
		mode: "public",
		name: "Registrarse",
		role: "all",
		scope: "menu",
		component: Register,
	},
	{
		key: "/upload",
		path: "/upload",
		type: "private",
		name: "Imagenes",
		role: "all",
		scope: "menu",
		component: Home,
	},
	{
		key: "/dashboard",
		path: "/dashboard",
		type: "private",
		name: "dashboard",
		role: ["Admin"],
		scope: "menu",
		component: Dashboard,
	},
	{
		key: "/logout",
		path: "/logout",
		type: "auth",
		mode: "private",
		name: "Salir",
		scope: "menu",
	},
	{
		key: "/",
		path: "/",
		type: "public",
		scope: "menu",
		pathTo: "/home",
		redirect: true,
	},
	{
		key: "/",
		path: "/",
		type: "private",
		scope: "menu",
		pathTo: "/home",
		redirect: true,
	},
];