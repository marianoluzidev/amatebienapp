// React Router v5 con Ionic
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";
import { Route, Redirect } from "react-router-dom";

import Home from "./pages/home";
import Turnos from "./pages/turnos";
import Admin from "./pages/admin";

export default function App() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/turnos" component={Turnos} exact />
        <Route path="/admin" component={Admin} exact />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
