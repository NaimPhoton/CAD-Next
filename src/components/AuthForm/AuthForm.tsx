import React, {useState, memo} from "react"; // Add memo to the import
import {useAuth} from "@/context/auth/AuthContext";

// Wrap the AuthForm component with React.memo
// eslint-disable-next-line react/display-name
const AuthForm: React.FC = memo(() => {
  const {user, login, logout} = useAuth(); // Get user state and functions from context
  const [username, setUsername] = useState<string>("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      login(username); // Call login function with username
      setUsername(""); // Clear input
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user}!</h2>
          <button onClick={logout}>Logout</button> {/* Logout button */}
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <button type="submit">Login</button> {/* Login button */}
        </form>
      )}
    </div>
  );
});

// Export the memoized component
export default AuthForm;
