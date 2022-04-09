import { Routes, Route, Navigate } from 'react-router-dom';
import { MainScreen } from '../pages/MainScreen';

import { SignUp } from '../pages/SignUp';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/mainscreen" replace />} />
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mainscreen" element={<MainScreen />} />
    </Routes>
  );
}
