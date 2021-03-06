import { NavMenu } from '@app/shared/types/nav-menu.interface';

const dashboard: NavMenu[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: 'NAV.DASHBOARD',
    type: 'item',
    iconType: 'feather',
    icon: 'icon-home',
    key: 'dashboard',
    submenu: [],
    role: ['Customer', 'Admin']
  },
];

const apps: NavMenu[] = [
  {
    path: '',
    title: 'Apps',
    translateKey: 'NAV.APPS',
    type: 'title',
    iconType: 'feather',
    icon: 'icon-grid',
    key: 'apps',
    submenu: [
      {
        path: '/request',
        title: 'Yêu cầu số điện thoại',
        translateKey: 'NAV.CASH_FUND_MANAGEMENT',
        type: 'item',
        iconType: 'feather',
        icon: 'icon-message-square',
        key: 'apps.cashdfund',
        submenu: [],
        role: ['Customer', 'Admin']
      },
      {
        path: '/transaction',
        title: 'Lịch sử giao dịch',
        translateKey: 'NAV.TRANSACTION_HISTORY_MANAGEMENT',
        type: 'item',
        iconType: 'feather',
        icon: 'icon-shopping-cart',
        key: 'apps.transaction',
        submenu: [],
        role: ['Customer', 'Admin']
      },
      {
        path: '/customer',
        title: 'Khách hàng',
        translateKey: 'NAV.CUSTOMER',
        type: 'item',
        iconType: 'feather',
        icon: 'icon-user',
        key: 'apps.customer',
        submenu: [],
        role: ['Admin']
      },
      {
        path: '/web-config',
        title: 'Cấu hình',
        translateKey: 'NAV.WEB_CONFIGURATION',
        type: 'item',
        iconType: 'feather',
        icon: 'icon-server',
        key: 'apps.webConfig',
        submenu: [],
        role: ['Admin']
      },
    ],
    role: ['Customer', 'Admin']
  }
];

export const navConfiguration: NavMenu[] = [
  ...dashboard,
  ...apps,
];
