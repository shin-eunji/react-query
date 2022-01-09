import {useQuery} from "react-query";
import { fetchCoinHistory } from "../api";

interface CharProps {
    coinId: string
}

function Chart ({ coinId }: CharProps) {

    const { isLoading, data } = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId));

    return (
      <>
      {
          isLoading ? (
            "Loading..."
            ) : (
              <div>{coinId}</div>
          )
      }
      </>
    )
}

export default Chart;