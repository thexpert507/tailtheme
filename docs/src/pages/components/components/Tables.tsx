import { Badge, Box, Table, TableRow, Title } from "tailtheme/components";

export function Tables() {
  const names = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
    },
    {
      id: 2,
      nombre: "Pedro",
      apellido: "Gomez",
    },
    {
      id: 3,
      nombre: "Maria",
      apellido: "Lopez",
    },
  ];

  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Tablas</Title>

      <Table
        width="w-full"
        round="md"
        bordered
        headers={["id", "nombre", "apellido"]}
        components={names.map((name) => (
          <TableRow key={name.id}>
            <Badge color="primary">{name.id}</Badge>
            <Badge color="primary">{name.nombre}</Badge>
            <Badge color="primary">{name.apellido}</Badge>
          </TableRow>
        ))}
      />
    </Box>
  );
}
