import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import TanstackQueryLayout from './integrations/tanstack-query/layout'

import * as TanstackQuery from './integrations/tanstack-query/root-provider'

import reportWebVitals from './reportWebVitals.ts'

import TripsPage from "./pages/trips/index.tsx"
import FleetPage from "./pages/fleet/index.tsx"
import FleetDetailsPage from "./pages/fleet/FleetDetailsPage.tsx"
import AppContainer from "./components/AppContainer/AppContainer.tsx"

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </>
  ),
})

const projectLayout = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AppContainer,
})

const tripRoutes = createRoute({
  getParentRoute: () => projectLayout,
  path: "/trips",
  component: TripsPage
})


// 

const fleetIndex = createRoute({
  getParentRoute: () => projectLayout,
  path: "/fleets",
  component: FleetPage
})


const fleetDetailsPage = createRoute({
  getParentRoute: () => projectLayout,
  path: "/fleets/$id",
  component: FleetDetailsPage
})

// const newFleet = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/fleets/new",
//   component: NewFleet,

// })




// const driverRoutes = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/operators",
//   component: DriverPage
// })




const routeTree = rootRoute.addChildren([
  projectLayout.addChildren([tripRoutes, fleetIndex.addChildren([fleetDetailsPage])])
])

const router = createRouter({
  routeTree,
  context: {
    ...TanstackQuery.getContext(),
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TanstackQuery.Provider>
        <RouterProvider router={router} />
      </TanstackQuery.Provider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
