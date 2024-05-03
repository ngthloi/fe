import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'Pages',
    url: '/pages',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/pages/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'launcher',
        url: '/pages/launcher',
        icon: 'nav-icon-bullet'
      }
     
    ]
  },
  {
    name: 'Document',
    url: '/document',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Document1',
        url: '/document/document1',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Document2',
        url: '/document/document2',
        icon: 'nav-icon-bullet'
      }
     
    ]
  },
  {
    name: 'Test',
    url: '/test',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Test1',
        url: '/test/test1',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Test2',
        url: '/test/test2',
        icon: 'nav-icon-bullet'
      }
     
    ]
  },
];
