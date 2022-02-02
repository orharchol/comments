import React from "react";
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import {CommentsApp} from "./app";

const queryClient = new QueryClient();

const Comments = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <CommentsApp />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
};

export default Comments;