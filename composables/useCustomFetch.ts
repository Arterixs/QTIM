import type { UseFetchOptions } from 'nuxt/app';
import { useFetch, useRuntimeConfig } from 'nuxt/app';
import type { RuntimeConfig } from 'nuxt/schema';

export default function useCustomFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config: RuntimeConfig = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase as string,
    headers: {
      Accept: 'application/json',
    },
  };

  const params: UseFetchOptions<T> = Object.assign(defaults, options);

  return useFetch(url, params);
}
