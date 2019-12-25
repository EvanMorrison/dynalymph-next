export default [
  {
    label: 'Home',
    path: '/',
    icon: 'home',
    children: null,
  },
  {
    label: 'Services',
    path: '/services',
    icon: 'accessibility',
    children: [
      {
        label: 'Lymphedema',
        path: '/services/lymphedema',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Wellness',
        path: '/services/wellness',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Surgeries',
        path: '/services/surgeries',
        icon: 'keyboard_arrow_right',
        children: null,
      },
    ]
  },
  {
    label: 'About',
    path: '/about',
    icon: 'account_circle',
    children: null,
  },
  {
    label: 'Appointments',
    path: '/appointments',
    icon: 'schedule',
    children: null,
  }
];
