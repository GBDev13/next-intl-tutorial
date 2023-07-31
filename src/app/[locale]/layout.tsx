import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import {createTranslator} from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
 
  return {
    title: t('Metadata.Title'),
  };
}

export default async function LocaleLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string }}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
