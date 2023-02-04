export function getDates() {
  const date = new Date();
  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dates = [
    `${day}-${month}-${year}`,
    `${day + 1}-${month}-${year}`,
    `${day + 2}-${month}-${year}`,
  ];
  return dates;
}
