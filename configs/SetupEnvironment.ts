import { Environment, EnvProps } from "eccom-lib";

const SetupEnvironment: EnvProps = {
  API_URL: process.env.EXPO_PUBLIC_ECCOM_BASE_URL,
  ORDERS: process.env.EXPO_PUBLIC_ORDERS
};

export default async function initEnvironment() {
  Environment.init(SetupEnvironment);
}
