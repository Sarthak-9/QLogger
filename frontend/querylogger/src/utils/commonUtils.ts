export const trimString = (str: string, length: number) => {
  return str.split(' ').slice(0, length).join(' ');
};