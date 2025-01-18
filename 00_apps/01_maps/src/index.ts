import Company from "./Company";
import User from "./User";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");

const user = new User();
const company = new Company();
customMap.addMarker(user.address, user.name);
customMap.addMarker(company.location, company.companyName);
