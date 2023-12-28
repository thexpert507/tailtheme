import { Box, Title, Avatar } from "tailtheme/components";

const images = [
  "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
];

const avatarSizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

const avatarRounds = ["none", "sm", "md", "lg", "full"] as const;

export function Avatars() {
  return (
    <Box flat full items="start" justify="start" direction="column" gap="2xl">
      <Title size="2xl">Avatares</Title>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Imagenes</Title>
        <Box flat full items="start" justify="start" direction="row">
          {images.map((image, index) => (
            <Avatar key={image} type="image" src={image} name={`Avatar ${index}`} />
          ))}
        </Box>
      </Box>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Sizes</Title>
        <Box flat full items="center" justify="start" direction="row">
          {avatarSizes.map((size, index) => (
            <Avatar
              key={size}
              type="image"
              size={size}
              src={images[index]}
              name={`Avatar ${index}`}
            />
          ))}
        </Box>
      </Box>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Placeholder</Title>
        <Box flat full items="center" justify="start" direction="row">
          {avatarSizes.map((size, index) => (
            <Avatar key={size} type="placeholder" size={size} name={`Avatar ${index}`} />
          ))}
        </Box>
      </Box>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Rounded</Title>
        <Box flat full items="center" justify="start" direction="row">
          {avatarRounds.map((round, index) => (
            <Avatar
              key={round}
              type="image"
              src={images[index]}
              round={round}
              name={`Avatar ${index}`}
            />
          ))}
        </Box>
      </Box>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Whith text</Title>
        <Box flat full items="center" justify="start" direction="row" gap="4xl" wrap>
          {images.map((src, index) => (
            <Avatar
              key={src}
              type="whithText"
              src={src}
              size={avatarSizes[index]}
              name={`Avatar ${index}`}
              round="md"
              position="right"
              subtitle="Developer"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
