# react-admin

快速构建中后台的解决方案

## 功能

* 最低兼容到 ```ie9```。
* ```UI``` 基于 ```antd```，可以自定义主题。
* 内置实现功能
  * 经典布局界面
  * 用户角色权限
  * 自定义路由

### 自定义主题

在 ```./theme.js``` 中配置自己的[样式主题](https://ant.design/docs/react/customize-theme-cn)。

#### 如何自定义官方未提供的样式？

使用 [```styled-components```](https://github.com/styled-components/styled-components) 进行 ```antd``` 组件的样式覆盖。

```js
import styled from 'styled-components';
import { Menu } from 'antd';

const MenuStyled = styled(Menu)`
  border-right: 0;
`;

function Sider() {
  return (
    <MenuStyled></MenuStyled>
  );
}

export default Sider;
```