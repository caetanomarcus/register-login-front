import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        userInfo: {},
        isLoggedIn: false,
        isLoading: false,
        error: null,
    },
    screen: 'login'
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.user.name = action.payload;
        },
        setUserEmail: (state, action) => {
            state.user.email = action.payload;
        },
        setUserPassword: (state, action) => {         
            state.user.password = action.payload;
        },
        setUserConfirmPassword: (state, action) => {
            state.user.confirmPassword = action.payload;
        },
        setUserInfo: (state, action) => {
            state.user.userInfo = action.payload;
        },
        setUserIsLoggedIn: (state, action) => {
            state.user.isLoggedIn = action.payload;
        },
        setUserIsLoading: (state, action) => {
            state.user.isLoading = action.payload;
        },
        setUserError: (state, action) => {
            state.user.error = action.payload;
        },
        setScreen: (state, action) => {
            state.screen = action.payload;
        }
    },
});

export const {
    setUserName,
    setUserEmail,
    setUserPassword,
    setUserConfirmPassword,
    setUserInfo,
    setUserIsLoggedIn,
    setUserIsLoading,
    setUserError,
    setScreen
} = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;