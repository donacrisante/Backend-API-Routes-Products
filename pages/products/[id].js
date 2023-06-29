import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
  
    const { data, isLoading } = useSWR(`/api/products/${id}`);

    if (isLoading) {
        return <h1>Loading...</h1>;
      }

    if (!data) {
        return;
      }
    
      return (
        <>
          <small>ID: {id}</small>
          <h1>{data.name}</h1>
          <Link href="/">Back to all</Link>
        </>
      );
    }