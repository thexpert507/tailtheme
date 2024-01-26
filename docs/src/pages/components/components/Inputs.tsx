import { Box, FileInput, FormInput, FormSelect, FormTextArea, Title } from "tailtheme/components";

export function Inputs() {
  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Inputs</Title>

      <Box full height="h-full" paddingX="sm" paddingY="sm" direction="column" gap="4xl">
        <FormInput title="Base input" error="text error" />

        <FormInput title="Disabled input" disabled />

        <FormSelect
          title="Base select"
          type="native"
          items={[
            {
              label: "Option 1",
              value: "1",
            },
            {
              label: "Option 2",
              value: "2",
            },
          ]}
          name="select"
          onChange={() => {}}
        />

        <FormTextArea title="Base text area" />

        <FileInput title="Base file" />
      </Box>
    </Box>
  );
}
