# 国际化 (i18n) 使用指南

## 项目结构

```
src/
├── i18n/
│   └── config.js              # i18n 配置文件
├── locales/
│   ├── en.json               # 英文翻译文件 (160+ 键)
│   └── zh.json               # 中文翻译文件 (160+ 键)
├── ui/
│   └── LanguageSwitcher.jsx  # 语言切换组件
└── utils/
    └── helpers.js            # 日期格式化函数支持 locale
```

## 功能说明

### 已实现的国际化文本 (160+ 个翻译键)

翻译键被组织在以下命名空间下：

#### **nav** - 导航菜单 (5 个键)

- `nav.home` - 首页/Home
- `nav.bookings` - 预订/Bookings
- `nav.cabins` - 小屋/Cabins
- `nav.users` - 用户/Users
- `nav.settings` - 设置/Settings

#### **pages** - 页面标题 (8 个键)

- `pages.dashboard` - 仪表盘/Dashboard
- `pages.updateHotelSettings` - 更新酒店设置/Update hotel settings
- `pages.allBookings` - 所有预订/All Bookings
- `pages.bookingDetails` - 预订详情/Booking Details
- `pages.checkIn` - 入住/Check In
- `pages.allCabins` - 所有小屋/All Cabins
- `pages.allUsers` - 所有用户/All Users
- `pages.account` - 账户/Account

#### **buttons** - 按钮文本 (10 个键)

- `buttons.login` - 登录/Login
- `buttons.logout` - 登出/Logout
- `buttons.delete` - 删除/Delete
- `buttons.edit` - 编辑/Edit
- `buttons.save` - 保存/Save
- `buttons.cancel` - 取消/Cancel
- `buttons.add` - 添加/Add
- `buttons.upload` - 上传/Upload
- `buttons.downloadPDF` - 下载 PDF/Download PDF
- `buttons.checkin` - 入住/Check In

#### **forms** - 表单标签 (6 个键)

- `forms.email` - 邮箱/Email
- `forms.password` - 密码/Password
- `forms.confirmPassword` - 确认密码/Confirm Password
- `forms.fullName` - 全名/Full Name
- `forms.nationality` - 国籍/Nationality
- `forms.countryFlag` - 国家旗帜/Country Flag

#### **messages** - 消息和提示 (5 个键)

- `messages.loading` - 加载中/Loading...
- `messages.error` - 发生错误/An error occurred
- `messages.success` - 成功/Success
- `messages.noData` - 没有数据/No data available
- `messages.confirmDelete` - 确定要删除吗/Are you sure you want to delete?

#### **data** - 数据导入 (3 个键)

- `data.uploadAll` - 上传全部/Upload ALL
- `data.uploadBookingsOnly` - 仅上传预订/Upload bookings ONLY
- `data.sampleData` - 示例数据/SAMPLE DATA

#### **table** - 表格头部 (8 个键)

- `table.cabin` - 小屋/Cabin
- `table.guest` - 客人/Guest
- `table.dates` - 日期/Dates
- `table.status` - 状态/Status
- `table.amount` - 金额/Amount
- `table.capacity` - 容纳人数/Capacity
- `table.price` - 价格/Price
- `table.discount` - 折扣/Discount

#### **empty** - 空状态消息 (4 个键)

- `empty.noCabins` - 找不到小屋/No cabins could be found
- `empty.noBookings` - 找不到预订/No bookings could be found
- `empty.noUsers` - 找不到用户/No users could be found
- `empty.noGuests` - 找不到客人/No guests could be found

#### **pagination** - 分页 (6 个键)

- `pagination.showing` - 显示/Showing
- `pagination.to` - 至/to
- `pagination.of` - 共/of
- `pagination.results` - 条结果/results
- `pagination.previous` - 上一页/Previous
- `pagination.next` - 下一页/Next

#### **status** - 状态标签 (3 个键)

- `status.unconfirmed` - 未确认/Unconfirmed
- `status.checkedIn` - 已入住/Checked in
- `status.checkedOut` - 已退住/Checked out

#### **cabins** - 小屋管理 (13 个键)

- `cabins.addNewCabin` - 添加新小屋/Add new cabin
- `cabins.cabinName` - 小屋名称/Cabin name
- `cabins.maxCapacity` - 最大容纳人数/Maximum capacity
- `cabins.regularPrice` - 常规价格/Regular price
- `cabins.discount` - 折扣/Discount
- `cabins.description` - 网站描述/Description for website
- `cabins.cabinPhoto` - 小屋照片/Cabin photo
- `cabins.edit` - 编辑/Edit
- `cabins.delete` - 删除/Delete
- `cabins.fitsUpTo` - 最多可容纳/Fits up to
- `cabins.guests` - 位客人/guests
- `cabins.duplicate` - 复制/Duplicate

#### **cabinFilters** - 小屋过滤 (3 个键)

- `cabinFilters.all` - 全部/All
- `cabinFilters.noDiscount` - 无折扣/No discount
- `cabinFilters.withDiscount` - 有折扣/With discount

