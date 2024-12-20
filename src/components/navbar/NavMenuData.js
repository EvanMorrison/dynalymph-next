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
        label: 'Wellness',
        path: '/services/wellness',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Lymphedema',
        path: '/services/lymphedema',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Lipedema',
        path: '/services/lipedema',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Surgeries',
        path: '/services/surgeries',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Detoxification',
        path: '/services/detoxification',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'Breast Implant Illness',
        path: '/services/breastimplantillness',
        icon: 'keyboard_arrow_right',
        children: null,
      },
    ],
  },
  {
    label: 'About',
    path: '/about',
    icon: 'account_circle',
    children: [
      {
        label: 'Trish Romano, CLT',
        path: '/about/trishromano',
        icon: 'keyboard_arrow_right',
        children: null,
      },
      {
        label: 'The Lymphatic System',
        path: '/about/lymphaticSystem',
        icon: 'keyboard_arrow_right',
        children: null,
      },
    ],
  },
  // {
  //   label: 'Appointments',
  //   path: '/appointments',
  //   icon: 'schedule',
  //   children: null,
  // },
  {
    label: 'Location',
    path: '/location',
    icon: 'pin_drop',
    children: null,
  },
];
