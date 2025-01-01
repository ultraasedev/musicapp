export async function createSubscription(userId: string, planId: string) {
  // TODO: Implement subscription creation with Stripe
  return {
    id: 'sub_123',
    planId,
    status: 'active',
    currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  };
}

export async function cancelSubscription(subscriptionId: string) {
  // TODO: Implement subscription cancellation with Stripe
  return {
    status: 'cancelled',
  };
}