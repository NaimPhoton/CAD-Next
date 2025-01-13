import Layout from "@/components/Layout/Layout";
import React from "react";
// import { useSelector } from "react-redux";

const LoginPage: React.FC = () => {
  // const history = useHistory();
  // const dispatch = useDispatch();

  // const {access_token} = useSelector((state) => state.user);

  // if (access_token) {
  // history.push("/");
  // }
  return (
    <Layout title="Login/Register">
      <form>
        <div style={{marginBottom: "5px"}}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            name="email"
            style={{borderRadius: "50px"}}
            className="form-control my-3"
            placeholder="E-mail"
            // value={formInput.email}
            // onChange={handleFromInputChange}
          />
        </div>
        <div style={{marginBottom: "5px"}}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default LoginPage;
