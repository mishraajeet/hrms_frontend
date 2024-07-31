import {GlobalService} from '../../../../services/global.service';
type Tab = {
  link:
    | 'Dashboard'
    | 'employee'
    | 'payroll'
    | 'Leave'
    | 'User Administration'
    | 'System Setting'
    | 'Sys Admin Backroom';
  icon: string;
  tooltip:
    | 'Dashboard'
    | 'Employee'
    | 'payroll'
    | 'Leave'
    | 'User Administration'
    | 'System Setting'
    | 'Sys Admin Backroom';
    route: string;
};


const isSetting = sessionStorage.getItem('isSetting')


const homeMenu:  ReadonlyArray<Tab> = [
  {
    link: 'Dashboard',
    icon: './assets/media/icons/duotune/general/gen025.svg',
    tooltip: 'Dashboard',
    route: '/',
  },
  {
    link: 'employee',
    icon: './assets/media/icons/duotune/finance/fin006.svg',
    tooltip: 'Employee',
    route: '/employee/analytics-hub',
  },
  {
    link: 'payroll',
    icon: './assets/media/icons/duotune/general/payroll.svg',
    tooltip: 'payroll',
    route: '',
  },
  {
    link: 'Leave',
    icon: './assets/media/icons/duotune/general/leave1.svg',
    tooltip: 'Leave',
    route: '/leave/create-absence',
  }
]

const seeleingMenu:  ReadonlyArray<Tab> = [
  {
    link: 'Dashboard',
    icon: './assets/media/icons/duotune/general/gen025.svg',
    tooltip: 'Dashboard',
    route: '/',
  },
    {
      link: 'User Administration',
      icon: './assets/media/icons/duotune/general/gen048.svg',
      tooltip: 'User Administration',
      route: '',
    },
    {
      link: 'System Setting',
      icon: './assets/media/icons/duotune/general/gen048.svg',
      tooltip: 'System Setting',
      route: '',
    },
    {
      link: 'Sys Admin Backroom',
      icon: './assets/media/icons/duotune/general/gen048.svg',
      tooltip: 'Sys Admin Backroom',
      route: '',
    },
  ];

const tabs: ReadonlyArray<Tab> = isSetting ? seeleingMenu : homeMenu;

export { tabs, Tab };
