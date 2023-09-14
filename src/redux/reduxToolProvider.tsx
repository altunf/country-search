"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function ProviderRTK({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
