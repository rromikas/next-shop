import type { NextPage } from "next";
import { useRouter } from "next/router";

const Collection: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;
  return <div>Collection {cid}</div>;
};

export default Collection;
