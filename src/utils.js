export const formatPlayerValue = players => {
  if (!players) return "Any";
  if (players < 6) return players;
  return `+${ players }`;
};

export const formatTimeValue = time => {
  if (!time) return "Any";
  if (time < 4) return `${ time - 1 } - ${ time }`;
  return `+${ time - 1 }`;
};
