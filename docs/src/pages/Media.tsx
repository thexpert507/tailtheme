import { Box, FileViewer, Title } from "tailtheme/components";

export default function Media() {
  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Media</Title>

      <Box gap="2xl" wrap items="start" justify="start">
        <Box direction="column" items="start">
          <Title size="xl">3D</Title>
          <FileViewer
            filename="image.glb"
            src="/media/example.glb"
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

        <Box direction="column" items="start">
          <Title size="xl">HTML</Title>
          <FileViewer
            filename="example.html"
            src="/media/example.html"
            round="md"
            size={{ width: 200, height: 200 }}></FileViewer>
        </Box>
      </Box>

      <div className="my-10"></div>

      <Title size="2xl">Max file size</Title>

      <div onClick={console.log}>
        <Box gap="2xl" wrap items="start" justify="start">
          <Box direction="column" items="start">
            <Title size="xl">10mb</Title>
            <FileViewer
              rules={{ maxSize: 10 * 1024 * 1024 }} // 10mb
              file={{ size: 11 * 1024 * 1024 }}
              filename="image.glb"
              src="/media/edmus.glb"
              round="md"
              size={{ width: 400, height: 400 }}></FileViewer>
          </Box>
        </Box>
      </div>

      <div className="my-10"></div>
    </Box>
  );
}