#### **cabinSort** - 小屋排序 (6 个键)

- `cabinSort.nameAsc` - 按名称排序 (A-Z)/Sort by name (A-Z)
- `cabinSort.nameDesc` - 按名称排序 (Z-A)/Sort by name (Z-A)
- `cabinSort.priceAsc` - 按价格排序（低到高）/Sort by price (low first)
- `cabinSort.priceDesc` - 按价格排序（高到低）/Sort by price (high first)
- `cabinSort.capacityAsc` - 按容纳人数排序（低到高）/Sort by capacity (low first)
- `cabinSort.capacityDesc` - 按容纳人数排序（高到低）/Sort by capacity (high first)

#### **bookings** - 预订管理 (6 个键)

- `bookings.deleteBooking` - 删除预订/Delete booking
- `bookings.checkOut` - 退房/Check out
- `bookings.seeDetails` - 查看详情/See details
- `bookings.checkIn` - 办理入住/Check in
- `bookings.today` - 今天/Today
- `bookings.nightStay` - 晚入住/night stay

#### **bookingFilters** - 预订过滤 (4 个键)

- `bookingFilters.all` - 全部/All
- `bookingFilters.checkedOut` - 已退住/Checked out
- `bookingFilters.checkedIn` - 已入住/Checked in
- `bookingFilters.unconfirmed` - 未确认/Unconfirmed

#### **bookingSort** - 预订排序 (4 个键)

- `bookingSort.dateDesc` - 按日期排序（最近优先）/Sort by date (recent first)
- `bookingSort.dateAsc` - 按日期排序（最早优先）/Sort by date (earlier first)
- `bookingSort.amountDesc` - 按金额排序（高到低）/Sort by amount (high first)
- `bookingSort.amountAsc` - 按金额排序（低到高）/Sort by amount (low first)

#### **settings** - 酒店设置 (4 个键)

- `settings.minNights` - 最少预订夜数/Minimum nights/booking
- `settings.maxNights` - 最多预订夜数/Maximum nights/booking
- `settings.maxGuests` - 最多客人数/Maximum guests/booking
- `settings.breakfastPrice` - 早餐价格/Breakfast price

#### **today** - 今天模块 (9 个键)

- `today.today` - 今天/Today
- `today.sales` - 销售图表/Sales Chart
- `today.duration` - 入住时长总结/Stay duration summary
- `today.noActivity` - 今天没有活动/No activity today...
- `today.arriving` - 即将到达/Arriving
- `today.departing` - 即将离开/Departing
- `today.nights` - 晚/nights
- `today.checkIn` - 办理入住/Check in
- `today.checkOut` - 退房/Check out

#### **checkin** - 入住功能 (5 个键)

- `checkin.checkInBooking` - 办理入住预订号/Check in booking
- `checkin.back` - 返回/Back
- `checkin.isUnpaid` - 付款已处理/Is this payment already processed?
- `checkin.breakfastIncluded` - 包含早餐/Breakfast included
- `checkin.confirm` - 确认入住/Confirm check in

#### **dashboard** - 仪表盘 (19 个键)

- `dashboard.bookings` - 预订/Bookings
- `dashboard.sales` - 销售额/Sales
- `dashboard.checkIns` - 入住/Check ins
- `dashboard.occupancyRate` - 入住率/Occupancy rate
- `dashboard.last7Days` - 最近 7 天/Last 7 days
- `dashboard.last30Days` - 最近 30 天/Last 30 days
- `dashboard.last90Days` - 最近 90 天/Last 90 days
- `dashboard.salesFrom` - 销售额从/Sales from
- `dashboard.totalSales` - 总销售额/Total sales
- `dashboard.extrasSales` - 额外销售额/Extras sales
- 时长标签：`oneNight`, `twoNights`, `threeNights`, `fourFiveNights`, `sixSevenNights`, `eightFourteenNights`, `fifteenTwentyOneNights`, `twentyPlusNights`

#### **signup** - 注册表单 (6 个键)

- `signup.fullName` - 全名/Full name
- `signup.emailAddress` - 电子邮箱/Email address
- `signup.password` - 密码/Password (min 8 characters)
- `signup.repeatPassword` - 重复密码/Repeat password
- `signup.cancel` - 取消/Cancel
- `signup.createNewUser` - 创建新用户/Create new user
- `signup.validEmail` - 请提供有效的电子邮箱地址/Please provide a valid email address
- `signup.minPassword` - 密码需要至少 8 个字符/Password needs a minimum of 8 characters
- `signup.passwordMatch` - 密码需要相同/Passwords need to match

#### **account** - 账户设置 (6 个键)

- `account.updateAccount` - 更新账户/Update account
- `account.avatar` - 头像图片/Avatar image
- `account.createNewUser` - 创建新用户/Create a new user
- `account.newPassword` - 新密码（最少 8 个字符）/New password (min 8 chars)
- `account.confirmPassword` - 确认密码/Confirm password
- `account.updatePassword` - 更新密码/Update password

## 如何在组件中使用

