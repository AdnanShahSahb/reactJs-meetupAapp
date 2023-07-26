import { Route, Routes } from "react-router-dom";
import Layouting from "./components/layouts/Layout";

import AllMeetupsing from "./pages/AllMeetups";
import Favoring from "./pages/Favs";
import NewMeetupsing from "./pages/NewMeetups";


function App() {
  return (
    <div>
      <Layouting>
      <Routes>

        <Route path="/reactJs-meetupApp" element={<AllMeetupsing />} />
        <Route path="/faving" element={<Favoring />} />
        <Route path="/newing" element={<NewMeetupsing />} />
      </Routes>
      </Layouting>
    </div>
  );
}

export default App;
