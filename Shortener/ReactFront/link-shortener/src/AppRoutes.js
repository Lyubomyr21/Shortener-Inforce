import { LinksListPage } from "./LinksListPage";
import { Info } from "./Info";
import { About } from "./About";


const AppRoutes = [
  {
    path: '/table',
    element: <LinksListPage />
  },
  {
    path: '/info',
    element: <Info />
  },
  {
    path: '/about',
    element: <About />
  }
];

export default AppRoutes;