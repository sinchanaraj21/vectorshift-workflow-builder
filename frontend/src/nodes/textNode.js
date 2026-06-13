import { useState, useMemo } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}}"
  );

  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...currText.matchAll(regex)];

    return [...new Set(matches.map((match) => match[1]))];
  }, [currText]);

  const longestLine = Math.max(
    ...currText.split("\n").map((line) => line.length)
  );

  const nodeWidth = Math.max(320, Math.min(700, longestLine * 12));

  const nodeHeight = Math.max(
    140,
    120 + currText.split("\n").length * 30
  );

  return (
    <BaseNode
      title="Text"
      width={nodeWidth}
      height={nodeHeight}
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
        label: variable,
      }))}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <label>
          Text:
          <textarea
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            rows={Math.max(3, currText.split("\n").length)}
            style={{
              width: "100%",
              minHeight: "80px",
              resize: "none",
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};