
## 1. Architecture Design
纯前端项目，使用 Vue 3 + TypeScript + Tailwind CSS 构建。

```mermaid
flowchart TB
  subgraph Frontend
    A[Vue 3 + TypeScript]
    B[Vue Router]
    C[Tailwind CSS]
    D[组件系统]
  end
  A --&gt; B
  A --&gt; C
  A --&gt; D
```

## 2. Technology Description
- **Frontend**: Vue@3 + TypeScript + Tailwind CSS + Vite
- **Initialization Tool**: vite-init
- **Backend**: None (纯前端展示项目)

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | 首页 |
| /zwgk | 政务公开 |
| /zwgk/ldjs | 领导介绍 |
| /zwgk/jgzn | 机构职能和设置 |
| /zwgk/zcwj | 政策文件 |
| /zwgk/zcjd | 政策解读 |
| /zwgk/ghxx | 规划信息 |
| /zwfw | 政务服务 |
| /zmhd | 政民互动 |

## 4. Data Structure

### 4.1 领导数据结构
```typescript
interface Leader {
  name: string;
  position: string;
  avatar?: string;
  introduction?: string;
}
```

### 4.2 直属单位数据结构
```typescript
interface Unit {
  name: string;
  description?: string;
}
```

### 4.3 职责数据结构
```typescript
interface Duty {
  id: number;
  content: string;
}
```

### 4.4 新闻/通知数据结构
```typescript
interface News {
  id: number;
  title: string;
  date: string;
  content?: string;
  link?: string;
}
```

### 4.5 政策文件数据结构
```typescript
interface Policy {
  id: number;
  title: string;
  date: string;
  content?: string;
  link?: string;
}
```

