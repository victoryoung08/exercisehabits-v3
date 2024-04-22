import { blockList } from "@/components/blocks/blockList";

export const RenderBlocks = ({ layout }) => {
  console.log("layout", layout);
  return (
    <div>
      {layout.map((block, i) => {
        const Block = blockList[block.blockType];
        if (!Block) {
          console.log("block not found");
          return null;
        }
        console.log("block", block);
        return <Block {...block} />;
      })}
    </div>
  );
};
