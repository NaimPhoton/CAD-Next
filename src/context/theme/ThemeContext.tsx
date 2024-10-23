import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback, // Added useCallback
} from "react";

// Define the shape of the theme context
interface ThemeContextType {
  theme: string; // Current theme (e.g., 'light' or 'dark')
  toggleTheme: () => void; // Function to toggle the theme
}

// Create the ThemeContext with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component for the ThemeContext
export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState<string>("light"); // Initial theme state

  // Memoize the toggleTheme function
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []); // No dependencies, as it only relies on setTheme

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({theme, toggleTheme}),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children} {/* Render children components */}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider"); // Ensure it's used within the provider
  }
  return context;
};
