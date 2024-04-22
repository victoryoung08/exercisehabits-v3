export const getData = async (collection: string, slug: string) => {
  const options: RequestInit = {
    method: "GET",
    cache: "no-store" as RequestCache,
  };
  const res = await fetch(
    process.env.NEXT_PUBLIC_PAYLOAD_BASEURL +
      `/api/${collection}?where[slug][equals]=${slug}`,
    options
  );
  const data = await res.json();
  console.log(data);
  return data;
};
