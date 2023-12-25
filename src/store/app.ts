import { defineStore } from 'pinia';

export const useAppConfig = defineStore('appConfig', {
  state: () => ({
    aside: {
      opened: true
    }
  }),
  actions: {
    onToggleAside() {
      this.aside.opened = !this.aside.opened;
    }
  }
});