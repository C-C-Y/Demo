var caculator = new Vue({
  el: "#caculator",
  data: {
    inputShow: {
      value: "0"
    },
    active: true
  },
  components: {
    "title-box": {
      template: "<h1 class='title'>计算器</h1>"
    },
    "input-box": {
      props: ["inputShow"],
      template:
        "<input readonly type = 'text' class='input input:focus' v-model='value'>",
      computed: {
        value: function() {
          return this.inputShow.value;
        }
      }
    },
    "input-btn": {
      props: ["value"],

      template:
        "<button type='submit' class='buttons' @click='input'>{{value}}</button>",
      methods: {
        input: function() {
          this.$emit("change-value");
        }
      }
    }
  },
  methods: {
    inputValue: function(num) {
      if (this.active == true) {
        this.inputShow.value = num;
      } else {
        this.inputShow.value += num;
      }
      this.active = false;
    },
    allClear() {
      this.inputShow.value = "0";
      this.active=true
    },
    clearEnd() {
      var val = this.inputShow.value;
      this.inputShow.value = val.substring(0, val.length - 1);
    },
    caculate() {
      this.inputShow.value = eval(this.inputShow.value);
      ans = this.inputShow.value;
      this.active = true;
    },
    ans() {
      if (this.active == true) {
        this.inputShow.value = "ans";
      } else {
        this.inputShow.value += "ans";
      }
      this.active = false;
    }
  }
});
