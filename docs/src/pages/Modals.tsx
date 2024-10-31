import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Box,
  Button,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Title,
  DarkThemeSwitch,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from "tailtheme/components";
import { Dialog } from "tailtheme/components";

export default function Modals() {
  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Modales</Title>

      <DarkThemeSwitch />

      <Box>
        <Dialog>
          <DialogTrigger asChild>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="contained" round="md" size="md">
                    Abrir dialog
                  </Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={18}>Tooltip</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DialogTrigger>
          <DialogContent size="2xl" round="md">
            <DialogHeader>
              <DialogTitle>Title of dialog</DialogTitle>
              <DialogDescription className="sr-only">Description of dialog</DialogDescription>
            </DialogHeader>
            <div>Contenido del modal</div>
            <Button variant="contained" size="sm" className="px-3">
              <span>Copy</span>
            </Button>
          </DialogContent>
        </Dialog>
      </Box>

      <Box>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="contained" round="md" size="md">
              Show Dialog
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="3xl" round="md">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="ghost" round="sm">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="contained" round="sm">
                  Continue
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
    </Box>
  );
}
