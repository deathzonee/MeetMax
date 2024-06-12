import { Routes, Route } from "react-router-dom";
import LoginSignUpLayout from "./layout/LoginSignUpLayout";
import LayoutCommon from "./layout/LayoutCommon";
import HomePage from "./page/Home/HomePage";
import RegisterPage from "./page/Auth/RegisterPage";
import LoginPage from "./page/Auth/LoginPage";
import ForgotPage from "./page/Auth/ForgotPage";
import CheckMailPage from "./page/Auth/CheckMailPage";
import CommunityPage from "./page/Community/CommunityPage";
import CheckMailForgotPage from "./page/Auth/CheckMailForgotPage";
import ProfilePage from "./page/Profile/ProfilePage";
import ReactModal from "react-modal";
import FollowingPage from "./page/Community/FollowingPage";
import PeopleLikePage from "./page/Community/PeopleLikePage";
import FollowerPage from "./page/Community/FollowerPage";
import ExplorePage from "./page/Explore/ExplorePage";
import NotFoundPage from "./page/NotFoundPage";
import ExploreAddPage from "./page/Explore/ExploreAddPage";
import ExploreDetailPage from "./page/Explore/ExploreDetailPage";
import Message from "./page/Message/Message";

ReactModal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route element={<LoginSignUpLayout />}>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/forgot" element={<ForgotPage />}></Route>
        <Route path="/users/:token" element={<CheckMailPage />}></Route>
        <Route
          path="/users/:token/:password"
          element={<CheckMailForgotPage />}
        ></Route>
      </Route>

      <Route element={<LayoutCommon />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="community" element={<CommunityPage />}>
          <Route path="" element={<FollowerPage />} />
          <Route path="following" element={<FollowingPage />} />
          <Route path="everybody" element={<PeopleLikePage />} />
        </Route>
        <Route path="/my-profile" element={<ProfilePage />}></Route>
        <Route path="/explore" element={<ExplorePage />}></Route>
        <Route path="/explore/:id" element={<ExploreDetailPage />}></Route>
        <Route path="/explore/add-new" element={<ExploreAddPage />}></Route>
        <Route path="/message" element={<Message />}></Route>
      </Route>

      <Route path="/*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