### 基础用法

```jsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();

  return <h1>{t("pages.dashboard")}</h1>;
}
```

### 访问 i18n 对象

```jsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { i18n } = useTranslation();

  // 获取当前语言
  console.log(i18n.language); // 'en' 或 'zh'

  // 改变语言
  i18n.changeLanguage("zh");

  return null;
}
```

### 使用 date-fns locale 本地化日期

```jsx
import { format } from "date-fns";
import { enUS, zhCN } from "date-fns/locale";
import { useTranslation } from "react-i18next";

function MyComponent({ date }) {
  const { i18n } = useTranslation();
  const locale = i18n.language === "zh" ? zhCN : enUS;

  return <p>{format(date, "MMM dd yyyy", { locale })}</p>;
}
```

### 使用 formatDistanceFromNow 本地化距离时间

```jsx
import { formatDistanceFromNow } from "../../utils/helpers";
import { enUS, zhCN } from "date-fns/locale";
import { useTranslation } from "react-i18next";

function MyComponent({ date }) {
  const { i18n } = useTranslation();
  const locale = i18n.language === "zh" ? zhCN : enUS;

  return <p>{formatDistanceFromNow(date, locale)}</p>;
}
```

## 如何添加新的翻译

### 1. 编辑翻译文件

修改 `src/locales/en.json` 和 `src/locales/zh.json`，添加新的键值对：

**en.json:**

```json
{
  "myNewFeature": {
    "greeting": "Hello",
    "description": "This is a test"
  }
}
```

**zh.json:**

```json
{
  "myNewFeature": {
    "greeting": "你好",
    "description": "这是一个测试"
  }
}
```

### 2. 在组件中使用

```jsx
const { t } = useTranslation();
return (
  <div>
    <h1>{t("myNewFeature.greeting")}</h1>
    <p>{t("myNewFeature.description")}</p>
  </div>
);
```

## 语言切换

用户可以在页面右上角的 HeaderMenu 中使用 `LanguageSwitcher` 组件切换语言。

- 选择的语言会被保存到 `localStorage` (键: `language`)
- 下次用户访问时，会使用之前选择的语言
- 默认语言为英文 (en)

## 翻译键命名规范

为了保持代码整洁和易于维护，请遵循以下命名规范：

- **使用点符号表示层级**: `namespace.key.subkey`
- **使用英文小写字母**和**驼峰式命名**: `myNewFeature`
- **按功能模块分组**: `nav.`, `buttons.`, `pages.`, `cabins.`, `bookings.` 等
- **保持简洁**: 键名应清晰表达其含义
- **避免重复**: 相同的文本应使用同一个键

## 支持的语言

目前支持以下语言：

- **en**: English（英文）
- **zh**: 中文（简体中文）

### 添加新语言

1. 在 `src/locales/` 文件夹中创建新的 `[语言代码].json` 文件
2. 复制 `en.json` 的结构，添加相应的翻译
3. 在 `src/i18n/config.js` 中导入新的翻译文件：

```javascript
import newLangTranslation from "../locales/[语言代码].json";

const resources = {
  en: { translation: enTranslation },
  zh: { translation: zhTranslation },
  [语言代码]: { translation: newLangTranslation }, // 添加新语言
};
```

4. 在 `LanguageSwitcher.jsx` 中添加新语言的按钮（可选）

5. 如果使用 date-fns locale，在相关文件中导入：

```javascript
import { newLocale } from "date-fns/locale";
```

## 默认语言

- 如果用户之前选择过语言，会使用保存在 `localStorage` 中的语言设置
- 否则，默认使用 **英文 (en)**

## 注意事项

1. 所有硬编码的 UI 文本都应该被替换为翻译键
2. 翻译键应该尽可能小而专一（避免过长的翻译值）
3. 在添加新功能时，同时添加对应的翻译
4. 保持两种语言的翻译同步更新
5. 对于日期和时间，使用 date-fns locale 确保本地化显示
6. 在提交代码前，检查所有新增文本是否已翻译

## 已覆盖的功能

- 导航菜单和页面标题
- 按钮和表单标签
- 表格列头和数据显示
- 分页和空状态消息
- 过滤器和排序选项
- 状态标签和确认对话框
- 日期格式（根据语言本地化）
- 距离时间显示（根据语言本地化）
- 表单验证消息
- 仪表盘统计和图表

## 常见问题

### Q: 如何测试翻译是否正确？

A: 点击页面右上角的语言切换器，选择中文。检查所有文本是否都已翻译。

### Q: 如何在动态内容中使用翻译？

A: 在 JSX 中使用 `t()` 函数包装动态值：

```jsx
const message = `${t("bookings.nightStay")} (${numNights})`;
```

### Q: 支持复数形式吗？

A: 目前项目中使用的翻译文本主要是文本标签，不需要复数形式。如需支持，可以在翻译键中添加 `_plural` 后缀。

### Q: 如何处理缺失的翻译？

A: i18next 会显示翻译键本身（如 `cabins.edit`）。检查翻译文件中是否包含该键。
