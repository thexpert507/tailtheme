import { useState } from "react";
import { Box, Button, Modal, Title } from "tailtheme/components";

export default function Modals() {
  const [open, setOpen] = useState(false);

  const toogle = () => setOpen((prev) => !prev);

  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Modales</Title>

      <Modal open={open} onClose={toogle} title="Base modal" enableConfirm enableCancel animation="fade-in">
        Contenido del modal
      </Modal>

      <Button variant="contained" round="md" size="md" onClick={toogle}>
        Abrir modal
      </Button>
    </Box>
  );
}
