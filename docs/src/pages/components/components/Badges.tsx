import { Badge, Box, Title } from "tailtheme/components";
import { COLORS } from "tailtheme/utils";

const colors: COLORS[] = ["accent", "danger", "info", "primary", "success", "warning"];

export function Badges() {
  return (
    <Box flat full items="start" justify="start" direction="column" gap="4xl">
      <Title size="2xl">Badges</Title>

      <Box>
        <Badge> Base badge </Badge>
      </Box>

      <Box direction="column" items="start" >
        <Title size="lg">Colors</Title>
        <Box direction="row" gap="2xl">
          {colors.map((color) => (
            <Badge color={color} key={color}>
              {color}
            </Badge>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
