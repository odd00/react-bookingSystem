import { useTranslation } from "react-i18next";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  const { t } = useTranslation();

  const filterOptions = [
    { value: "all", label: t("cabinFilters.all") },
    { value: "no-discount", label: t("cabinFilters.noDiscount") },
    { value: "with-discount", label: t("cabinFilters.withDiscount") },
  ];

  const sortOptions = [
    { value: "name-asc", label: t("cabinSort.nameAsc") },
    { value: "name-desc", label: t("cabinSort.nameDesc") },
    { value: "regularPrice-asc", label: t("cabinSort.priceAsc") },
    { value: "regularPrice-desc", label: t("cabinSort.priceDesc") },
    { value: "maxCapacity-asc", label: t("cabinSort.capacityAsc") },
    { value: "maxCapacity-desc", label: t("cabinSort.capacityDesc") },
  ];

  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />

      <SortBy options={sortOptions} />
    </TableOperations>
  );
}

export default CabinTableOperations;
