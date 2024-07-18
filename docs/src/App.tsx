import { ThemeProvider } from "tailtheme/context";
import { ROUTES } from "./pages/routes";
import { Route, BrowserRouter, Routes } from "react-router-dom";
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
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
