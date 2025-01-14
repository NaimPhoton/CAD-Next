import Layout from "@/components/Layout/Layout";
import {actionLogin} from "@/state/slice/userSlice";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

interface eFromType {
  target: {
    name: string;
    value: string;
  };
}

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const [formInput, setFromInput] = useState({
    email: "",
    password: "",
  });

  const handleFromInputChange = (e: eFromType) => {
    const key = e.target.name;
    const value = e.target.value;

    setFromInput({
      ...formInput,
      [key]: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = (event: any) => {
    event.preventDefault();
    dispatch(actionLogin(formInput));
  };

  return (
    <Layout title="Login/Register">
      <form onSubmit={handleLogin}>
        <div style={{marginBottom: "5px"}}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            name="email"
            placeholder="E-mail"
            value={formInput.email}
            onChange={handleFromInputChange}
          />
        </div>
        <div style={{marginBottom: "5px"}}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            name="password"
            placeholder="Password"
            value={formInput.password}
            onChange={handleFromInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default LoginPage;
