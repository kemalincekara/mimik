import { foldCase } from '@mimik/core/i18n/fold-case';

export function MatchText({ text, query }: { text: string; query: string }) {
  const start = query ? foldCase(text).indexOf(foldCase(query)) : -1;
  if (start < 0) return <>{text}</>;
  const end = start + query.length;
  return (
    <>
      {text.slice(0, start)}
      <mark className="rounded-[3px] bg-lavender px-px text-foreground">{text.slice(start, end)}</mark>
      {text.slice(end)}
    </>
  );
}
