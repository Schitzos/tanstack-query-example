import getQueryClient from './getQueryClient';
import { dehydrate } from '@tanstack/react-query';

interface HydrateQuery {
    key: string;
    fn: () => Promise<any>;
  }
  
export default async function prefetchingQuery(hydrateQueries:HydrateQuery[]){
  const queryClient = getQueryClient();
  for (const query of hydrateQueries) {
    await queryClient.prefetchQuery([query.key], query.fn);
  }
  const dehydratedState = dehydrate(await queryClient);
  return dehydratedState
    
}