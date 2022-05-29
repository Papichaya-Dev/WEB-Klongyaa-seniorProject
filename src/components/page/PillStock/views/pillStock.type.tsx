export interface IPillStockChannel {
  channel_id: string;
  pill_name: string;
  total: number;
  stock: number;
  created_at: string;
  cid?: string;
  take_time?: string[];
}
