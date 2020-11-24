// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse},
        children: [
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: 'menu.dashboard.workplace', keepAlive: true ,icon: 'home' }
          }
        ]
      },
      {
        path : '/member',
        name : 'member',
        component: RouteView,
        meta : {title: '会员管理',keepAlive: true, icon: 'crown',permission:['超级管理员']},
        redirect: '/member/list',
        children: [
          {
            path: '/member/list',
            name: 'memberList',
            component: () => import('@/views/member/MemberList'),
            meta: {title: '会员列表',keepAlive: true, icon:'team',permission:['超级管理员']}
          },
          {
            path: '/member/address',
            name: 'address',
            component: () => import('@/views/member/Address'),
            meta: {title: '收货地址',keepAlive: true, icon:'compass',permission:['超级管理员']}
          },
          {
            path: '/member/collect',
            name: 'collect',
            component: () => import('@/views/member/Collect'),
            meta: {title: '会员收藏',keepAlive: true, icon:'book',permission:['超级管理员']}
          },
          {
            path: '/member/history',
            name: 'history',
            component: () => import('@/views/member/History'),
            meta: {title: '会员足迹',keepAlive: true, icon:'history',permission:['超级管理员']}
          },{
            path: '/member/opinion',
            name: 'opinion',
            component: () => import('@/views/member/Opinion'),
            meta: {title: '意见反馈',keepAlive: true, icon:'solution',permission:['超级管理员']}
          }
        ]
      },

      {
        path : '/product',
        name : 'product',
        component: RouteView,
        meta : {title: '商品管理',keepAlive: true, icon: 'shopping',permission:['超级管理员','商品管理员']},
        redirect: '/product/list',
        children: [
          {
            path: '/product/brand',
            name: 'brand',
            component: () => import('@/views/product/Brand'),
            meta: {title: '商品制造商',keepAlive: true, icon:'trademark',permission:['超级管理员','商品管理员']}
          },
          {
            path: '/product/category',
            name: 'category',
            component: () => import('@/views/product/Category'),
            meta: {title: '商品类目',keepAlive: true, icon:'bars',permission:['超级管理员','商品管理员']}
          },
          {
            path: '/product/list',
            name: 'productList',
            component: () => import('@/views/product/ProductList'),
            meta: {title: '商品维护',keepAlive: true, icon:'table',permission:['超级管理员','商品管理员']}
          },
          {
            path: '/product/add_product',
            name: 'addProduct',
            component: () => import('@/views/product/AddSku'),
            meta: {title: '商品上架',keepAlive: true, icon:'file-add',permission:['超级管理员','商品管理员']}
          },
          {
            path: '/product/comment',
            name: 'comment',
            component: () => import('@/views/product/Comment'),
            meta: {title: '商品评价',keepAlive: true, icon:'message' ,permission:['超级管理员','商品管理员']}
          }
        ]
      },
      {
        path : '/order',
        name : 'order',
        component: RouteView,
        meta : {title: '订单管理',keepAlive: true, icon: 'shop',permission:['超级管理员','订单管理员']},
        redirect: '/order/list',
        children: [
          {
            path: '/order/list',
            name: 'orderList',
            component: () => import('@/views/order/OrderList'),
            meta: {title: '订单列表',keepAlive: true, icon:'project' ,permission:['超级管理员','订单管理员']}
          },
          {
            path: '/order/aftersale',
            name: 'aftersale',
            component: () => import('@/views/order/Aftersale'),
            meta: {title: '售后管理',keepAlive: true, icon:'reconciliation',permission:['超级管理员','订单管理员']},
          },
          {
            path: '/order/detail/:id',
            name: 'orderDetail',
            hidden : true,
            component: () => import('@/views/order/OrderDetail'),
            meta: {title: '订单详情',keepAlive: true, icon:'reconciliation',permission:['超级管理员','订单管理员']},
          }
        ]
      },
      {
        path : '/operation',
        name : 'operation',
        component: RouteView,
        meta : {title: '运营管理',keepAlive: true, icon: 'account-book' ,permission:['超级管理员','运营管理员']},
        redirect: '/operation/topic',
        children: [
          {
            path: '/operation/topic',
            name: 'topic',
            component: () => import('@/views/operation/Topic'),
            meta: {title: '专题管理',keepAlive: true, icon:'skin',permission:['超级管理员','运营管理员']}
          },
          {
            path: '/operation/coupon',
            name: 'coupon',
            component: () => import('@/views/operation/Coupon'),
            meta: {title: '优惠券管理',keepAlive: true, icon:'barcode',permission:['超级管理员','运营管理员']}
          }
        ]
      },
      {
        path : '/system',
        name : 'system',
        component: RouteView,
        meta : {title: '系统管理',keepAlive: true, icon: 'desktop',permission:['超级管理员']},
        redirect: '/system/admin',
        children: [
          {
            path: '/system/admin',
            name: 'admin',
            component: () => import('@/views/system/Admin'),
            meta: {title: '后台用户管理',keepAlive: true, icon:'user',permission:['超级管理员']}
          },
          {
            path: '/system/role',
            name: 'role',
            component: () => import('@/views/system/Role'),
            meta: {title: '角色管理',keepAlive: true, icon:'safety-certificate',permission:['超级管理员']}
          },
          {
            path: '/system/log',
            name: 'log',
            component: () => import('@/views/system/Log'),
            meta: {title: '操作日志',keepAlive: true, icon:'file-text',permission:['超级管理员']}
          }
        ]
      },
      {
        path : '/setting',
        name : 'setting',
        component: RouteView,
        meta : {title: '系统设置',keepAlive: true, icon: 'setting',permission:['超级管理员','运营管理员','订单管理员']},
        children: [
          {
            path: '/setting/order',
            name: 'orderConfig',
            component: () => import('@/views/setting/OrderSetting'),
            meta: {title: '订单设置',keepAlive: true, icon:'red-envelope',permission:['超级管理员','订单管理员']}
          },
          {
            path: '/setting/freight',
            name: 'freight',
            component: () => import('@/views/setting/Freight'),
            meta: {title: '运费设置',keepAlive: true, icon:'money-collect',permission:['超级管理员','运营管理员']}
          }
        ]
      },

      {
        path : '/statistics',
        name : 'statistics',
        component: RouteView,
        meta : {title: '统计报表',keepAlive: true, icon: 'calculator',permission:['超级管理员','商品管理员','订单管理员']},
        children: [
          {
            path: '/statistics/member',
            name: 'memberStatistics',
            component: () => import('@/views/statistics/MemberStatistics'),
            meta: {title: '用户统计',keepAlive: true, icon:'team',permission:['超级管理员']}
          },
          {
            path: '/statistics/product',
            name: 'productStatistics',
            component: () => import('@/views/statistics/ProductStatistics'),
            meta: {title: '商品统计',keepAlive: true, icon:'trademark',permission:['超级管理员','商品管理员']}
          },
          {
            path: '/statistics/order',
            name: 'orderStatistics',
            component: () => import('@/views/statistics/OrderStatistics'),
            meta: {title: '订单统计',keepAlive: true, icon:'project',permission:['超级管理员','订单管理员']}
          }
        ]
      },

      // forms
      
      // profile
      

      // result
      {
        path: '/result',
        name: 'result',
        component: RouteView,
        redirect: '/result/success',
        meta: { title: '结果页', icon: 'check-circle-o', permission: [ 'result' ] },
        children: [
          {
            path: '/result/success',
            name: 'ResultSuccess',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
            meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
          },
          {
            path: '/result/fail',
            name: 'ResultFail',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
            meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permission: [ 'exception' ] }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permission: [ 'exception' ] }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permission: [ 'exception' ] }
          }
        ]
      },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人页', icon: 'user', keepAlive: true },
        children: [
        
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true},
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true}
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: '安全设置', hidden: true, keepAlive: true}
              },
              
            ]
          }
        ]
      }

      // other
      /*
      {
        path: '/other',
        name: 'otherPage',
        component: PageView,
        meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '用户列表', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '角色列表', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '角色列表2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '权限列表', keepAlive: true }
              }
            ]
          }
        ]
      }
      */
    ]
  },

  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
