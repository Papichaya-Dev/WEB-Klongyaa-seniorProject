export function dateFormat(dateString: string) {
  const DATE = new Date(dateString);
  const MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  const dateFormatCompleted = DATE.getDate() + " " + MONTHS[DATE.getMonth()] + " " + DATE.getFullYear();

  return dateFormatCompleted;
}
