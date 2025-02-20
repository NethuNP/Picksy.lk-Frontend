import { apiSlice } from "../apiSlice";
import { Product } from "@/types/types";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    newProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
    updateProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: "PUT",
        body: product,
      }),
    }),
    deleteProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: "DELETE",
      }),
    }),
    getAllProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useNewProductMutation,
  useUpdateProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
} = productApiSlice;
export default productApiSlice;
