import { Route, Routes } from "react-router";
import { HomePages } from "./pages/HomePages";
import { LoginPages } from "./pages/LoginPages";
import { RegisterPages } from "./pages/RegisterPages";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncPreloadProcess } from "./states/isPreload/action";

function App() {
  const { isPreload = false, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        {/* <Loading /> */}
        <Routes>
          <Route path="/*" element={<LoginPages />} />
          <Route path="/register" element={<RegisterPages />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      {/* <Loading /> */}
      <Routes>
        <Route path="/*" element={<HomePages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPages />} />
      </Routes>
    </>
  );
}

export default App;
