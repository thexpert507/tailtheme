import { Box, Button, Title } from "tailtheme/components";
import { Buttons } from "./components/Buttons";
import { Switch, useObservable } from "@legendapp/state/react";
import { Media } from "./components/Media";
import { Avatars, Badges, Cards, Dropdowns, Inputs, Modals, Tables } from "./components";

const ROUTES = [
  {
    label: "Botones",
  },
  {
    label: "Media",
  },
  {
    label: "Avatares",
  },
  {
    label: "Dropdowns",
  },
  {
    label: "Inputs",
  },
  {
    label: "Badges",
  },
  {
    label: "Cards",
  },
  {
    label: "Modals",
  },
  {
    label: "Tablas",
  },
] as const;

type Route = (typeof ROUTES)[number]["label"];

export default function ComponentsPage() {
  const route$ = useObservable<Route>("Botones");

  return (
    <Box full items="start" justify="start" direction="column">
      <Title size="3xl">Componentes</Title>
      <Box full items="start" justify="start" paddingY="2xl">
        <Box width="w-1/4" paddingX="2xl" direction="column">
          {ROUTES.map((route) => (
            <Button
              key={route.label}
              onClick={() => route$.set(route.label)}
              fullWidth
              round="sm"
              variant="contained"
              color="primary">
              {route.label}
            </Button>
          ))}
        </Box>
        <Box width="w-3/4" paddingX="2xl">
          <Switch value={route$}>
            {{
              Botones: () => <Buttons />,
              Media: () => <Media />,
              Avatares: () => <Avatars />,
              Dropdowns: () => <Dropdowns />,
              Inputs: () => <Inputs />,
              Badges: () => <Badges />,
              Cards: () => <Cards />,
              Modals: () => <Modals />,
              Tablas: () => <Tables />,
            }}
          </Switch>
        </Box>
      </Box>
    </Box>
  );
}
