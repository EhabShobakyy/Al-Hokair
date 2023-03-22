// Routes
import { Route, Routes } from "react-router-dom";

// Layouts
import Header from "./Layouts/Header";

// Pages
import Overview from "./Pages/Overview";
import Profile from "./Pages/Profile";
import DiscloserPage from "./Pages/DiscloserPage";
import Disclosure from "./Component/DisclosurePage/DisclosureComponent/DisclosureComponent";
import News from "./Component/DisclosurePage/News/News";
import CalendarComp from "./Component/DisclosurePage/Calendar/CalendarComp";
import GlobalHeader from "./Component/GlobalComponent/GlobalHeader/GlobalHeader";

const App = () => {
  return (
    <>
      <Header />
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="DiscloserPage" element={<DiscloserPage />}>
          <Route path="discloser" element={<Disclosure />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
