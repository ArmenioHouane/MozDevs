import { useTranslations } from 'next-intl';
import Image from "next/image";
import Hero from "@/pages/hero";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
     
      <Hero />
    </>
  );
}