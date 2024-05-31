import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthStates {
  gcal_code: string | null
}

const initialState: AuthStates = { gcal_code: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGcalCode(state, action: PayloadAction<string | null>) {
      state.gcal_code = action.payload;
    }
  }
})

export const { setGcalCode } = authSlice.actions;
export default authSlice.reducer;
