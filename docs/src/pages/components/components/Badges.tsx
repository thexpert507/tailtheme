import { Badge, Box, Title } from "tailtheme/components";
import { COLORS } from "tailtheme/utils";

const colors: COLORS[] = ["accent", "danger", "info", "primary", "success", "warning"];

export function Badges() {
  const variants = ["solid", "outlined", "ghost"] as const;
  const rounds = ["none", "sm", "md", "lg", "full"] as const;

  return (
    <Box flat full items="start" justify="start" direction="column" gap="4xl">
      <Title size="2xl">Badges</Title>

      <Box>
        <Badge> Base badge </Badge>
      </Box>

      <Box direction="column" items="start">
        <Title size="lg">Variantes</Title>
        <Box direction="row" gap="2xl">
          {variants.map((variant) => (
            <Badge variant={variant} key={variant}>
              Badge {variant}
            </Badge>
          ))}
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="lg">Colors</Title>
        <Box direction="row" gap="2xl">
          {colors.map((color) => (
            <Badge color={color} key={color}>
              Badge {color}
            </Badge>
          ))}
        </Box>
        <Box direction="row" gap="2xl">
          {colors.map((color) => (
            <Badge color={color} key={color} variant="ghost">
              Badge {color}
            </Badge>
          ))}
        </Box>
        <Box direction="row" gap="2xl">
          {colors.map((color) => (
            <Badge color={color} key={color} variant="outlined">
              Badge {color}
            </Badge>
          ))}
        </Box>
      </Box>

      <Box direction="column" items="start">
        <Title size="lg">Rounds</Title>
        <Box direction="row" gap="2xl">
          {rounds.map((round) => (
            <Badge round={round} key={round} color="primary">
              Badge {round}
            </Badge>
          ))}
        </Box>
        <Box direction="row" gap="2xl">
          {rounds.map((round) => (
            <Badge round={round} key={round} color="accent">
              Badge {round}
            </Badge>
          ))}
        </Box>
        <Box direction="row" gap="2xl">
          {rounds.map((round) => (
            <Badge round={round} key={round} color="danger">
              Badge {round}
            </Badge>
          ))}
        </Box>
        <Box direction="row" gap="2xl">
          {rounds.map((round) => (
            <Badge round={round} key={round} color="warning">
              Badge {round}
            </Badge>
          ))}
        </Box>
        <Box direction="row" gap="2xl">
          {rounds.map((round) => (
            <Badge round={round} key={round} color="success">
              Badge {round}
            </Badge>
          ))}
        </Box>
        <Box direction="row" gap="2xl">
          {rounds.map((round) => (
            <Badge round={round} key={round} color="info">
              Badge {round}
            </Badge>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
