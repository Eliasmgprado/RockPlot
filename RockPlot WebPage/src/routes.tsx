import DownloadPage from "./components/Download/Download";
import Releases from "./components/Download/Releases";
import Shell from "./components/Layout/Shell";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const DEFAULT_ERROR_PAGE = <ErrorPage />;

export const routes = [
  {
    path: "/",
    element: <Shell />,
    errorElement: DEFAULT_ERROR_PAGE,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: DEFAULT_ERROR_PAGE,
      },
      {
        path: "downloads",
        element: <DownloadPage />,
        errorElement: DEFAULT_ERROR_PAGE,
      },
      {
        path: "releases",
        element: <Releases />,
        errorElement: DEFAULT_ERROR_PAGE,
      },
    ],
  },
  // {
  //   path: "/RockPlot/",
  //   element: <HomePage />,
  //   errorElement: DEFAULT_ERROR_PAGE,
  // },
  // {
  //   path: "/RockPlot/downloads",
  //   element: <DownloadPage />,
  //   errorElement: DEFAULT_ERROR_PAGE,
  // },
  //   {
  //     path: "/rockplot",
  //     element: <HasLoggin element={<AppLayout />} />,
  //     errorElement: DEFAULT_ERROR_PAGE,
  //     children: [
  //       {
  //         index: true,
  //         element: <AppIndex />,
  //         errorElement: DEFAULT_ERROR_PAGE,
  //       },
  //       {
  //         path: "table",
  //         element: <GroupsView />,
  //         errorElement: DEFAULT_ERROR_PAGE,
  //       },
  //       {
  //         path: "graphs",
  //         element: <GraphsView />,
  //         errorElement: DEFAULT_ERROR_PAGE,
  //       },
  //     ],
  //   },
];
