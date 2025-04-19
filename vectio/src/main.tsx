import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
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

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'

import DashboardPage from "./pages/dashboard/index.tsx"
import TripsPage from "./pages/trips/index.tsx"
import FleetPage from "./pages/fleet/index.tsx"
import DriverPage from "./pages/operators/index.tsx"

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <TanstackQueryLayout />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DashboardPage,
})

const tripRoutes = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trips",
  component: TripsPage
})


const fleetRoutes = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fleets",
  component: FleetPage
})

const driverRoutes = createRoute({
  getParentRoute: () => rootRoute,
  path: "/operators",
  component: DriverPage
})




const routeTree = rootRoute.addChildren([
  indexRoute,
  tripRoutes,
  fleetRoutes,
  driverRoutes

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
