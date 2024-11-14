import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CustomerEditPage from "../../components/template/CustomerEditPage";
function Index() {
  const [data, setData] = useState(null);
  const router = useRouter();

  const {
    query: { customerId },
    isReady,
  } = router;
  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [isReady]);
  if (data) {
    return <CustomerEditPage data={data} id={customerId} />;
  } else {
    return <h1>loading</h1>;
  }
}

export default Index;
