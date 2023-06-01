import type { IBreadcurmb } from '@/types'


enum EBREADCRUMBS {
  HOME = 'HOME',
  MASTER = 'MASTERS'
}


// breadcrumbs
export const BREADCRUMBS_MAP: {
  [key: string]: IBreadcurmb
} = {
  HOME: {
    label: 'Home',
    path: '/'
  },
  MASTERS: {
    label: 'Masters',
  },
  MASTER_LIST: {
    label: 'Matser List',
  },
  PRODUCTS: {
    label: 'Products',
    path: '/masters/products'
  },
  PRODUCT_WISE_TOLL_CENTER: {
    label: 'Product Wise Toll Center',
    path: '/masters/product-wise-toll-center'
  },
  ORDERS: {
    label: 'Orders',
    path: '/masters/c'
  },
  ORDERS_APPROVAL: {
    label: 'OrdePending For My Approvalrs',
    path: '/orders/approval'
  },
  ORDERS_HISTORY: {
    label: 'Order History',
    path: '/orders/history'
  },
  MIS: {
    label: 'MIS',
  },
  MIS_ORDERS: {
    label: 'Orders',
  },
  MIS_INVOICES: {
    label: 'Invoices',
  },

}