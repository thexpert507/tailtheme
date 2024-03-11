import { Badge, Box, Table, TableRow, Title } from "tailtheme/components";

export function Tables() {
  const headers = ["id", "nombre", "apellido"];
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
    {
      id: 4,
      nombre: "Ana",
      apellido: "Garcia",
    },
    {
      id: 5,
      nombre: "Luis",
      apellido: "Rodriguez",
    },
    {
      id: 6,
      nombre: "Laura",
      apellido: "Hernandez",
    },
    {
      id: 7,
      nombre: "Carlos",
      apellido: "Gonzalez",
    },
    {
      id: 8,
      nombre: "Sofia",
      apellido: "Martinez",
    },
    {
      id: 9,
      nombre: "Diego",
      apellido: "Sanchez",
    },
    {
      id: 10,
      nombre: "Valeria",
      apellido: "Torres",
    },
    {
      id: 11,
      nombre: "Javier",
      apellido: "Ramirez",
    },
    {
      id: 12,
      nombre: "Fernanda",
      apellido: "Diaz",
    },
    {
      id: 13,
      nombre: "Ricardo",
      apellido: "Moreno",
    },
    {
      id: 14,
      nombre: "Isabella",
      apellido: "Castro",
    },
    {
      id: 15,
      nombre: "Andres",
      apellido: "Ortega",
    },
    {
      id: 16,
      nombre: "Camila",
      apellido: "Vargas",
    },
    {
      id: 17,
      nombre: "Alejandro",
      apellido: "Rojas",
    },
    {
      id: 18,
      nombre: "Daniela",
      apellido: "Mendoza",
    },
    {
      id: 19,
      nombre: "Gabriel",
      apellido: "Silva",
    },
    {
      id: 20,
      nombre: "Mariana",
      apellido: "Cruz",
    },
  ];

  const components = names.map((name) => (
    <TableRow key={name.id}>
      <Badge color="primary">{name.id}</Badge>
      <Badge color="primary">{name.nombre}</Badge>
      <Badge color="primary">{name.apellido}</Badge>
    </TableRow>
  ));

  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Tablas</Title>

      <Box full items="start" direction="column" marginY="lg">
        <Title size="xl">Tabla simple</Title>
        <Table
          width="w-full"
          height="h-[200px]"
          round="md"
          bordered
          headers={headers}
          components={components}
        />
      </Box>

      <Box full items="start" direction="column" marginY="lg">
        <Title size="xl">Header sticky</Title>
        <Table
          width="w-full"
          height="h-[200px]"
          round="md"
          headers={headers}
          components={components}
          stickyHeader
        />
      </Box>
    </Box>
  );
}
