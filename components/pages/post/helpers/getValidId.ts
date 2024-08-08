export const getValidId = (postId: string | string[]) => {
  if (Array.isArray(postId)) {
    throw new TypeError('Invalid post id');
  }

  const postIdNumber = Number(postId);

  if (Number.isNaN(postIdNumber)) {
    throw new TypeError('Invalid post id');
  }

  return postIdNumber;
};
