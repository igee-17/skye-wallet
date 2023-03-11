import { Landing, Register, Error } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SendMoney,
  MakeTransfer,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="make-transfer" element={<MakeTransfer />} />
          <Route path="send-money" element={<SendMoney />} />
          <Route path="send-money/:id" element={<SendMoney />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
