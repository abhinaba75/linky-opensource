'use server';

import { apiServerFetch } from '@/app/lib/api-server';
const captureException = console.error; const captureMessage = console.log;
import { auth } from '@trylinky/common';

export async function signOut() {
  await auth.signOut();
}

export async function hideOnboardingTour() {
  try {
    const req = await apiServerFetch('/flags/hide-onboarding-tour', {
      method: 'POST',
    });

    const res = await req.json();

    if (res.success) {
      return {
        success: true,
      };
    }

    return {
      success: false,
    };
  } catch (error) {
    captureException(error);

    return {
      success: false,
    };
  }
}
