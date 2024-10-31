import { Box, Card, DarkThemeSwitch, Title } from "tailtheme/components";

export default function Cards() {
  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Cards</Title>

      <DarkThemeSwitch />

      <Box direction="row" items="start" gap="2xl">
        <Card
          imageSize={{ width: 300, height: 250 }}
          metadata={{
            author: "Tailtheme",
            date: new Date(),
          }}
          image={{
            src: "https://images.pexels.com/photos/19813340/pexels-photo-19813340/free-photo-of-siempre-mira-hacia-arriba.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            mimeType: "jpeg",
          }}
          paragraph="Lorem ipsum dolor sit amet"
          title="Base card"
          tags={["home", "product"]}
          animation="fade-in"
        />

        <Card
          imageSize={{ width: 300, height: 250 }}
          metadata={{
            author: "Tailtheme",
            date: new Date(),
          }}
          image={{
            src: "https://images.pexels.com/photos/19534459/pexels-photo-19534459/free-photo-of-paisaje-curva-rio-verde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            mimeType: "jpeg",
          }}
          paragraph="Lorem ipsum dolor sit amet"
          title="Base card"
          tags={["home", "product"]}
          animation="fade-in"
        />
      </Box>
    </Box>
  );
}
