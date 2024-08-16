
import { axiosClient } from "@/utils/axiosClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMyInfo = createAsyncThunk("user/getMyInfo", async () => {
    try { 
        const data = await axiosClient.get('/api/user/getMyInfo');
        return data.result;
    } catch (e) {
        return Promise.reject(e);
    }
})

const workingSlice = createSlice({
    name: 'working',
    initialState: {
        isLoading: false,
        toastData: {},
        myProfile: {},
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        showToast: (state, action) => {
            state.toastData = action.payload;
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(getMyInfo.fulfilled, (state, action) => {
            state.myProfile = action.payload.user
        });
    }
});

export const { setLoading, showToast } = workingSlice.actions;
export default workingSlice.reducer;