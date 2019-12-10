export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState:{
      user: { 
        name: "Davut",
        img: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
        email: "davut.aksit@example.com",
        phone: "(992)-403-9547",
      },
    }
  },
};
