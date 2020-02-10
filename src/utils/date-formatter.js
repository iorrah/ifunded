const pad = (number, width = 2, filling = '0') => {
  const numberStr = `${number}`;

  if (numberStr.length >= width) {
    return number;
  }

  const padding = new Array(width - numberStr.length + 1).join(filling);
  return `${padding}${numberStr}`;
};

const months = [
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
];

const formatDate = (date) => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${pad(day)} ${months[monthIndex].name} ${year}`;
};

export { months, formatDate };
