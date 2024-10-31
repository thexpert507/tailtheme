import { Box, Tabs, TabsContent, TabsList, TabsTrigger, Title } from "tailtheme/components";

export default function TabsPage() {
  return (
    <Box flat full items="start" justify="start" direction="column" gap="2xl">
      <Title size="2xl">Tabs</Title>

      <Box full>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account" className="p-1 w-20">
              Account
            </TabsTrigger>
            <TabsTrigger value="password" className="p-1 w-20">
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </Box>
    </Box>
  );
}
