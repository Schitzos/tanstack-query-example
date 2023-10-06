import { useQuery } from '@tanstack/react-query';

interface QueryProps {
    key: string;
    fn: () => Promise<any>; // Adjust this type based on the actual return type of fn
    options?: {
      enabled?: boolean;
    };
    callback?: () => void;
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

// export function Mutation(options, callback) {
//   const { setToastr } = useContext(ToastrContext);
//   return useMutation(
//     (payload) => {
//       return excuteFetch(payload, options);
//     },
//     {
//       onSuccess: (res) => {
//         !options.disableSuccessToastr &&
//           setToastr({
//             isOpen: true,
//             message: options?.message?.success || res.message,
//             color: 'success',
//           });
//         callback && callback();
//         return res;
//       },
//       onError: (error) => {
//         !options.disableErrorToastr &&
//           setToastr({
//             isOpen: true,
//             message: options?.message?.error || error?.response?.data?.message,
//             color: 'error',
//           });
//         return error;
//       },
//     },
//   );
// }

// export async function excuteFetch(payload, options) {
//   const modOptions = {
//     ...options,
//     data: payload,
//   };
//   return Fetch(modOptions);
// }