'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/components/providers/auth-provider';

interface PlanDetailsProps {
  onSubscribe: (planId: string) => Promise<void>;
}

export function PlanDetails({ onSubscribe }: PlanDetailsProps) {
  const { user } = useAuth();
  const t = useTranslations('subscription');

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        {t('currentPlan')}: {user?.subscription === 'premium' ? t('premium') : t('free')}
      </h2>
      {user?.subscription !== 'premium' && (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            {t('premiumFeatures')}
          </p>
          <Button onClick={() => onSubscribe('premium')}>
            {t('upgradeToPremium')}
          </Button>
        </div>
      )}
    </Card>
  );
}