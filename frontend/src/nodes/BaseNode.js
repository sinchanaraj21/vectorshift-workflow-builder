import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  children,
  inputs = [],
  outputs = [],
  width = 240,
  height = 120,
}) => {
  return (
    <div
      style={{
        width ,
        minHeight: height,
        background: "#1e293b",
        color: "white",
        border: "1px solid #334155",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      }}
    >
      {inputs.map((input, index) => (
  <>
    <div
      style={{
        position: "absolute",
        left: "-65px",
        width: "55px",
        textAlign: "right",
        top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
        transform: "translateY(-50%)",
        fontSize: "11px",
        color: "#cbd5e1",
      }}
    >
      {input.label || ""}
    </div>

    <Handle
      key={input.id}
      type="target"
      position={Position.Left}
      id={input.id}
      style={{
        top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
        background: "#60a5fa",
        width: "12px",
        height: "12px",
        border: "2px solid white",
      }}
    />
  </>
))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            background: "#34d399",
            width: "12px",
            height: "12px",
            border: "2px solid white",
          }}
        />
      ))}

      <div
        style={{
          fontWeight: "bold",
          marginBottom: "10px",
          borderBottom: "1px solid #334155",
          paddingBottom: "6px",
        }}
      >
        {title}
      </div>

      {children}
    </div>
  );
};