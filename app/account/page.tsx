'use client';

import { useAuth } from '@/components/providers/auth-provider';
import { PlanDetails } from '@/components/subscription/plan-details';
import { createSubscription } from '@/lib/subscription';

export default function AccountPage() {
  const { user } = useAuth();

  const handleSubscribe = async (planId: string) => {
    if (!user) return;
    await createSubscription(user.id, planId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      <div className="space-y-8">
        <PlanDetails onSubscribe={handleSubscribe} />
      </div>
    </div>
  );
}