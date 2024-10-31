import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "tailtheme/components";
import {
  MousePointer2,
  ImagePlay,
  User,
  ChevronDown,
  Baseline,
  BadgeInfo,
  GalleryVerticalEnd,
  MessageSquareShare,
  TableProperties,
} from "tailtheme/icons";

type Link = {
  label: string;
  Icon: React.ComponentType;
  to: string;
};

const links = [
  {
    label: "Botones",
    Icon: MousePointer2,
    to: "/buttons",
  },
  {
    label: "Media",
    Icon: ImagePlay,
    to: "/media",
  },
  {
    label: "Avatar",
    Icon: User,
    to: "/avatar",
  },
  {
    label: "Accordion",
    Icon: User,
    to: "/accordion",
  },
  {
    label: "Dropdown",
    Icon: ChevronDown,
    to: "/dropdown",
  },
  {
    label: "Forms",
    Icon: Baseline,
    to: "/forms",
  },
  {
    label: "Badges",
    Icon: BadgeInfo,
    to: "/badges",
  },
  {
    label: "Cards",
    Icon: GalleryVerticalEnd,
    to: "/cards",
  },
  {
    label: "Modals",
    Icon: MessageSquareShare,
    to: "/modals",
  },
  {
    label: "Tables",
    Icon: TableProperties,
    to: "/tables",
  },
  {
    label: "Select",
    Icon: ChevronDown,
    to: "/select",
  },
  {
    label: "Skeleton",
    Icon: User,
    to: "/skeleton",
  },
  {
    label: "Tabs",
    Icon: User,
    to: "/tabs",
  },
] satisfies Link[];

type LayoutProps = { children: React.ReactNode };
export function Layout(props: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <ResizablePanelGroup direction="horizontal" className="fixed h-screen w-full rounded-lg border">
      <ResizablePanel defaultSize={20} maxSize={20}>
        <Box paddingY="2xl" paddingX="2xl" direction="column" gap="2xl">
          {links.map((link) => (
            <Button
              key={link.label}
              variant={location.pathname === link.to ? "contained" : "text"}
              round="md"
              size="xs"
              fullWidth
              onClick={() => navigate(link.to)}>
              <Box items="center" justify="start" full>
                <link.Icon className="mr-2 w-4" />
                {link.label}
              </Box>
            </Button>
          ))}
        </Box>
      </ResizablePanel>
      <ResizableHandle withHandle disabled />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-start justify-center p-6 overflow-y-scroll">
          {props.children}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
