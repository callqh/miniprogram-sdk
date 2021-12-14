Component({
  methods: {
    scrollToBottom() {
      tt.pageScrollTo({
        scrollTop: 3000,
        duration: 300
      });
    },

    scrollToTop() {
      tt.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  }
});