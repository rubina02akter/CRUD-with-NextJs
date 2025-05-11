import Update from "../update";
export default async function page({ params }) {
  const { id } = await params;

  const data = await fetch(`https://crud-operation-with-next-js.vercel.app/api/products/${id}`);
  const result = await data.json();
  console.log(result);

  console.log(id);
  return (
    <div>
      <Update result={result} />
    </div>
  );
}