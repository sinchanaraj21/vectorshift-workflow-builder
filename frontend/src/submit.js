import { useState } from "react";
import { useStore } from "./store";
import { ResultModal } from "./ResultModal";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      setResult(data);
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSavePipeline = () => {
    const pipelineData = {
      nodes,
      edges,
      exportedAt: new Date().toISOString(),
    };
  
    const blob = new Blob(
      [JSON.stringify(pipelineData, null, 2)],
      {
        type: "application/json",
      }
    );
  
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
  
    link.href = url;
    link.download = "pipeline.json";
  
    document.body.appendChild(link);
  
    link.click();
  
    document.body.removeChild(link);
  
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <button
  onClick={handleSavePipeline}
  style={{
    background: "#475569",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  Save Pipeline
</button>
        <button
          onClick={handleSubmit}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Analyze Pipeline
        </button>
      </div>

      <ResultModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        result={result}
      />
    </>
  );
};