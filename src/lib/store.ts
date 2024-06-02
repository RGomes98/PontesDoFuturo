import { create } from 'zustand';

type Store = {
  isMobileMenuActive: boolean;
  setIsMobileMenuActive: (state: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  isMobileMenuActive: false,
  setIsMobileMenuActive: (state) => set(() => ({ isMobileMenuActive: state })),
}));
