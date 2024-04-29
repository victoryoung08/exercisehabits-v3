import { blockList } from "@/components/blocks/blockList";

export type layoutProps = {
  layout: blockProps[];
};

export type blockProps = {
  blockType: string;
};

type BlockComponent = React.ComponentType<blockProps>;

export const RenderBlocks = ({ layout }: layoutProps) => {
  return (
    <div>
      {layout.map((block, i) => {
        const Block = blockList[block.blockType] as BlockComponent;
        if (!Block) {
          console.log("block not found");
          return null;
        }

        return <Block {...block} key={i} />;
      })}
    </div>
  );
};
