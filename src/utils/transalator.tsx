const languagePacks = {
  "Forgot to take pill": "ผู้ใช้ลืมทานยา",
  "Take pill remider": "ระบบเเจ้งเตือนการทานยา",
  "Take pill": "ผู้ใช้หยิบยา",
};

type TKeys = keyof typeof languagePacks;

export function transalateToThai(key: TKeys) {
  return languagePacks[key];
}
