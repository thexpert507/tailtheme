import { ThemeProvider } from "tailtheme/context";
import { ROUTES } from "./pages/routes";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
