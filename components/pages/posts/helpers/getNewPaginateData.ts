import { type Post } from '~/services/getPosts';

import { AMOUNT_ARTICLES_ON_PAGE } from '~/components/pages/posts/constants';

export const getNewPaginateData = (posts: Post[]) => {
  const parent = [];
  let children: Post[] = [];

  posts.forEach((post, index) => {
    if (index && (index % AMOUNT_ARTICLES_ON_PAGE === 0)) {
      parent.push(children);
      children = [];
    }
    children.push(post);
  });

  parent.push(children);
  return parent;
};
