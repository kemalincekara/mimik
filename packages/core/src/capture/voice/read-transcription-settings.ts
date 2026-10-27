import { localStorage } from '@/core/env';
import { DEFAULT_AI_LANGUAGE } from '../ai/prompts';
import { resolveVoiceApiKey, VOICE_KEY_SETTINGS } from './api-key';
import type { VoiceProvider } from './transcribe';

export interface TranscriptionSettings {
  provider: VoiceProvider;
  apiKey: string;
  language?: string;
}

export async function readTranscriptionSettings(): Promise<TranscriptionSettings> {
  const stored = await localStorage.get([...VOICE_KEY_SETTINGS, 'voiceLanguage', 'aiLanguage']);
  const { provider, apiKey } = resolveVoiceApiKey(stored);
  const locale = (stored.voiceLanguage ?? stored.aiLanguage ?? DEFAULT_AI_LANGUAGE) as string;
  return {
    provider,
    apiKey,
    language: locale.split('-')[0],
  };
}
