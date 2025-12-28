# 国际化 (i18n) 实现总结

## 完成的工作

### 1. **安装依赖**

- 安装了 `i18next` (v25.7.3) 和 `react-i18next` 包

### 2. **创建翻译文件结构**

```
src/
├── i18n/
│   └── config.js              # i18n 核心配置
└── locales/
    ├── en.json               # 英文翻译文件 (160+ 个翻译键)
    └── zh.json               # 中文翻译文件 (160+ 个翻译键)
```

### 3. **配置 i18n**

- 在 `src/i18n/config.js` 中配置了 i18next
- 设置默认语言为英文
- 从 localStorage 读取用户之前选择的语言
- 配置了日期本地化支持 (enUS, zhCN)

### 4. **初始化 i18n**

- 在 `src/main.jsx` 中导入 i18n 配置

### 5. **修改的组件 (30+ 个)**

#### 导航和布局

- **MainNav.jsx** - 导航菜单国际化
- **HeaderMenu.jsx** - 用户菜单国际化
- **LanguageSwitcher.jsx** - 语言切换器

#### 页面

- **Dashboard.jsx** - 仪表盘页面标题
- **Cabins.jsx** - 小屋页面标题
- **Bookings.jsx** - 预订页面标题
- **Settings.jsx** - 设置页面标题
- **Users.jsx** - 用户页面标题
- **Login.jsx** - 登录页面
- **Booking.jsx** - 预订详情页

#### 仪表盘组件

- **DashboardFilter.jsx** - 时间段过滤 (7 天/30 天/90 天)
- **Stats.jsx** - 统计卡片标题
- **TodayActivity.jsx** - 今天活动模块
- **TodayItem.jsx** - 今天活动项目
- **SalesChart.jsx** - 销售折线图 (含日期本地化)
- **DurationChart.jsx** - 入住时长饼图
- **CheckoutButton.jsx** - 退房按钮

#### 小屋管理

- **CabinTable.jsx** - 小屋表格头部
- **CabinTableOperations.jsx** - 小屋过滤和排序
- **CabinRow.jsx** - 小屋行显示
- **CreateCabinForm.jsx** - 创建小屋表单
- **AddCabin.jsx** - 添加小屋按钮

#### 预订管理

- **BookingTable.jsx** - 预订表格头部
- **BookingTableOperations.jsx** - 预订过滤和排序
- **BookingRow.jsx** - 预订行显示 (含日期本地化)
- **BookingDetail.jsx** - 预订详情页

#### 认证和账户

- **LoginForm.jsx** - 登录表单
- **SignupForm.jsx** - 注册表单
- **UpdateUserDataForm.jsx** - 用户数据编辑表单
- **UpdatePasswordForm.jsx** - 密码修改表单
- **UpdateSettingsForm.jsx** - 酒店设置表单

#### UI 组件

- **Empty.jsx** - 空状态消息
- **Pagination.jsx** - 分页组件
- **ConfirmDelete.jsx** - 删除确认对话框
- **Uploader.jsx** - 数据上传按钮

## 翻译范围

### 翻译键统计：160+ 个键

| 命名空间       | 数量 | 说明             |
| -------------- | ---- | ---------------- |
| nav            | 5    | 导航菜单         |
| pages          | 8    | 页面标题         |
| buttons        | 10   | 按钮文本         |
| forms          | 6    | 表单标签         |
| messages       | 5    | 提示消息         |
| data           | 3    | 数据导入         |
| table          | 8    | 表格头部         |
| empty          | 4    | 空状态           |
| pagination     | 6    | 分页             |
| confirmDialog  | 2    | 确认对话框       |
| auth           | 1    | 认证             |
| status         | 3    | 状态标签         |
| cabins         | 13   | 小屋管理         |
| settings       | 4    | 酒店设置         |
| checkin        | 5    | 入住功能         |
| today          | 9    | 今天模块         |
| bookings       | 6    | 预订管理         |
| signup         | 6    | 注册表单         |
| account        | 6    | 账户设置         |
| cabinFilters   | 3    | 小屋过滤         |
| cabinSort      | 6    | 小屋排序         |
| bookingFilters | 4    | 预订过滤         |
| bookingSort    | 4    | 预订排序         |
| dashboard      | 19   | 仪表盘统计和图表 |

## 特殊功能实现

### 日期本地化

- SalesChart.jsx - 使用 date-fns locale 本地化月份显示
- BookingRow.jsx - 使用 date-fns locale 本地化日期格式
- helpers.js - formatDistanceFromNow 支持 locale 参数

### API 密钥安全

- 移除硬编码的 Supabase API 密钥
- 使用 .env 文件存储敏感信息
- 更新 .gitignore 排除 .env 文件

## 使用方法

### 在组件中使用翻译

```jsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t("pages.dashboard")}</h1>;
}
```

### 获取当前语言

```jsx
const { i18n } = useTranslation();
console.log(i18n.language); // 'en' 或 'zh'
```

### 使用 locale 参数

```jsx
import { format } from "date-fns";
import { enUS, zhCN } from "date-fns/locale";

const locale = i18n.language === "zh" ? zhCN : enUS;
const formatted = format(date, "MMM dd yyyy", { locale });
```

## 存储位置

- **翻译文件**: `src/locales/` (en.json, zh.json)
- **i18n 配置**: `src/i18n/config.js`
- **语言选择器**: `src/ui/LanguageSwitcher.jsx`
- **使用指南**: `i18n-GUIDE.md`
- **API 配置**: `.env` (本地环境变量)

## 如何扩展

### 添加更多翻译文本

1. 编辑 `src/locales/en.json` 和 `src/locales/zh.json`
2. 在组件中使用 `t('key.path')`
3. 示例：

   ```json
   // en.json
   {
     "myFeature": {
       "title": "My Feature"
     }
   }

   // zh.json
   {
     "myFeature": {
       "title": "我的功能"
     }
   }
   ```

### 添加新的语言

1. 在 `src/locales/` 中创建新的 JSON 文件 (如 `es.json`)
2. 在 `src/i18n/config.js` 中导入并添加到 resources
3. 在 `LanguageSwitcher.jsx` 中添加语言按钮（可选）

## 技术栈

- **i18next** (v25.7.3): 国际化框架
- **react-i18next**: React 绑定
- **date-fns locale**: 日期本地化
- **localStorage**: 保存用户语言偏好

## 特性清单

- 完整的多语言支持（英文和中文）
- 自动保存语言选择到 localStorage
- 实时语言切换（无需刷新）
- 160+ 翻译键覆盖全应用
- 日期和时间本地化显示
- 清晰的翻译键结构和命名规范
- 易于扩展和维护
- API 密钥安全（环境变量）

## 已验证的工作场景

- 导航菜单语言切换
- 页面标题和标签国际化
- 表单和输入框文本国际化
- 数据表格显示国际化
- 过滤器和排序选项国际化
- 分页和空状态国际化
- 日期格式根据语言显示
- 距离时间显示根据语言变化
- 用户选择的语言持久化
