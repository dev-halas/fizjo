import pl from "../locales/pl";

/**
 * Typ języka wspieranego przez aplikację.
 */
export type SupportedLanguage = "pl" ; // rozszerzalne

/**
 * Uniwersalny typ zagnieżdżonych tłumaczeń dowolnej głębokości
 */
export type TranslationDictionary = {
  [key: string]: string | TranslationDictionary;
};

/**
 * Wszystkie tłumaczenia zorganizowane według języków.
 */
const translationsByLanguage: Record<SupportedLanguage, TranslationDictionary> = {
  pl,
};

let currentLanguage: SupportedLanguage = "pl";

/**
 * Ustawia aktualny język aplikacji.
 */
export function setLanguage(lang: SupportedLanguage): void {
  currentLanguage = lang;
}

/**
 * Odczytuje zagnieżdżoną wartość tłumaczenia na podstawie klucza w postaci "a.b.c".
 */
function resolveNestedTranslation(
  dictionary: TranslationDictionary,
  keyPath: string
): string | undefined {
  return keyPath.split(".").reduce<unknown>((accumulator, key) => {
    if (
      typeof accumulator === "object" &&
      accumulator !== null &&
      key in accumulator
    ) {
      return (accumulator as TranslationDictionary)[key];
    }
    return undefined;
  }, dictionary) as string | undefined;
}

/**
 * Podmienia dynamiczne wartości w szablonie, np. {{name}}.
 */
function interpolateTranslation(
  template: string,
  values?: Record<string, string | number>
): string {
  if (!values) return template;

  return template.replace(/{{(\w+)}}/g, (_, key) => {
    const value = values[key];
    return value !== undefined ? String(value) : "";
  });
}

/**
 * Zwraca przetłumaczony tekst na podstawie klucza i opcjonalnych wartości.
 */
export function translate(
  key: string,
  values?: Record<string, string | number>
): string {
  const dictionary = translationsByLanguage[currentLanguage];
  const rawText = resolveNestedTranslation(dictionary, key);

  if (typeof rawText !== "string") return key;

  return interpolateTranslation(rawText, values);
}
