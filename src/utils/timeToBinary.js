export function timeToBinary (time, format) {
  const year = time.getFullYear().toString().padStart(2, '0');
  const month = time.getMonth().toString().padStart(2, '0');
  const day = time.getDate().toString().padStart(2, '0');
  const hour = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  // return (hour+minutes+seconds);
  // return (hour+minutes);
  // return (year+month+day);

  if (format === 'hms') {
    return (hour+minutes+seconds)
  } else if (format === 'date') {
    return (year+month+day)
  }
} 