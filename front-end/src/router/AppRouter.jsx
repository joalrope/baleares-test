import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routes";
import { NotFound } from "../components/pages";

export const AppRouter = () => {
	const { isLoggedIn } = useSelector((state) => state.auth);
	const mode = isLoggedIn ? "private" : "public";
	const role = isLoggedIn ? "admin" : "all";
	console.log(role);

	return (
		<Switch>
			{routes
				.filter(
					(item) =>
						(item.type === "auth" && item.mode === mode) ||
						(item.type === mode && item.role === role)
				)
				.map((route) => {
					if (route.scope === "menu") {
						if (route.redirect) {
							return <Redirect key={route.key} to={route.pathTo} />;
						}
						return (
							<Route
								key={route.key}
								path={route.path}
								component={route.component}
							/>
						);
					} else {
						return (
							<Route key={route.key} path={route.path}>
								<Switch>
									{route.children.map((child) => (
										<Route key={route.key} path={child.path}>
											{child.component}
										</Route>
									))}
								</Switch>
							</Route>
						);
					}
				})}
			<Route component={NotFound} />;
		</Switch>
	);
};
