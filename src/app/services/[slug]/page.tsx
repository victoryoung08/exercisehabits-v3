import { getData } from "@/app/api/payload";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/RenderBlocks";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await getData("services", slug);
  const { docs: data } = res;
  if (!data[0].layout) {
    return notFound();
  }
  const layout = data[0].layout;
  return (
    <div>
      {slug}
      <RenderBlocks layout={layout} />
    </div>
  );
}
