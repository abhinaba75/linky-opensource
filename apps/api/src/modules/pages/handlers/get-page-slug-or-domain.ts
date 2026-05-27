import prisma from '@/lib/prisma';
import { Static, Type } from '@fastify/type-provider-typebox';
import { captureException } from '@sentry/node';
import { FastifyRequest, FastifyReply } from 'fastify';
import safeAwait from 'safe-await';

export const getPageBySlugOrDomainSchema = {
  query: Type.Object({
    slug: Type.String(),
    domain: Type.String(),
  }),
  response: {
    200: Type.Object({
      id: Type.String(),
      organizationId: Type.String(),
      slug: Type.String(),
      publishedAt: Type.Union([Type.String(), Type.Null()]),
    }),
    500: Type.Object({
      error: Type.String(),
    }),
  },
};

export async function getPageBySlugOrDomainHandler(
  request: FastifyRequest<{
    Querystring: Static<typeof getPageBySlugOrDomainSchema.query>;
  }>,
  response: FastifyReply
): Promise<Static<(typeof getPageBySlugOrDomainSchema.response)[200]>> {
  const headers = request.headers;

  const apiKey = headers['x-api-key'];

  if (!apiKey || apiKey !== process.env.INTERNAL_API_KEY) {
    return response.forbidden();
  }

  // Single-tenant: always return the first page regardless of slug/domain
  const [error, page] = await safeAwait(
    prisma.page.findFirst({
      where: {
        deletedAt: null,
      },
      orderBy: {
        createdAt: 'asc',
      },
      select: {
        id: true,
        organizationId: true,
        publishedAt: true,
        slug: true,
      },
    })
  );

  if (error) {
    console.error(error);
    captureException(error);
    return response.internalServerError();
  }

  if (!page) {
    return response.notFound();
  }

  return response.status(200).send(page);
}
