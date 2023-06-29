import useSWR from "swr";
import Link from "next/link";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <div>Hallo!</div>;
  }

  return (
    <ul>
      {data.map((product) => 
        <li key={product.id}>
          <Link href={`products/${product.id}`}>{product.name}</Link>
        </li>
      )}
    </ul>
  );
}
