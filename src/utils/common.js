export const formatDate = (date) => {
  if (!(date instanceof Date)) {
    throw new Error('Invalid input, expected a Date object.');
  }

  // Day names and month names
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayName = days[date.getDay()]; // e.g., "Wed"
  const day = date.getDate(); // e.g., "31"
  const monthName = months[date.getMonth()]; // e.g., "July"
  const year = date.getFullYear(); // e.g., "2024"

  return `${dayName} ${day}, ${monthName} ${year}`;
};
