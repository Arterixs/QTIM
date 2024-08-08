import useCustomFetch from '~/composables/useCustomFetch';

export interface Post {
  createdAt: string | null,
  description: string | null,
  id: string,
  image: string | null,
  preview: string | null,
  refreshToken: string | null,
  title: string | null
}

export const getPosts = () => useCustomFetch<Post[]>('/qtim-test-work/posts', {
  lazy: true,
});
