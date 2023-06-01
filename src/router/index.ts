import * as React from 'react'
import { RouteObject, RouteProps, RouterProps } from 'react-router'
import Layout from '@/layouts/index'

const routes: RouteObject[] = [

  {
    path: '/login',
    Component: React.lazy(() => import('@/pages/login/index')),
    // name: 'login',
  },
  {
    path: "/404",
    Component: React.lazy(() => import('@/pages/404/index')),
    // name: '404',
    // hidden: true
  },
  {
    Component: React.lazy(() => import('@/layouts/index')),
    children: [
      {
        path: '/',
        Component: React.lazy(() => import('@/pages/index/index')),
        // name: 'index',
      },
      {
        path: '/masters/products',
        Component: React.lazy(() => import('@/pages/masters/products/index'))
      },
      {
        path: '/masters/product-wise-toll-center',
        Component: React.lazy(() => import('@/pages/masters/product-wise-toll-center/index'))
      },
      {
        path: '/orders/approval',
        Component: React.lazy(() => import('@/pages/orders/approval/index')),
        // name: 'Orders',
      },
      {
        path: '/orders/history',
        Component: React.lazy(() => import('@/pages/orders/history/index')),
        // name: 'OrdersDetail',
      },
    ]
  },

  {
    path: "*",
    Component: React.lazy(() => import('@/pages/404/index')),
    // name: '404',
    // hidden: true
  },
]

console.log(111111)

export {
  routes,
}