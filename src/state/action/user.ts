import axios from "../axios";
export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserLogin {
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
    if (result.status === 200 && result.data) {
      throw result.data.data;
    }
  } catch (error) {
    console.error(error);
  }
};

const userLogin = async (userData: UserLogin) => {
  try {
    const result = await axios({
      method: "POST",
      url: "/user/login",
      data: userData,
    });

    if (result.status === 200 && result.data) {
      return result.data.data.access_token;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export {userRegister, userLogin};
