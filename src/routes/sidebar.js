/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Manage User',
  },
  {
    path: '/app/cards',
    icon: 'CardsIcon',
    name: 'Manage News',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Online Class',
  },
  {
    path: '/app/buttons',
    icon: 'ButtonsIcon',
    name: 'Offline Class',
  },
  {
    path: '/app/modals',
    icon: 'ModalsIcon',
    name: 'Booking Online Class',
  },
  {
    path: '/app/tables',
    icon: 'TablesIcon',
    name: 'Booking Offline Class',
  },
  {
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export default sidebar
