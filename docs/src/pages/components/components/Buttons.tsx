import { Box, Button, Title } from "tailtheme/components";

export function Buttons() {
  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Botones</Title>

      <Box direction="column" items="start">
        <Title size="xl">Variantes</Title>
        <Box>
          <Button color="primary" variant="text">
            Text
          </Button>
          <Button color="primary">Base</Button>
          <Button color="primary" variant="outlined">
            Outlined
          </Button>
          <Button color="primary" variant="contained">
            Contained
          </Button>
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="xl">Tamaños</Title>
        <Box>
          <Button color="primary" variant="contained" size="3xs">
            3xs
          </Button>
          <Button color="primary" variant="contained" size="2xs">
            2xs
          </Button>
          <Button color="primary" variant="contained" size="xs">
            xs
          </Button>
          <Button color="primary" variant="contained" size="sm">
            sm
          </Button>
          <Button color="primary" variant="contained" size="md">
            md
          </Button>
          <Button color="primary" variant="contained" size="lg">
            lg
          </Button>
          <Button color="primary" variant="contained" size="xl">
            xl
          </Button>
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="xl">Disabled</Title>
        <Box>
          <Button color="primary" variant="contained" disabled>
            Base
          </Button>
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="xl">Colores</Title>
        <Box>
          <Button color="primary" variant="contained">
            Primary
          </Button>
          <Button color="gray" variant="contained">
            Gray
          </Button>
          <Button color="red" variant="contained">
            Red
          </Button>
          <Button color="yellow" variant="contained">
            Yellow
          </Button>
          <Button color="green" variant="contained">
            Green
          </Button>
          <Button color="violet" variant="contained">
            Violet
          </Button>
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="xl">Redondeado</Title>
        <Box>
          <Button color="primary" variant="contained" round="none">
            none
          </Button>
          <Button color="primary" variant="contained" round="sm">
            sm
          </Button>
          <Button color="primary" variant="contained" round="md">
            md
          </Button>
          <Button color="primary" variant="contained" round="lg">
            lg
          </Button>
          <Button color="primary" variant="contained" round="full">
            full
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
