export default function sliceDogs(page) {
  const prev = page - 1;
  const from = prev * 8;
  const to = from + 8;
  return [from, to];
}
