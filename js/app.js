new Vue({
    el: '#app',
    data: {
      name: '',
      email: '',
      password: ''
    },
    methods: {
      refreshPage() {
        // Refresh the page
        window.location.reload();
      }
    }
  });