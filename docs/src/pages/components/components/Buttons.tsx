import { Box, Button, Title } from "tailtheme/components";

export function Buttons() {
  const colors = ["primary", "accent", "danger", "warning", "success", "info"] as const;
  const rounds = ["none", "sm", "md", "lg", "full"] as const;
  const sizes = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl"] as const;

  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Botones</Title>

      <Box direction="column" items="start">
        <Title size="xl">Variantes</Title>
        <Box>
          <Button color="primary" variant="text">
            Text
          </Button>
          <Button color="primary" variant="outlined">
            Outlined
          </Button>
          <Button color="primary" variant="contained">
            Contained
          </Button>
          <Button color="primary" variant="ghost">
            Ghost
          </Button>
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="xl">Tamaños</Title>
        <Box>
          {sizes.map((size) => (
            <Button color="primary" variant="contained" key={size} size={size} round="sm">
              {size}
            </Button>
          ))}
        </Box>
        <Box>
          {sizes.map((size) => (
            <Button color="accent" variant="contained" key={size} size={size} round="sm">
              {size}
            </Button>
          ))}
        </Box>
        <Box>
          {sizes.map((size) => (
            <Button color="danger" variant="contained" key={size} size={size} round="sm">
              {size}
            </Button>
          ))}
        </Box>
        <Box>
          {sizes.map((size) => (
            <Button color="warning" variant="contained" key={size} size={size} round="sm">
              {size}
            </Button>
          ))}
        </Box>
        <Box>
          {sizes.map((size) => (
            <Button color="success" variant="contained" key={size} size={size} round="sm">
              {size}
            </Button>
          ))}
        </Box>
        <Box>
          {sizes.map((size) => (
            <Button color="info" variant="contained" key={size} size={size} round="sm">
              {size}
            </Button>
          ))}
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="xl">Disabled</Title>
        <Box direction="column">
          <Box>
            {colors.map((color) => (
              <Button color={color} variant="contained" key={color} round="sm" disabled>
                {color}
              </Button>
            ))}
          </Box>
          <Box>
            {colors.map((color) => (
              <Button color={color} variant="outlined" key={color} round="sm" disabled>
                {color}
              </Button>
            ))}
          </Box>
          <Box>
            {colors.map((color) => (
              <Button color={color} variant="ghost" key={color} round="sm" disabled>
                {color}
              </Button>
            ))}
          </Box>
          <Box>
            {colors.map((color) => (
              <Button color={color} variant="text" key={color} round="sm" disabled>
                {color}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="xl">Colores</Title>
        <Box>
          {colors.map((color) => (
            <Button color={color} variant="contained" key={color} round="sm">
              {color}
            </Button>
          ))}
        </Box>
        <Box>
          {colors.map((color) => (
            <Button color={color} variant="ghost" key={color} round="sm">
              {color}
            </Button>
          ))}
        </Box>
        <Box>
          {colors.map((color) => (
            <Button color={color} variant="outlined" key={color} round="sm">
              {color}
            </Button>
          ))}
        </Box>
        <Box>
          {colors.map((color) => (
            <Button color={color} variant="text" key={color} round="sm">
              {color}
            </Button>
          ))}
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="xl">Redondeado</Title>
        <Box>
          {rounds.map((round) => (
            <Button color="primary" variant="contained" key={round} round={round}>
              {round}
            </Button>
          ))}
        </Box>
        <Box>
          {rounds.map((round) => (
            <Button color="accent" variant="contained" key={round} round={round}>
              {round}
            </Button>
          ))}
        </Box>
        <Box>
          {rounds.map((round) => (
            <Button color="danger" variant="contained" key={round} round={round}>
              {round}
            </Button>
          ))}
        </Box>
        <Box>
          {rounds.map((round) => (
            <Button color="warning" variant="contained" key={round} round={round}>
              {round}
            </Button>
          ))}
        </Box>
        <Box>
          {rounds.map((round) => (
            <Button color="success" variant="contained" key={round} round={round}>
              {round}
            </Button>
          ))}
        </Box>
        <Box>
          {rounds.map((round) => (
            <Button color="info" variant="contained" key={round} round={round}>
              {round}
            </Button>
          ))}
        </Box>
      </Box>
      <div className="w-full h-40"></div>
    </Box>
  );
}
