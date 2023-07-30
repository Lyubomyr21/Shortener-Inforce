import { LinksListPage } from "./LinksListPage";
import { Info } from "./Info";
import { About } from "./About";
import LinkRedirect from './LinkRedirect'


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
  },
  {
    path: `/redirect/:id`,
    element: <LinkRedirect />
  }
];

export default AppRoutes;