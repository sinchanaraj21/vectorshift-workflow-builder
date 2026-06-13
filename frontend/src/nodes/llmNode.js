import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        {
          id: `${id}-system`,
        },
        {
          id: `${id}-prompt`,
        },
      ]}
      outputs={[
        {
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        This is a LLM node.
      </div>
    </BaseNode>
  );
};