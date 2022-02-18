import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

const a = {
    aef: "efs",
    efa: "fef",
    efg: "fes"
}

let object = {
    "2022-02-17 19:40:00": {
        "1. open": "125.0100",
        "2. high": "125.0100",
        "3. low": "125.0100",
        "4. close": "125.0100",
        "5. volume": "249"
    },
    "2022-02-17 18:35:00": {
        "1. open": "125.1500",
        "2. high": "125.1500",
        "3. low": "125.1500",
        "4. close": "125.1500",
        "5. volume": "200"
    },
    "2022-02-17 18:30:00": {
        "1. open": "125.0600",
        "2. high": "125.0600",
        "3. low": "125.0600",
        "4. close": "125.0600",
        "5. volume": "294"
    },
    "2022-02-17 18:25:00": {
        "1. open": "125.0599",
        "2. high": "125.0599",
        "3. low": "125.0599",
        "4. close": "125.0599",
        "5. volume": "100"
    },
    "2022-02-17 18:20:00": {
        "1. open": "125.0600",
        "2. high": "125.0600",
        "3. low": "125.0600",
        "4. close": "125.0600",
        "5. volume": "101"
    },
    "2022-02-17 18:15:00": {
        "1. open": "125.0600",
        "2. high": "125.0600",
        "3. low": "125.0600",
        "4. close": "125.0600",
        "5. volume": "113"
    },
    "2022-02-17 18:05:00": {
        "1. open": "125.1400",
        "2. high": "125.1400",
        "3. low": "125.1400",
        "4. close": "125.1400",
        "5. volume": "500"
    },
    "2022-02-17 17:40:00": {
        "1. open": "125.1500",
        "2. high": "125.1500",
        "3. low": "125.1500",
        "4. close": "125.1500",
        "5. volume": "215"
    },
    "2022-02-17 17:15:00": {
        "1. open": "125.0000",
        "2. high": "125.0000",
        "3. low": "125.0000",
        "4. close": "125.0000",
        "5. volume": "581"
    },
    "2022-02-17 17:05:00": {
        "1. open": "125.4900",
        "2. high": "125.4900",
        "3. low": "125.4900",
        "4. close": "125.4900",
        "5. volume": "102"
    },
    "2022-02-17 16:40:00": {
        "1. open": "125.0000",
        "2. high": "125.1000",
        "3. low": "125.0000",
        "4. close": "125.1000",
        "5. volume": "674"
    },
    "2022-02-17 16:35:00": {
        "1. open": "125.0000",
        "2. high": "125.0000",
        "3. low": "125.0000",
        "4. close": "125.0000",
        "5. volume": "667"
    },
    "2022-02-17 16:30:00": {
        "1. open": "124.9700",
        "2. high": "124.9700",
        "3. low": "124.9700",
        "4. close": "124.9700",
        "5. volume": "421"
    },
    "2022-02-17 16:25:00": {
        "1. open": "124.9700",
        "2. high": "125.0000",
        "3. low": "124.9700",
        "4. close": "124.9700",
        "5. volume": "1976"
    },
    "2022-02-17 16:20:00": {
        "1. open": "125.0000",
        "2. high": "125.0000",
        "3. low": "124.9700",
        "4. close": "124.9700",
        "5. volume": "43099"
    },
    "2022-02-17 16:15:00": {
        "1. open": "125.1700",
        "2. high": "125.1700",
        "3. low": "125.0999",
        "4. close": "125.0999",
        "5. volume": "1369"
    },
    "2022-02-17 16:10:00": {
        "1. open": "125.2400",
        "2. high": "125.2400",
        "3. low": "124.9700",
        "4. close": "125.1700",
        "5. volume": "2804"
    },
    "2022-02-17 16:05:00": {
        "1. open": "124.9700",
        "2. high": "128.0000",
        "3. low": "124.9700",
        "4. close": "124.9700",
        "5. volume": "40912"
    },
    "2022-02-17 16:00:00": {
        "1. open": "125.1500",
        "2. high": "125.2700",
        "3. low": "124.9300",
        "4. close": "124.9700",
        "5. volume": "410554"
    },
    "2022-02-17 15:55:00": {
        "1. open": "125.3000",
        "2. high": "125.3400",
        "3. low": "124.9500",
        "4. close": "125.1300",
        "5. volume": "179829"
    },
    "2022-02-17 15:50:00": {
        "1. open": "125.6400",
        "2. high": "125.7700",
        "3. low": "125.3000",
        "4. close": "125.3300",
        "5. volume": "107388"
    },
    "2022-02-17 15:45:00": {
        "1. open": "125.6100",
        "2. high": "125.6800",
        "3. low": "125.4900",
        "4. close": "125.6355",
        "5. volume": "93284"
    },
    "2022-02-17 15:40:00": {
        "1. open": "125.2900",
        "2. high": "125.6399",
        "3. low": "125.2900",
        "4. close": "125.6200",
        "5. volume": "98571"
    },
    "2022-02-17 15:35:00": {
        "1. open": "125.2800",
        "2. high": "125.3399",
        "3. low": "125.1400",
        "4. close": "125.2800",
        "5. volume": "88100"
    },
    "2022-02-17 15:30:00": {
        "1. open": "125.1600",
        "2. high": "125.3163",
        "3. low": "125.1500",
        "4. close": "125.2600",
        "5. volume": "37792"
    },
    "2022-02-17 15:25:00": {
        "1. open": "125.1269",
        "2. high": "125.2600",
        "3. low": "125.1269",
        "4. close": "125.1600",
        "5. volume": "54826"
    },
    "2022-02-17 15:20:00": {
        "1. open": "124.9109",
        "2. high": "125.1700",
        "3. low": "124.8700",
        "4. close": "125.1550",
        "5. volume": "54837"
    },
    "2022-02-17 15:15:00": {
        "1. open": "125.0600",
        "2. high": "125.0740",
        "3. low": "124.8500",
        "4. close": "124.9181",
        "5. volume": "142417"
    },
    "2022-02-17 15:10:00": {
        "1. open": "125.3797",
        "2. high": "125.3800",
        "3. low": "125.0000",
        "4. close": "125.0400",
        "5. volume": "133297"
    },
    "2022-02-17 15:05:00": {
        "1. open": "125.4123",
        "2. high": "125.5100",
        "3. low": "125.3600",
        "4. close": "125.3800",
        "5. volume": "53407"
    },
    "2022-02-17 15:00:00": {
        "1. open": "125.4600",
        "2. high": "125.4897",
        "3. low": "125.3800",
        "4. close": "125.4200",
        "5. volume": "46703"
    },
    "2022-02-17 14:55:00": {
        "1. open": "125.5900",
        "2. high": "125.6000",
        "3. low": "125.3500",
        "4. close": "125.4700",
        "5. volume": "49831"
    },
    "2022-02-17 14:50:00": {
        "1. open": "125.4900",
        "2. high": "125.6100",
        "3. low": "125.4900",
        "4. close": "125.6000",
        "5. volume": "33322"
    },
    "2022-02-17 14:45:00": {
        "1. open": "125.4400",
        "2. high": "125.5000",
        "3. low": "125.3800",
        "4. close": "125.4750",
        "5. volume": "41418"
    },
    "2022-02-17 14:40:00": {
        "1. open": "125.5270",
        "2. high": "125.5270",
        "3. low": "125.3500",
        "4. close": "125.4400",
        "5. volume": "63952"
    },
    "2022-02-17 14:35:00": {
        "1. open": "125.5600",
        "2. high": "125.6100",
        "3. low": "125.4600",
        "4. close": "125.5200",
        "5. volume": "60240"
    },
    "2022-02-17 14:30:00": {
        "1. open": "125.5285",
        "2. high": "125.5900",
        "3. low": "125.5110",
        "4. close": "125.5546",
        "5. volume": "27584"
    },
    "2022-02-17 14:25:00": {
        "1. open": "125.6250",
        "2. high": "125.6500",
        "3. low": "125.5200",
        "4. close": "125.5400",
        "5. volume": "37509"
    },
    "2022-02-17 14:20:00": {
        "1. open": "125.4400",
        "2. high": "125.7200",
        "3. low": "125.3900",
        "4. close": "125.6400",
        "5. volume": "41888"
    },
    "2022-02-17 14:15:00": {
        "1. open": "125.4000",
        "2. high": "125.4600",
        "3. low": "125.3600",
        "4. close": "125.4399",
        "5. volume": "45862"
    },
    "2022-02-17 14:10:00": {
        "1. open": "125.5500",
        "2. high": "125.5700",
        "3. low": "125.4000",
        "4. close": "125.4150",
        "5. volume": "57320"
    },
    "2022-02-17 14:05:00": {
        "1. open": "125.6500",
        "2. high": "125.6522",
        "3. low": "125.5300",
        "4. close": "125.5600",
        "5. volume": "32952"
    },
    "2022-02-17 14:00:00": {
        "1. open": "125.6500",
        "2. high": "125.6500",
        "3. low": "125.5700",
        "4. close": "125.6500",
        "5. volume": "29680"
    },
    "2022-02-17 13:55:00": {
        "1. open": "125.5900",
        "2. high": "125.6799",
        "3. low": "125.5675",
        "4. close": "125.6763",
        "5. volume": "25013"
    },
    "2022-02-17 13:50:00": {
        "1. open": "125.6650",
        "2. high": "125.7000",
        "3. low": "125.5700",
        "4. close": "125.6000",
        "5. volume": "42436"
    },
    "2022-02-17 13:45:00": {
        "1. open": "125.7500",
        "2. high": "125.7500",
        "3. low": "125.6300",
        "4. close": "125.6700",
        "5. volume": "50626"
    },
    "2022-02-17 13:40:00": {
        "1. open": "125.9200",
        "2. high": "125.9500",
        "3. low": "125.7900",
        "4. close": "125.7900",
        "5. volume": "27638"
    },
    "2022-02-17 13:35:00": {
        "1. open": "125.8200",
        "2. high": "125.9600",
        "3. low": "125.7900",
        "4. close": "125.9100",
        "5. volume": "31408"
    },
    "2022-02-17 13:30:00": {
        "1. open": "125.9300",
        "2. high": "125.9700",
        "3. low": "125.8115",
        "4. close": "125.8400",
        "5. volume": "30676"
    },
    "2022-02-17 13:25:00": {
        "1. open": "125.9650",
        "2. high": "126.0461",
        "3. low": "125.8903",
        "4. close": "125.9200",
        "5. volume": "48953"
    },
    "2022-02-17 13:20:00": {
        "1. open": "125.7400",
        "2. high": "125.9700",
        "3. low": "125.7400",
        "4. close": "125.9600",
        "5. volume": "28631"
    },
    "2022-02-17 13:15:00": {
        "1. open": "125.7900",
        "2. high": "125.8000",
        "3. low": "125.7059",
        "4. close": "125.7300",
        "5. volume": "35199"
    },
    "2022-02-17 13:10:00": {
        "1. open": "125.7352",
        "2. high": "125.8300",
        "3. low": "125.7000",
        "4. close": "125.7800",
        "5. volume": "26622"
    },
    "2022-02-17 13:05:00": {
        "1. open": "125.7500",
        "2. high": "125.8100",
        "3. low": "125.6900",
        "4. close": "125.7200",
        "5. volume": "44594"
    },
    "2022-02-17 13:00:00": {
        "1. open": "125.7588",
        "2. high": "125.8200",
        "3. low": "125.7200",
        "4. close": "125.7400",
        "5. volume": "35349"
    },
    "2022-02-17 12:55:00": {
        "1. open": "125.7185",
        "2. high": "125.8300",
        "3. low": "125.7100",
        "4. close": "125.7700",
        "5. volume": "29472"
    },
    "2022-02-17 12:50:00": {
        "1. open": "125.6450",
        "2. high": "125.7300",
        "3. low": "125.5800",
        "4. close": "125.7300",
        "5. volume": "50143"
    },
    "2022-02-17 12:45:00": {
        "1. open": "125.7600",
        "2. high": "125.7600",
        "3. low": "125.6300",
        "4. close": "125.6500",
        "5. volume": "40204"
    },
    "2022-02-17 12:40:00": {
        "1. open": "125.8100",
        "2. high": "125.8100",
        "3. low": "125.7101",
        "4. close": "125.7400",
        "5. volume": "42475"
    },
    "2022-02-17 12:35:00": {
        "1. open": "125.9565",
        "2. high": "125.9700",
        "3. low": "125.7100",
        "4. close": "125.8050",
        "5. volume": "56918"
    },
    "2022-02-17 12:30:00": {
        "1. open": "126.0800",
        "2. high": "126.0900",
        "3. low": "125.9200",
        "4. close": "125.9728",
        "5. volume": "30470"
    },
    "2022-02-17 12:25:00": {
        "1. open": "126.1000",
        "2. high": "126.2300",
        "3. low": "126.0734",
        "4. close": "126.0734",
        "5. volume": "67363"
    },
    "2022-02-17 12:20:00": {
        "1. open": "125.9000",
        "2. high": "126.1500",
        "3. low": "125.8939",
        "4. close": "126.1050",
        "5. volume": "42537"
    },
    "2022-02-17 12:15:00": {
        "1. open": "125.8250",
        "2. high": "125.9500",
        "3. low": "125.8000",
        "4. close": "125.8800",
        "5. volume": "32794"
    },
    "2022-02-17 12:10:00": {
        "1. open": "126.1500",
        "2. high": "126.1600",
        "3. low": "125.8100",
        "4. close": "125.8173",
        "5. volume": "55003"
    },
    "2022-02-17 12:05:00": {
        "1. open": "126.0400",
        "2. high": "126.1900",
        "3. low": "125.9462",
        "4. close": "126.1400",
        "5. volume": "77174"
    },
    "2022-02-17 12:00:00": {
        "1. open": "126.1750",
        "2. high": "126.2550",
        "3. low": "126.0400",
        "4. close": "126.0600",
        "5. volume": "86699"
    },
    "2022-02-17 11:55:00": {
        "1. open": "126.2300",
        "2. high": "126.2640",
        "3. low": "126.1600",
        "4. close": "126.1650",
        "5. volume": "84610"
    },
    "2022-02-17 11:50:00": {
        "1. open": "126.1700",
        "2. high": "126.3110",
        "3. low": "126.1700",
        "4. close": "126.2600",
        "5. volume": "41839"
    },
    "2022-02-17 11:45:00": {
        "1. open": "126.2000",
        "2. high": "126.3400",
        "3. low": "126.0900",
        "4. close": "126.1700",
        "5. volume": "43324"
    },
    "2022-02-17 11:40:00": {
        "1. open": "126.3200",
        "2. high": "126.4250",
        "3. low": "126.1950",
        "4. close": "126.1950",
        "5. volume": "58986"
    },
    "2022-02-17 11:35:00": {
        "1. open": "126.2000",
        "2. high": "126.4650",
        "3. low": "126.1800",
        "4. close": "126.3100",
        "5. volume": "72895"
    },
    "2022-02-17 11:30:00": {
        "1. open": "125.8300",
        "2. high": "126.2400",
        "3. low": "125.8300",
        "4. close": "126.2300",
        "5. volume": "57166"
    },
    "2022-02-17 11:25:00": {
        "1. open": "126.0200",
        "2. high": "126.0200",
        "3. low": "125.8200",
        "4. close": "125.8700",
        "5. volume": "44360"
    },
    "2022-02-17 11:20:00": {
        "1. open": "125.8800",
        "2. high": "126.0600",
        "3. low": "125.7900",
        "4. close": "126.0300",
        "5. volume": "57922"
    },
    "2022-02-17 11:15:00": {
        "1. open": "125.6000",
        "2. high": "125.9600",
        "3. low": "125.5500",
        "4. close": "125.9000",
        "5. volume": "54917"
    },
    "2022-02-17 11:10:00": {
        "1. open": "125.6212",
        "2. high": "125.8700",
        "3. low": "125.5900",
        "4. close": "125.6000",
        "5. volume": "76605"
    },
    "2022-02-17 11:05:00": {
        "1. open": "125.5450",
        "2. high": "125.7000",
        "3. low": "125.4400",
        "4. close": "125.6000",
        "5. volume": "89451"
    },
    "2022-02-17 11:00:00": {
        "1. open": "125.3700",
        "2. high": "125.7000",
        "3. low": "125.3200",
        "4. close": "125.5500",
        "5. volume": "108448"
    },
    "2022-02-17 10:55:00": {
        "1. open": "125.8500",
        "2. high": "125.8500",
        "3. low": "125.3500",
        "4. close": "125.3600",
        "5. volume": "79735"
    },
    "2022-02-17 10:50:00": {
        "1. open": "125.8400",
        "2. high": "125.9800",
        "3. low": "125.6200",
        "4. close": "125.8750",
        "5. volume": "86641"
    },
    "2022-02-17 10:45:00": {
        "1. open": "125.8800",
        "2. high": "126.0608",
        "3. low": "125.8200",
        "4. close": "125.8700",
        "5. volume": "66460"
    },
    "2022-02-17 10:40:00": {
        "1. open": "126.0550",
        "2. high": "126.1900",
        "3. low": "125.8800",
        "4. close": "125.8800",
        "5. volume": "121906"
    },
    "2022-02-17 10:35:00": {
        "1. open": "125.8600",
        "2. high": "126.2900",
        "3. low": "125.8300",
        "4. close": "126.0500",
        "5. volume": "104820"
    },
    "2022-02-17 10:30:00": {
        "1. open": "126.3230",
        "2. high": "126.3230",
        "3. low": "125.6600",
        "4. close": "125.8600",
        "5. volume": "602447"
    },
    "2022-02-17 10:25:00": {
        "1. open": "126.4800",
        "2. high": "126.4900",
        "3. low": "126.2800",
        "4. close": "126.3200",
        "5. volume": "104618"
    },
    "2022-02-17 10:20:00": {
        "1. open": "126.5000",
        "2. high": "126.5200",
        "3. low": "126.3000",
        "4. close": "126.4800",
        "5. volume": "82981"
    },
    "2022-02-17 10:15:00": {
        "1. open": "126.4810",
        "2. high": "126.6400",
        "3. low": "126.3700",
        "4. close": "126.5000",
        "5. volume": "95640"
    },
    "2022-02-17 10:10:00": {
        "1. open": "126.6700",
        "2. high": "126.7900",
        "3. low": "126.4600",
        "4. close": "126.4950",
        "5. volume": "162599"
    },
    "2022-02-17 10:05:00": {
        "1. open": "126.9100",
        "2. high": "126.9100",
        "3. low": "126.6100",
        "4. close": "126.6600",
        "5. volume": "80027"
    },
    "2022-02-17 10:00:00": {
        "1. open": "127.1400",
        "2. high": "127.2100",
        "3. low": "126.8000",
        "4. close": "126.8900",
        "5. volume": "105752"
    },
    "2022-02-17 09:55:00": {
        "1. open": "127.9000",
        "2. high": "127.9000",
        "3. low": "127.0700",
        "4. close": "127.1300",
        "5. volume": "122610"
    },
    "2022-02-17 09:50:00": {
        "1. open": "127.7600",
        "2. high": "128.0699",
        "3. low": "127.6500",
        "4. close": "127.9200",
        "5. volume": "63024"
    },
    "2022-02-17 09:45:00": {
        "1. open": "128.0200",
        "2. high": "128.0700",
        "3. low": "127.5294",
        "4. close": "127.7200",
        "5. volume": "74707"
    },
    "2022-02-17 09:40:00": {
        "1. open": "128.0000",
        "2. high": "128.2499",
        "3. low": "127.7980",
        "4. close": "128.0205",
        "5. volume": "43965"
    },
    "2022-02-17 09:35:00": {
        "1. open": "128.0500",
        "2. high": "128.5000",
        "3. low": "127.7600",
        "4. close": "127.9550",
        "5. volume": "163440"
    },
    "2022-02-17 09:30:00": {
        "1. open": "128.5200",
        "2. high": "128.5200",
        "3. low": "128.2000",
        "4. close": "128.2000",
        "5. volume": "1376"
    },
    "2022-02-17 09:20:00": {
        "1. open": "129.0200",
        "2. high": "129.0200",
        "3. low": "129.0000",
        "4. close": "129.0000",
        "5. volume": "1465"
    },
    "2022-02-17 09:00:00": {
        "1. open": "128.5500",
        "2. high": "128.5500",
        "3. low": "128.5500",
        "4. close": "128.5500",
        "5. volume": "476"
    },
    "2022-02-17 08:45:00": {
        "1. open": "128.8500",
        "2. high": "128.8500",
        "3. low": "128.7500",
        "4. close": "128.7500",
        "5. volume": "680"
    }
} 
let b = []

for (const property in object) {
    b.push(object[property]["4. close"])
  }
console.log(b)
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
//https://react-chartjs-2.netlify.app/examples/line-chart
//https://www.chartjs.org/docs/latest/configuration/responsive.html
function StockChart() {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}

export default StockChart;