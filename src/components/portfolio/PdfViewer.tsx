export function PdfViewer({ file, title }: { file: string; title: string }) {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden", backgroundColor: "#080d0b" }}>
      <iframe
        src={file}
        title={title}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
