import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FeaturedSection } from '@/components/landing/featured-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      <FeaturedSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
}