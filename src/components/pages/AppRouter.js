import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Sidebar } from "../ui/Sidebar";
import { AboutScreen } from "./AboutScreen";
// import { ContactScreen } from "./ContactScreen";
import { HomeScreen } from "./HomeScreen";
import { ProjectsScreen } from "./ProjectsScreen";
import { ServicesScreen } from "./ServicesScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div className="flex md:min-h-screen h-screen">
        <Sidebar />

        <div className="w-full md:w-3/4 lg:w-4/5 xl:w-5/6 bg-gray-200">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/projects" component={ProjectsScreen} />
            {/* <Route exact path="/contact" component={ContactScreen} /> */}
            <Route exact path="/services" component={ServicesScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
