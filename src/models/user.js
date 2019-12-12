import { getUser } from '@/services/user';
const initialState = {
    user: { 
      name: "Davut",
      img: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
      email: "davut.aksit@example.com",
      phone: "(992)-403-9547",
    },
    text : "Davut"
 }

export default {
    namespace: 'user',
    state: initialState,
    effects: {
        *get({ payload }, { call, put }) {
            const resp = yield call(getUser);
            const user = {};
            const data = resp.data.results[0];
            user.name = data.name.first;
            user.img = data.picture.thumbnail;
            user.email = data.email;
            user.phone = data.phone;
            yield put({
                type: 'changeState',
                payload: user,
            });
        }
    },
    reducers: {
        changeState(state, { payload }) {
            state.user = payload;
            state.text = payload.name;
            return  {...state};
        },
        changeText(state, {payload}){
            state.text = payload;
            return {...state};
        }
    }
}