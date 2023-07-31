import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { SectionTitle } from "@/components/section-title";

import { benefitOne, benefitTwo } from "@/components/data";
import { Benefits } from "@/components/benefits";
import { Faq } from "@/components/faq";

import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("LandingPage");
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle={t("NextlyBenefits")}
        title={t("BenefitsTitle")}>
        {t("BenefitsSubtitle")}
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle={t("FAQ")} title={t("FrequentlyAskedQuestions")}>
        {t("FAQDescription")}
      </SectionTitle>
      <Faq />
    </>
  );
}

export default Home;