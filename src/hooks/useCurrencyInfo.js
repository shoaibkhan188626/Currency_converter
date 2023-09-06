import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      );
      setData(response.data[currency]);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
