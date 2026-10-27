import { unwrapQuotes } from './text';

const THINKING = /<think>[\s\S]*?(?:<\/think>|$)/gi;

export function cleanDescription(text: string, finishReason: string): string | null {
  if (finishReason === 'length') return null;
  const answer = unwrapQuotes(text.replace(THINKING, ''));
  if (!answer || answer.includes('\n')) return null;
  return answer;
}
