import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

type TProps = {
    children?: ReactNode;
};

export const QueryProvider = ({ children }: TProps) => {
    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: (error, { state: { data }, queryKey }) => {
                   // TODO: add error handler
                    // errorHandler(error, data);
            },
        }),
        mutationCache: new MutationCache({
            onError: (error, _, __, { state: { data } }) => {
              // TODO: add error handler
               // errorHandler(error, data);
            },
        }),
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 1,
            },
        },
    });

    return (
        <QueryClientProvider client={ queryClient }>
            { children }
        </QueryClientProvider>
    );
};
