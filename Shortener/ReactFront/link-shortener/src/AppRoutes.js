import { Home } from "./Home";
import { LinksListPage } from "./LinksListPage";
import { Info } from "./Info";
import { About } from "./About";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
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