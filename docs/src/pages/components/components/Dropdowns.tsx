import { Box, Title, Dropdown, Button } from "tailtheme/components";
import { FaSearch, FaBacteria, FaEthernet } from "react-icons/fa";

export function Dropdowns() {
  return (
    <Box flat full items="start" justify="start" direction="column" gap="2xl">
      <Title size="2xl">Dropdowns</Title>

      <Box full items="start" justify="start" direction="column" gap="2xl">
        <Dropdown
          width="w-40"
          wrapComponent={({ onClick }) => (
            <Button variant="contained" round="md" onClick={onClick}>
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
