const getArabicPlural = (word, count) => {
  if (count === 2) return ` (${count} ${word}ان)`;
  if (count >= 3 && count <= 10) return ` (${count} ${word}ات )`;
  return `( ${count} ${word}) `;
};

export default getArabicPlural;
