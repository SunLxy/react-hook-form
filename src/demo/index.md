---
title: react-hooks-form
---


### 案例1

> 1. 通过自定义hook 把每个组件 存储在最顶层的位置
> 2. 单个组件内部状态存储值，值更新触发顶层传递的onChange事件 对顶层数据进行更新(更新数据方式为地址引用更新，不改变值的对象地址，通过这种方式可以照成不更新整体状态)
> 3. 触发校验报错更新整体数据(感觉可以做到当前组件更新不做整体错误数据更新)
> 4. 自己的想法 -- 是否可以加依赖更新字段，当某个字段进行更新，除去当前组件 其他依赖这个字段的组件是否也可以进行更新 。其他依赖的组件是否可以通过这个组件更新的值进行更新自己组件的值

```tsx
import React from "react"
import Demo from "."

export default ()=><Demo/>
```

### 案例2

```tsx

// 自己简单做了个差不多的东西

import React from "react"
import Demo from "./demo2"

export default ()=><Demo/>

```
