import "./index.css";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <SidebarProvider>
    <Suspense fallback={<ThemedSuspense />}>
      <Windmill usePreferences>
        <App />
      </Windmill>
    </Suspense>
  </SidebarProvider>
);
