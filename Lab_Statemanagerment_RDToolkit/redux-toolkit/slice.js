import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductApi } from "../src/api/product.api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await ProductApi.getProductsList();
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await ProductApi.deleteProduct(id);
    return id;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product) => {
    try {
      const data = await ProductApi.addProduct(product);
      return data;
    } catch (error) {
      throw new Error(error.message || "Lỗi khi tạo sản phẩm");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        console.log(action);

        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Lỗi không xác định";
      });
  },
});

export default productSlice.reducer;
