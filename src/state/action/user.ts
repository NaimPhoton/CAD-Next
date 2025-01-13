import axios from "../axios";

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userRegister = async (newUser: NewUser) => {
  try {
    const result = await axios({
      method: "POST",
      url: "/register",
      data: newUser,
    });
    if (!result) {
      throw result;
    }
    console.log("🚀 ~ userRegister ~ result:", result);
  } catch (error) {
    console.log(error);
  }
};

const userLogin = (user: unknown) => {
  return axios({
    method: "POST",
    url: "/login",
    data: user,
  });
};

export {userRegister, userLogin};
