/**
 * 权限列表
 * @param {number} type 权限类型
 * 0 在侧边栏中展示
 * 1 非侧边栏展示
 */

export default [{
  id: 'user',
  pid: '',
  title: '用户管理',
  icon: 'user',
  route: '/user',
  type: 0,
}, {
  id: 'user.setting',
  pid: 'user',
  title: '用户设置',
  icon: '',
  route: '/user/setting',
  type: 1,
}, {
  id: 'operationLog',
  pid: '',
  title: '操作日志',
  icon: 'book',
  route: '/operationLog',
  type: 0,
}];