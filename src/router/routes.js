module.exports = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home')
  },
  {
    path: '/shopCart',
    component: () => import('views/shopCart/ShopCart')
  },
  {
    path: '/category',
    component: () => import('views/category/Category')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile')
  }
];
