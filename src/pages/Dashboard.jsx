import { useTranslation } from "react-i18next";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  const { t } = useTranslation();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{t("pages.dashboard")}</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
