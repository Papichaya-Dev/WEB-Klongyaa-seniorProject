export interface IDetailPill {
  channel_id: string;
  pill_name: string;
  total: number;
  pill_amount: number;
  take_times: string[];
  pillsPerTime: string;
  cid: string;
  real_pill_data: IRealPill | null;
}

export interface IRealPill {
  rid: string;
  pill_name: string;
  property: string;
  effect: string;
  danger_pills: IDangerPill[];
}

export interface IDangerPill {
  pill_name: string;
  reason: string;
}
