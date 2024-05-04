import ReactDOM from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./routes.tsx";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import ReactGA from "react-ga4";

const router = createHashRouter(routes);
ReactGA.initialize("G-4J3HW0PMCS");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);
