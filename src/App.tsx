import { Outlet } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Outlet />
    </MantineProvider>
  );
}

export default App;
