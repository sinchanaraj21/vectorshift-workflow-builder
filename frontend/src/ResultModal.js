export const ResultModal = ({
    isOpen,
    onClose,
    result,
  }) => {
    if (!isOpen) return null;
  
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <div
          style={{
            background: "#111827",
            color: "white",
            padding: "24px",
            borderRadius: "12px",
            minWidth: "350px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        >
          <h2>Pipeline Analysis</h2>
  
          <p>Nodes: {result?.num_nodes}</p>
  
          <p>Edges: {result?.num_edges}</p>
  
          <p>
            DAG Status:
            {" "}
            {result?.is_dag
              ? "✅ Valid DAG"
              : "❌ Contains Cycle"}
          </p>
  
          <button
            onClick={onClose}
            style={{
              marginTop: "12px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  