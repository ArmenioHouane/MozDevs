import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// List of supported locales
const locales = ['en', 'de', 'pt', 'es', 'jp'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) {
    notFound();  // Handle invalid locale
  }

  try {
    // Dynamically import messages for the detected locale
    const messages = await import(`../messages/${locale}.json`);
    return {
      messages: messages.default
    };
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    notFound();  // Handle missing locale file
  }
});
