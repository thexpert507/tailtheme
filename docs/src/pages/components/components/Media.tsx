import { Box, FileViewer, Title } from "tailtheme/components";

export function Media() {
  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Media</Title>

      <Box gap="2xl" wrap items="start" justify="start">
        <Box direction="column" items="start">
          <Title size="xl">3D</Title>
          <FileViewer
            filename="image.glb"
            src="/media/bottle.glb"
            round="md"
            size={{ width: 200, height: 200 }}></FileViewer>
        </Box>

        <Box direction="column" items="start">
          <Title size="xl">Imagenes</Title>
          <FileViewer
            filename="image.jpg"
            src="/media/image.jpg"
            round="md"
            size={{ width: 200, height: 200 }}></FileViewer>
        </Box>

        <Box direction="column" items="start">
          <Title size="xl">Audio</Title>
          <FileViewer
            filename="audio.mp3"
            src="/media/audio.mp3"
            round="md"
            size={{ width: 200, height: 200 }}></FileViewer>
        </Box>

        <Box direction="column" items="start">
          <Title size="xl">Video</Title>
          <FileViewer
            filename="video.mp4"
            src="/media/video.mp4"
            round="md"
            size={{ width: 200, height: 200 }}></FileViewer>
        </Box>

        <Box direction="column" items="start">
          <Title size="xl">PDF</Title>
          <FileViewer
            filename="file.pdf"
            src="/media/file.pdf"
            round="md"
            size={{ width: 200, height: 200 }}></FileViewer>
        </Box>
      </Box>
    </Box>
  );
}
