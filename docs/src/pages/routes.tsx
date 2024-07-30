import { ReactNode, Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Buttons = lazy(() => import("./Buttons"));
const Media = lazy(() => import("./Media"));
const Avatar = lazy(() => import("./Avatars"));
const Dropdown = lazy(() => import("./Dropdowns"));
const Forms = lazy(() => import("./Inputs"));
const Badges = lazy(() => import("./Badges"));
const Cards = lazy(() => import("./Cards"));
const Modals = lazy(() => import("./Modals"));
const Tables = lazy(() => import("./tables/page"));
const Accordion = lazy(() => import("./Accordion"));
const Select = lazy(() => import("./Select"));
const Skeleton = lazy(() => import("./Skeleton"));

// eslint-disable-next-line react-refresh/only-export-components

type Route = {
  path: string;
  component: ReactNode;
};

export const ROUTES = [
  {
    path: "/buttons",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Buttons />
      </Suspense>
    ),
  },
  {
    path: "/media",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Media />
      </Suspense>
    ),
  },
  {
    path: "/avatar",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Avatar />
      </Suspense>
    ),
  },
  {
    path: "/dropdown",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dropdown />
      </Suspense>
    ),
  },
  {
    path: "/forms",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Forms />
      </Suspense>
    ),
  },
  {
    path: "/badges",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Badges />
      </Suspense>
    ),
  },
  {
    path: "/cards",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Cards />
      </Suspense>
    ),
  },
  {
    path: "/modals",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Modals />
      </Suspense>
    ),
  },
  {
    path: "/tables",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Tables />
      </Suspense>
    ),
  },
  {
    path: "/accordion",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Accordion />
      </Suspense>
    ),
  },
  {
    path: "/select",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Select />
      </Suspense>
    ),
  },
  {
    path: "/skeleton",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Skeleton />
      </Suspense>
    ),
  },
  {
    path: "*",
    component: <Navigate to={"/buttons"} />,
  },
] satisfies Route[];
