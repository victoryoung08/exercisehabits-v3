import { getData } from "@/app/api/payload";
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/lib/RenderBlocks";
import { FormBlock } from "@/components/blocks/FormBlock";
import { sendMailerliteContact } from "@/app/actions/actions";
console.log(process.env.NEXT_PUBLIC_PAYLOAD_BASEURL);
export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await getData("services", slug);
  const { docs: data } = res;
  if (!data[0].layout) {
    return notFound();
  }
  const layout = data[0].layout;
  console.log("layout", layout);
  return (
    <main>
      <RenderBlocks layout={layout} />
      <FormBlock customID="mainForm" />
      <footer className="h-[300px] w-full" />
    </main>
  );
}
