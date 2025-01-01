import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    features: [
      'Ad-supported listening',
      'Basic audio quality',
      'Mobile app access',
      'Create playlists',
      'Limited skips'
    ]
  },
  {
    name: 'Premium',
    price: '9.99',
    features: [
      'Ad-free listening',
      'HD audio quality',
      'Offline mode',
      'Unlimited skips',
      'Cross-platform sync',
      'Exclusive content'
    ],
    highlighted: true
  }
];

export function PricingSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={`p-8 ${plan.highlighted ? 'border-primary' : ''}`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="w-full" 
              variant={plan.highlighted ? 'default' : 'outline'}
            >
              Get Started
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}