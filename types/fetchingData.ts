import type { AsyncData } from '#app';
import type { FetchError } from 'ofetch';

export type TypeCustomFetch<T> = AsyncData<T | null, FetchError<unknown> | null>
