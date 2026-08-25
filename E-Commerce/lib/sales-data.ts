export type MonthlySale = { month: string; sales: number; orders: number };

export const salesByYear: Record<number, MonthlySale[]> = {
  2024: [{month:"Jan",sales:42000,orders:320},{month:"Feb",sales:48000,orders:365},{month:"Mar",sales:51000,orders:390},{month:"Apr",sales:47000,orders:355},{month:"May",sales:59000,orders:430},{month:"Jun",sales:63000,orders:470},{month:"Jul",sales:61000,orders:455},{month:"Aug",sales:68000,orders:500},{month:"Sep",sales:72000,orders:535},{month:"Oct",sales:78000,orders:590},{month:"Nov",sales:94000,orders:700},{month:"Dec",sales:108000,orders:800}],
  2023: [{month:"Jan",sales:35000,orders:275},{month:"Feb",sales:39000,orders:300},{month:"Mar",sales:42000,orders:325},{month:"Apr",sales:40000,orders:305},{month:"May",sales:47000,orders:360},{month:"Jun",sales:51000,orders:395},{month:"Jul",sales:49000,orders:375},{month:"Aug",sales:55000,orders:420},{month:"Sep",sales:59000,orders:450},{month:"Oct",sales:64000,orders:490},{month:"Nov",sales:76000,orders:580},{month:"Dec",sales:88000,orders:670}],
  2022: [{month:"Jan",sales:28000,orders:220},{month:"Feb",sales:31000,orders:240},{month:"Mar",sales:34000,orders:265},{month:"Apr",sales:32000,orders:250},{month:"May",sales:39000,orders:300},{month:"Jun",sales:42000,orders:320},{month:"Jul",sales:40000,orders:310},{month:"Aug",sales:46000,orders:350},{month:"Sep",sales:50000,orders:385},{month:"Oct",sales:54000,orders:415},{month:"Nov",sales:65000,orders:500},{month:"Dec",sales:74000,orders:570}]
};

export function formatCurrency(value: number) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value); }
