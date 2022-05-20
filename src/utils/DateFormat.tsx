export function dateFormat(dateString: string) {
  const DATE = new Date(dateString);
  const MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const dateFormatCompleted = DATE.getDate() + " " + MONTHS[DATE.getMonth()] + " " + DATE.getFullYear();

  return dateFormatCompleted;
}

export function dateFormatNotYear(dateString: string) {
  const DATE = new Date(dateString);
  const MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const dateFormatCompleted = DATE.getDate() + " " + MONTHS[DATE.getMonth()];

  return dateFormatCompleted;
}

export function timeFormat(dateTime: string) {
  const DATE = new Date(dateTime);
  const hour = DATE.getHours() - 7;
  const minute = DATE.getMinutes();
  let hourStr = hour.toString();
  let minuteStr = minute.toString();
  if (hourStr.length === 1) hourStr = "0" + hourStr;
  if (minuteStr.length === 1) minuteStr = "0" + minuteStr;

  return `${hourStr} : ${minuteStr}`;
}
