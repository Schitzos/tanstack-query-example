import { MantineProvider, createTheme } from '@mantine/core';
const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function MantineContextProvider({ children }: React.PropsWithChildren) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
}