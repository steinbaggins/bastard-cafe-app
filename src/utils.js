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

export const formatGameWeight = avarage => {
  let label = "Easy";
  if (avarage > 3) label = "Medium";
  else if (avarage > 4) label = "Complex";
  return label;
};
