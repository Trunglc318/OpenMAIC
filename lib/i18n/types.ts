import { supportedLocales } from './locales';

export type Locale = (typeof supportedLocales)[number]['code'];

// Bản triển khai cho người Việt: mặc định là vi-VN thay vì zh-CN.
// Người dùng vẫn đổi được ngôn ngữ trong UI; resolve-locale.ts vẫn ưu tiên
// cookie và Accept-Language (vi / vi-VN -> vi-VN) trước khi rơi về mặc định này.
export const defaultLocale: Locale = 'vi-VN';

/** A supported locale code exactly as given, or undefined for anything else. */
export function supportedLocaleOf(value: unknown): Locale | undefined {
  return typeof value === 'string' && supportedLocales.some((locale) => locale.code === value)
    ? (value as Locale)
    : undefined;
}
