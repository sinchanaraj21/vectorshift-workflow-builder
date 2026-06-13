import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >
      <div
        style={{
          width: "260px",
          borderRight: "1px solid #334155",
          background: "#111827",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <div
  style={{
    marginBottom: "24px",
  }}
>
  <h1
    style={{
      margin: 0,
      fontSize: "24px",
      fontWeight: "700",
      background:
        "linear-gradient(90deg, #60a5fa, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    ⚡ Workflow Builder
  </h1>

  <p
    style={{
      color: "#94a3b8",
      fontSize: "13px",
      marginTop: "6px",
    }}
  >
    Build and analyze AI pipelines
  </p>
</div>

        <PipelineToolbar />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PipelineUI />

        <div
          style={{
            padding: "16px",
            borderTop: "1px solid #334155",
            background: "#111827",
          }}
        >
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;