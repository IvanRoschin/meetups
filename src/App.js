import "./App.css";
import { AllMeetupsPage } from "./pages/AllMeetups";
import { FavoritesPage } from "./pages/Favortites";
import { NewMeetPage } from "./pages/NewMeetup";
import { Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={AllMeetupsPage} exact />
        <Route path="/favorites" Component={FavoritesPage} />
        <Route path="/new-meet" Component={NewMeetPage} />
      </Routes>
    </Layout>
  );
}

export default App;
