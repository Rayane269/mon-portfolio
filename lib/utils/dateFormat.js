import { fr } from "date-fns/locale";
import { formatInTimeZone } from "date-fns-tz";

// Les dates du front-matter (ex. 2026-10-12) sont lues à minuit UTC :
// on les formate en UTC pour ne pas reculer d'un jour, et en français.
const dateFormat = (date) => {
  return formatInTimeZone(date, "UTC", "dd MMM yyyy", { locale: fr });
};

export default dateFormat;
