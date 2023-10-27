import {
  Box,
  DarkThemeSwitch,
  Nav,
  NavBrand,
  NavItem,
  NavItems,
  Title,
} from "tailtheme/components";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout(props: LayoutProps) {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Nav>
        <NavBrand>
          <Title>Tailtheme Docs</Title>
        </NavBrand>
        <NavItems>
          <NavItem onClick={() => navigate("/")}>Components</NavItem>
        </NavItems>
        <Box full items="center" justify="end" shrink flat paddingX="xl">
          <DarkThemeSwitch />
        </Box>
      </Nav>
      <div className="mt-20 mx-20">{props.children}</div>
    </Fragment>
  );
}
