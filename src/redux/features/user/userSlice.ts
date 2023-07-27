import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
    email: string;
}

const initialState: IUserState = {
    email: '',
};

const userSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload;
        },
        handleLogout: (state) => {
            state.email = '';
            localStorage.removeItem('email');
            localStorage.removeItem('token');
        },
    },
});

export const { setUser, handleLogout } = userSlice.actions;

export default userSlice.reducer;
