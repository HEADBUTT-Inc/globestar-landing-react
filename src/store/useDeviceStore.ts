import { create } from "zustand";

export type DeviceType = "tablet" | "laptop" | "pc";

interface DeviceState {
    deviceType: DeviceType;
    setDeviceType: (type: DeviceType) => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
    deviceType: "pc", // hydration 안전
    setDeviceType: (deviceType) => set({ deviceType }),
}));
