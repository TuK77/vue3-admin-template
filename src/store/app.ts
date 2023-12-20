import { defineStore } from 'pinia';

export const useAppConfig = defineStore('apConfig', {
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