"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <NextThemesProvider
      {...props}
      // forcedTheme="dark"
      attribute="class"
      enableSystem
      // disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
// "use client";

// import { ThemeProvider as NextThemesProvider } from "next-themes";
// const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   //@ts-ignore
//   // const theme = window?.Telegram?.WebApp?.colorScheme ?? "dark";

//   return (
//     // <NextThemesProvider attribute="class" enableSystem>
//     <NextThemesProvider forcedTheme={"dark"} attribute="class" enableSystem>
//       {children}
//     </NextThemesProvider>
//   );
// };

// export default ThemeProvider;
