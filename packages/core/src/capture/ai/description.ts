import { generateText } from 'ai';
import { localStorage } from '@/core/env';
import { cleanDescription } from './clean-description';
import { formatExamples, resolveExamples } from './examples';
import {
  DEFAULT_AI_LANGUAGE,
  getLanguageSuffix,
  SCREEN_STEP_DESCRIPTION_PROMPT,
  STEP_DESCRIPTION_PROMPT,
} from './prompts';
import { createModel } from './provider';

export async function getAIDescription(
  context: string,
  provider: string,
  model: string,
  apiKey: string,
  baseUrl?: string,
  template = STEP_DESCRIPTION_PROMPT,
): Promise<string | null> {
  const settings = await localStorage.get(['aiLanguage']);
  const locale = (settings.aiLanguage as string) || DEFAULT_AI_LANGUAGE;
  const examples = resolveExamples(locale);
  const prompt = template
    .replace(
      '{{examples}}',
      formatExamples(template === SCREEN_STEP_DESCRIPTION_PROMPT ? examples.screenSteps : examples.steps),
    )
    .replace('{{context}}', () => context);
  const { text, finishReason } = await generateText({
    model: createModel(provider, model, apiKey, baseUrl),
    prompt: prompt + getLanguageSuffix(locale),
    maxOutputTokens: 150,
  });
  return cleanDescription(text, finishReason);
}
