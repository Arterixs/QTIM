import { createError } from '#app';

export const getValidId = (postId: string | string[]) => {
  if (Array.isArray(postId)) {
    throw createError({
      statusCode: 415,
      statusMessage: 'Invalid post id',
    });
  }

  const postIdNumber = Number(postId);

  if (Number.isNaN(postIdNumber)) {
    throw createError({
      statusCode: 415,
      statusMessage: 'Invalid post id',
    });
  }

  return postIdNumber;
};
