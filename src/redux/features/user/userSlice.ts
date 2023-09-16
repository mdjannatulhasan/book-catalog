import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
    email: string;
    id: string;
    role: string;
}

const initialState: IUserState = {
    email: '',
    id: '',
    role: 'user',
};

const userSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload?.email;
            state.id = action?.payload.id;
            state.role = action?.payload.role;
        },
        handleLogout: (state) => {
            state.email = '';
            state.id = '';
            state.role = 'user';
            localStorage.removeItem('id');
            localStorage.removeItem('role');
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        },
    },
});

export const { setUser, handleLogout } = userSlice.actions;

export default userSlice.reducer;
