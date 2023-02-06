// To get all the slots of a day
export function getSlots(availability) {
  const start = Number(availability.trim().split("-")[0].substring(0, 2));
  const end = Number(availability.trim().split("-")[1].substring(0, 2));
  let slots = [];
  for (let i = start; i < end; i++) {
    slots.push([`${i}:00`, `${i + 1}:00`].join("-"));
  }
  return slots;
}
