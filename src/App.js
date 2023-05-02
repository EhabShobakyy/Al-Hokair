// Routes
import { Route, Routes } from "react-router-dom";

// Layouts
import Header from "./Layouts/Header";
// BackGround
import GlobalHeader from "./Component/GlobalComponent/GlobalHeader/GlobalHeader";

// Pages
import Overview from "./Pages/Overview";
import Profile from "./Pages/Profile";
// Chart Page Component Nested Routing
import ChartPage from "./Pages/ChartPage";
import StockChart from "./Component/ChartPage/StockChart/StockChart";
import HisoticalTrading from "./Component/ChartPage/HisoticalTrading/HisoticalTrading";

// Disclosure Page Component Nested Routing
import DiscloserPage from "./Pages/DiscloserPage";
import Disclosure from "./Component/DisclosurePage/DisclosureComponent/DisclosureComponent";
import News from "./Component/DisclosurePage/NewsComponent/News";
import CalendarComp from "./Component/DisclosurePage/CalendarComponent/CalendarComp";
import AnalystEstimates from "./Component/DisclosurePage/analystEstimatesComponent/AnalystEstimates";

// Board & Management Component Page Nested Routing
import BoardManagementPage from "./Pages/BoardManagementPage";
import Board from "./Component/BoardManagementPage/BoardComponent/Board";
import BoardDirectors from "./Component/BoardManagementPage/BoardDirectors/BoardDirectors";
import Excutives from "./Component/BoardManagementPage/Excutives/Excutives";
import Salaries from "./Component/BoardManagementPage/Salaries/Salaries";
import PersonalDetails from "./Component/BoardManagementPage/PersonDetails/PersonalDetals";

// Corporate Action component Page Nested Routing
import CorporateActionPage from "./Pages/CorporateActionPage";
import CapitalChange from "./Component/CorporateActionPage/CapitalChange/CapitalChange";
import HistoricalDivindes from "./Component/CorporateActionPage/HistoricalDivindes/HistoricalDivindes";
import RecentChange from "./Component/CorporateActionPage/RecentChange/RecentChange";
import RecentDivindes from "./Component/CorporateActionPage/RecentDivindes/RecentDivindes";

// Financial Ratios Page
import FinancialRatiosPage from "./Pages/FinancialRatiosPage";
// Financial Statments Page
import FinancialStatementsPage from "./Pages/FinancialStatements";
const App = () => {
  return (
    <>
      <Header />
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        {/* Chart Page Routing */}
        <Route path="/ChartPage" element={<ChartPage />}>
          <Route path="stockChart" element={<StockChart />} />
          <Route path="historicalTrading" element={<HisoticalTrading />} />
        </Route>
        {/* Discloser Page Routing */}
        <Route path="DiscloserPage" element={<DiscloserPage />}>
          <Route path="discloser" element={<Disclosure />} />
          <Route path="news" element={<News />} />
          <Route path="calendar" element={<CalendarComp />} />
          <Route path="analystEstimates" element={<AnalystEstimates />} />
        </Route>
        {/* Board & Management Page Routing */}
        <Route path="BoardManagementPage" element={<BoardManagementPage />}>
          <Route path="Board" element={<Board />} />
          <Route path="Excutives" element={<Excutives />} />
          <Route path="Salaries" element={<Salaries />} />
          <Route path="BoardDirectors" element={<BoardDirectors />} />
        </Route>
        <Route
          path="/BoardManagementPage/Excutives/:individualID"
          exact
          element={<PersonalDetails />}
        />
        <Route
          path="/BoardManagementPage/Board/:individualID"
          exact
          element={<PersonalDetails />}
        />
        {/* Corporate Actions Page Routing */}
        <Route path="corporateActions" element={<CorporateActionPage />}>
          <Route path="CapitalChange" element={<CapitalChange />} />
          <Route path="HistoricalDivindes" element={<HistoricalDivindes />} />
          <Route path="RecentChange" element={<RecentChange />} />
          <Route path="RecentDivindes" element={<RecentDivindes />} />
        </Route>
        {/* Financail Ratios Page  */}
        <Route path="FinancialRatiosPage" element={<FinancialRatiosPage />} />
        {/* Financail Statemnts Page */}
        <Route
          path="financialStatments"
          element={<FinancialStatementsPage />}
        />
      </Routes>
    </>
  );
};

export default App;
