Component({
  properties: {
    type: {
      type: String,
      value: 'primary',
    },
    text: {
      type: String,
      value: '',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    functionName: {
      type: String,
      value: '',
    }
  },

  methods: {
    handleTap (e) {
      if (this.data.disabled) { 
        return false; 
      }
      this.triggerEvent('btnclick', e);
    },
  },
});
