import { validateEmail } from '@/lib/email';
import prisma from '@/lib/prisma';
import { createNewOrganization } from '@/modules/organizations/utils';

export async function handleUserCreated({ userId }: { userId: string }) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw Error('User not found');
  }

  const newOrg = await createNewOrganization({
    ownerId: userId,
    type: 'personal',
  });

  const isValidEmail = validateEmail(user.email);

  return newOrg.id;
}

export const createUserInitialFlags = async (userId: string) => {
  await prisma.userFlag.create({
    data: {
      userId,
      key: 'showOnboardingTour',
      value: true,
    },
  });
};
