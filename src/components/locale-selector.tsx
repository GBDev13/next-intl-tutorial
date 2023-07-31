"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Toggle from "./toggle"
import { useLocale } from 'next-intl';

export const LocaleSelector = () => {
  const [enabled, setEnabled] = useState(false)

  const locale = useLocale()
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setEnabled(locale === "en")
  }, [locale])

  const onLocateChange = (newValue: boolean) => {
    const newLocale = newValue ? 'en' : 'pt'
    router.push(newLocale + '/' + pathname.replace(/\/(pt|en)?\/?/,'/'))
  }

  return (
    <div className="flex items-center gap-2">
      <Image className="cursor-pointer" onClick={() => onLocateChange(false)} width={30} height={22} src="/img/flags/br.svg" alt="Brazil Flag" />
      <Toggle enabled={enabled} setEnabled={onLocateChange} />
      <Image className="cursor-pointer" onClick={() => onLocateChange(true)} width={30} height={22} src="/img/flags/en.svg" alt="EUA Flag" />
    </div>
  )
}