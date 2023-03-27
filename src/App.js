import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import MainPage from "./components/pages/Main/MainPage";
import PolicyPage from "./components/pages/Policy/PolicyPage";
import PolicyMoneyChoicePage from "./components/pages/Policy/PolicyMoneyChoicePage";
import PolicyMoneyPage from "./components/pages/Policy/PolicyMoneyPage";
import PolicyOneChoicePage from "./components/pages/Policy/PolicyOneChoicePage";
import PolicyPregnantPage from "./components/pages/Policy/PolicyPregnantPage";
import EmergencyPage from "./components/pages/SideBtn/EmergencyPage";
import MomDiaryPage from "./components/pages/MomDiary/MomDiaryPage";
import MomDiaryWritePage from "./components/pages/MomDiary/MomDiaryWritePage";
import MomDiaryMapPage from "./components/pages/MomDiary/MomDiaryMapPage";
import MomDiaryChartPage from "./components/pages/MomDiary/MomDiaryChartPage";
import MyProfilePage from "./components/pages/MyProfile/MyProfilePage";
import BabyDiaryPage from "./components/pages/BabyDiary/BabyDiaryPage";
import BabyDiaryWritePage from "./components/pages/BabyDiary/BabyDiaryWritePage";
import BabyDiaryChartPage from "./components/pages/BabyDiary/BabyDiaryChartPage";
import PolicyOne1Page from "./components/pages/Policy/PolicyOne1Page";
import PolicyOne2Page from "./components/pages/Policy/PolicyOne2Page";
import PolicyOne3Page from "./components/pages/Policy/PolicyOne3Page";
import PolicyOne4Page from "./components/pages/Policy/PolicyOne4Page";
import PolicyOne5Page from "./components/pages/Policy/PolicyOne5Page";
import TipPage from "./components/pages/Tip/TipPage";
import LaborPage from "./components/pages/Labor/LaborPage";
import LoginPage from "./components/pages/Account/LoginPage";
import JoinPage from "./components/pages/Account/JoinPage";
import LaborHelpPage from "./components/pages/Labor/LaborHelpPage";
import CalendarMain from "./components/pages/Calendar/CalendarMain";
import InspectStart from "./components/pages/Inspect/InspectStart";
import InspectClick from "./components/pages/Inspect/InspectClick/InspectClick";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Main" element={<MainPage />} />
      <Route path="/Policy" element={<PolicyPage />} />
      <Route path="/PolicyMoneyChoice" element={<PolicyMoneyChoicePage />} />
      <Route path="/PolicyMoney" element={<PolicyMoneyPage />} />
      <Route path="/PolicyOneChoice" element={<PolicyOneChoicePage />} />
      <Route path="/Emergency" element={<EmergencyPage />} />
      <Route path="/MomDiary" element={<MomDiaryPage />} />
      <Route path="/MomDiaryWrite" element={<MomDiaryWritePage />} />
      <Route path="/MomDiaryMap" element={<MomDiaryMapPage />} />
      <Route path="/MomDiaryChart" element={<MomDiaryChartPage />} />
      <Route path="/MyProfile" element={<MyProfilePage />} />
      <Route path="/BabyDiary" element={<BabyDiaryPage />} />
      <Route path="/BabyDiaryWrite" element={<BabyDiaryWritePage />} />
      <Route path="/BabyDiaryChart" element={<BabyDiaryChartPage />} />
      <Route path="/PolicyPregnant" element={<PolicyPregnantPage />} />
      <Route path="/PolicyOne1" element={<PolicyOne1Page />} />
      <Route path="/PolicyOne2" element={<PolicyOne2Page />} />
      <Route path="/PolicyOne3" element={<PolicyOne3Page />} />
      <Route path="/PolicyOne4" element={<PolicyOne4Page />} />
      <Route path="/PolicyOne5" element={<PolicyOne5Page />} />
      <Route path="/Tip" element={<TipPage />} />
      <Route path="/Labor" element={<LaborPage />} />
      <Route path="/Join" element={<JoinPage />} />
      <Route path="/LaborHelp" element={<LaborHelpPage />} />
      <Route path="/Calendar" element={<CalendarMain/>} />
      <Route path="/Inspect" element={<InspectStart />} />
      <Route path="/Ins_click" element={<InspectClick />} />
    </Routes>
  );
}
export default App;
