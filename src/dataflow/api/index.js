import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = localStorage.getItem("token");

export const authApi = createApi({
    reducerPath: 'verify',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api-login-register-marc.herokuapp.com/auth' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        // verify: build.query({
        //     query: ({ patch }) => ({
        //         url: '/verify',
        //         method: 'post',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             "x-access-token": token
        //         },
        //         body: patch,
        //     }),
        //     providesTags: [{tyoe: "Post", name: "verify"}],
        // }),
        getVerify: build.query({
            query: () => ({
                url: '/verify',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": token
                },
            }),
        })
                    
    }),
});

            

export const { useGetVerifyQuery } = authApi;