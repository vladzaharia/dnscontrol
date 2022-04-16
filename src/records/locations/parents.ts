import { Record } from "../../utils/record";
import { GetHost } from "../core";

/**
 * Internal (zhr.one) Home services
 */
export const ParentRecords: Record[] = [
  /* Parent Redirect */
  { name: "parents", description: "Parents", target: GetHost("Palladium") },
];
