import { Suspense, lazy } from "react";

const Components = lazy(() => import("./components/ComponentsPage"));

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTES = [
  {
    path: "/",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Components />
      </Suspense>
    ),
  },
];
