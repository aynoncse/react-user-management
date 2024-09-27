import React from "react";

import UsersProvider from "./context/UserContext";
import AppInner from "./components/AppInner";

const App = () => {
  return (
    <UsersProvider>
      <AppInner />
    </UsersProvider>
  );
}

export default App;