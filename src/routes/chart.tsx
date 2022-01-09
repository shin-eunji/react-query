import {useQuery} from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface CharProps {
    coinId: string
}

interface InterfaceHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart ({ coinId }: CharProps) {

    const { isLoading, data } = useQuery<InterfaceHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));

    return (
      <div>
      {
          isLoading ? (
            "Loading Chart..."
            ) : (
            <ApexChart type={"line"}
                       series={[
                         {
                           name: "Price",
                           data: data?.map(price => price.close),
                         },
                       ]}
                       options={{
                         theme: {
                           mode: "dark"
                         },
                         chart: {
                           height: 200,
                           width: 500,
                           toolbar: {
                             show: false
                           },
                           background: "transparent",
                         },
                         grid: {
                           show: false,
                         },
                         stroke: {
                           curve: "smooth",
                           width: 3,
                         },
                         yaxis: {
                           show: false,
                         },
                         xaxis: {
                           axisBorder: {
                             show: false,
                           },
                           axisTicks: {
                             show: false,
                           },
                           labels: {
                             show: false
                           }
                         }
                       }}
            />
          )
      }
      </div>
    )
}

export default Chart;