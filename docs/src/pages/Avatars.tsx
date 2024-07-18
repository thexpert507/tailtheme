import { Box, Title, Avatar, AvatarImage, AvatarFallback } from "tailtheme/components";

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

export default function Avatars() {
  return (
    <Box flat full items="start" justify="start" direction="column" gap="2xl">
      <Title size="2xl">Avatares</Title>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Imagenes</Title>
        <Box flat full items="start" justify="start" direction="row">
          {images.map((image, index) => (
            <Avatar>
              <AvatarImage src={image} alt={`Avatar ${index}`} />
              <AvatarFallback>Avatar {index}</AvatarFallback>
            </Avatar>
          ))}
        </Box>
      </Box>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Sizes</Title>
        <Box flat full items="center" justify="start" direction="row">
          {avatarSizes.map((size, index) => (
            <Avatar>
              <AvatarImage src={images[index]} alt={`Avatar ${index}`} />
              <AvatarFallback>Avatar {index}</AvatarFallback>
            </Avatar>
          ))}
        </Box>
      </Box>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Placeholder</Title>
        <Box flat full items="center" justify="start" direction="row">
          {avatarSizes.map((size, index) => (
            <Avatar>
              <AvatarFallback>Avatar {index}</AvatarFallback>
            </Avatar>
          ))}
        </Box>
      </Box>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Rounded</Title>
        <Box flat full items="center" justify="start" direction="row">
          {avatarRounds.map((round, index) => (
            <Avatar>
              <AvatarImage src={images[index]} alt={`Avatar ${index}`} />
              <AvatarFallback>Avatar {index}</AvatarFallback>
            </Avatar>
          ))}
        </Box>
      </Box>

      <Box flat full items="start" justify="start" direction="column">
        <Title size="lg">Whith text</Title>
        <Box flat full items="center" justify="start" direction="row" gap="4xl" wrap>
          {images.map((src, index) => (
            <Avatar>
              <AvatarImage src={images[index]} alt={`Avatar ${index}`} />
              <AvatarFallback>Avatar {index}</AvatarFallback>
            </Avatar>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
