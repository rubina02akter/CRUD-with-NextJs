import Update from "../update";
export default async function page({ params }) {
  const { id } = await params;

  const data = await fetch(`http://localhost:3000/api/products/${id}`);
  const result = await data.json();
  console.log(result);

  console.log(id);
  return (
    <div>
      <Update result={result} />
    </div>
  );
}