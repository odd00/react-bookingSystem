import { useTranslation } from "react-i18next";
import Filter from "../../ui/Filter";

function DashboardFilter() {
  const { t } = useTranslation();

  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: t("dashboard.last7Days") },
        { value: "30", label: t("dashboard.last30Days") },
        { value: "90", label: t("dashboard.last90Days") },
      ]}
    />
  );
}

export default DashboardFilter;
