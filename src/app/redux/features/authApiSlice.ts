import { apiSlice } from "../apiSlice";
import type {AuthResponse, User, UserLogin} from "@/types/types";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<AuthResponse, User>({
            query: (user) => ({
                url: "users/register",
                method: "POST",
                body: user,
            }),
        }),
        login: builder.mutation<AuthResponse, UserLogin>({
            query: (user) => ({
                url: "users/login",
                method: "POST",
                body: user,
            }),
        }),
    })
});

export const { useRegisterMutation, useLoginMutation } = authApiSlice;
export default authApiSlice;