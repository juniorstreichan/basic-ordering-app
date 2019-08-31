export function generateId(prefix = 'APP') {
  return `${prefix}-${new Date().getMilliseconds()}-${Math.random() * 500}`;
}
