import { useTranslation } from "react-i18next";
import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  const { t } = useTranslation();

  const filterOptions = [
    { value: "all", label: t("bookingFilters.all") },
    { value: "checked-out", label: t("bookingFilters.checkedOut") },
    { value: "checked-in", label: t("bookingFilters.checkedIn") },
    { value: "unconfirmed", label: t("bookingFilters.unconfirmed") },
  ];

  const sortOptions = [
    { value: "startDate-desc", label: t("bookingSort.dateDesc") },
    { value: "startDate-asc", label: t("bookingSort.dateAsc") },
    { value: "totalPrice-desc", label: t("bookingSort.amountDesc") },
    { value: "totalPrice-asc", label: t("bookingSort.amountAsc") },
  ];

  return (
    <TableOperations>
      <Filter filterField="status" options={filterOptions} />
      <SortBy options={sortOptions} />
    </TableOperations>
  );
}

export default BookingTableOperations;
