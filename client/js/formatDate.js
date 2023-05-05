export const formatDate = (date) => {
  const realTime = new Date(date)

  const correctDate = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }
  const resultDate = realTime.toLocaleString('ru', correctDate)
  console.log(1);

  return resultDate;
}