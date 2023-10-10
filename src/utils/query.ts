import { useMutation, useQuery } from '@tanstack/react-query';
import AxiosAdapters from './axiosAdapter';
import { notifications } from '@mantine/notifications';

interface QueryProps {
  key: string;
  fn: () => Promise<any>; // Adjust this type based on the actual return type of fn
  options?: {
    enabled?: boolean;
  };
  callback?: () => void;
}

interface ExecuteFetchOptions {
  baseURL: string;
  timeout?: number;
}
  
export function Query({ key,fn,options={},callback }:QueryProps) {
  const data = useQuery([key], () => fn(), {
    enabled: options.enabled,
    initialData: null,
    onSuccess: (res) => {
      callback && callback();
      return res;
    },
    onError: (error) => {
      return error;
    },
  });
  return data
}

export function Mutation(options:any, callback: (() => void) | undefined) {
  const config = options()
  return useMutation(
    (payload:any) => {
      return excuteFetch(payload,config);
    },
    {
      onSuccess: (res) => {
        notifications.show({
          title: config.message.title,
          message: config.message.success,
        })
        callback && callback();
        return res;
      },
      onError: (error) => {
        return error;
      },
    },
  );
}

export async function excuteFetch(payload:any, options:ExecuteFetchOptions) {
  const modOptions = {
    ...options,
    data: payload,
  };
  return AxiosAdapters(modOptions);
}