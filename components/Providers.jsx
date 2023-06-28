"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Provider store={store}>{children}</Provider>;

  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
