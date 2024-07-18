import { Box, FileInput, FormInput, FormSelect, FormTextArea, Title } from "tailtheme/components";

export default function Inputs() {
  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Inputs</Title>

      <Box full height="h-full" paddingX="sm" paddingY="sm" direction="column" gap="4xl">
        <FormInput title="Base input" error="text error" isize="sm" round="sm" />

        <FormInput title="Disabled input" disabled isize="sm" round="sm" />

        <FormSelect
          size="sm"
          round="sm"
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

        <FormTextArea title="Base text area" size="sm" round="sm" />

        <FileInput title="Base file" size="sm" round="sm" />
      </Box>
    </Box>
  );
}
