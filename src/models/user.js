import { getUser } from '@/services/user';

export default {
    namespace: 'user',
    state: [],
    effects: {
        *get({ payload }, { call, put }) {
            const resp = yield call(getUser);
            const data = resp.data.results[0];
            const name = data.name.first;
            const img = data.picture.thumbnail;
            const email = data.email;
            const phone = data.phone;
            yield put({
                type: 'changeState',
                payload: { name, img, email, phone },
            });
        }
    },
    reducers: {
        changeState(state, { payload }) {
            return  {...state, ...payload} ;
        }
    }
}