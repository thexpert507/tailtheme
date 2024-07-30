import {
  Box,
  Title,
  Dropdown,
  Button,
  Badge,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DarkThemeSwitch,
} from "tailtheme/components";
import { FaSearch, FaBacteria, FaEthernet } from "react-icons/fa";
import { useState } from "react";

export default function Dropdowns() {
  return (
    <Box flat full items="start" justify="start" direction="column" gap="2xl">
      <Title size="2xl">Dropdowns</Title>
      <DarkThemeSwitch />

      <Box full items="start" justify="start" direction="column">
        <Title>Base</Title>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="contained" round="md" size="xs">
              Click me
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>

      <Box full items="start" justify="start" direction="column">
        <Title>Checkbox</Title>
        <DropdownsCheckboxComponent />
      </Box>

      <Box full items="start" justify="start" direction="column">
        <Title>Radio Group</Title>
        <DropdownMenuRadioGroupDemo />
      </Box>

      <Box full items="start" justify="start" direction="column">
        <Box>
          <Title>Base</Title>
          <Badge variant="ghost" color="danger" round="full">
            Deprecated
          </Badge>
        </Box>
        <Dropdown
          width="w-40"
          wrapComponent={({ onClick }) => (
            <Button variant="contained" round="md" size="xs" onClick={onClick}>
              Click me
            </Button>
          )}
          options={[
            { icon: <FaSearch />, label: "Option 1", onClick: () => {} },
            { icon: <FaBacteria />, label: "Option 2", onClick: () => {} },
            { icon: <FaEthernet />, label: "Option 3", onClick: () => {} },
          ]}
        />
      </Box>
    </Box>
  );
}

type Checked = DropdownMenuCheckboxItemProps["checked"];
function DropdownsCheckboxComponent() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined" round="sm" size="xs">
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled>
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outlined" round="sm" size="xs">
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
