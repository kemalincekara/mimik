export function foldCase(text: string): string {
  return text.replace(/[İIı]/g, 'i').toLowerCase();
}
