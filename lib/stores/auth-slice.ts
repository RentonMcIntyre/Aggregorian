import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthStates {
  gcal_code: string
}

const initialState: AuthStates = { gcal_code: '' };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGcalCode(state, action: PayloadAction<string>) {
      state.gcal_code = action.payload;
    }
  }
})

export const { setGcalCode } = authSlice.actions;
export default authSlice.reducer;
