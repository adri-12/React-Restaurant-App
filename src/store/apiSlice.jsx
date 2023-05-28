import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurantsApi = createApi({
  reducerPath: "restaurantsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query({
      query: () => "restaurants",
    }),
    getRestaurant: builder.query({
      query: (restaurantId) => `restaurants/${restaurantId}`,
    }),
  }),
});

export const { useGetAllRestaurantsQuery, useGetRestaurantQuery } =
  restaurantsApi;
