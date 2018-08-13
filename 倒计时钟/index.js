var myMclock = new Vue({
    el: "#clock",
    data: {
        nowMinutes: 25,
        nowSecond: "00",
        setMinutes: 25,
        setSecond: "00",
        i: "",
        j: 0
    },
    methods: {
        changeMinutes() {
            if (event.target.value == "-") {
                this.setMinutes = this.setMinutes - 1;
                this.nowMinutes = this.nowMinutes - 1;
            }
            if (event.target.value == "+") {
                this.setMinutes = this.setMinutes + 1;
                this.nowMinutes = this.nowMinutes + 1;
            };
            if (this.setMinutes == 0) {
                this.$refs.downM.disabled = "disabled"
            } else {
                this.$refs.downM.disabled = ""
            }

        },
        changeSecond() {
            if (event.target.value == "-") {
                this.setSecond = (Number(this.setSecond) - 1).toString();
                this.nowSecond = (Number(this.nowSecond) - 1).toString();
            }
            if (event.target.value == "+") {
                this.setSecond = (Number(this.setSecond) + 1).toString();
                this.nowSecond = (Number(this.nowSecond) + 1).toString();
            }

            if (Number(this.setSecond) < 10) {
                this.setSecond = "0" + this.setSecond;
            }
            if (Number(this.nowSecond) < 10) {
                this.nowSecond = "0" + this.nowSecond;
            };
            if (this.setSecond == "00") {
                this.$refs.downS.disabled = "disabled"
            } else {
                this.$refs.downS.disabled = ""
            }
        },

        start: function () {
            this.nowSecond = (Number(this.nowSecond) - 1).toString();
            this.$refs.downM.disabled = "disabled";
            this.$refs.upM.disabled = "disabled";
            this.$refs.downS.disabled = "disabled";
            this.$refs.upS.disabled = "disabled";
            if (Number(this.nowSecond) < 10 && Number(this.nowSecond) > -1) {
                this.nowSecond = "0" + this.nowSecond;
            }
            if (Number(this.nowSecond) == -1) {
                this.nowMinutes -= 1;
                this.nowSecond = "59";
            }
            this.i = setTimeout(this.start, 1000);
            if (this.nowMinutes == 0 && this.nowSecond == "00") {
                clearTimeout(this.i);
            };


        },
        clear: function () {
            clearTimeout(this.i);
            this.setMinutes = 25;
            this.setSecond = "00";
            this.nowMinutes = 25;
            this.nowSecond = "00";
            this.$refs.sta.value = "开始";
            this.$refs.downM.disabled = "";
            this.$refs.upM.disabled = "";
            this.$refs.upS.disabled = "";
        },
        stop: function () {
            if (this.j == 0) {
                clearTimeout(this.i);
                this.start();
                event.target.value = "暂停";
                this.j = 1;
            } else {
                clearTimeout(this.i);
                event.target.value = "开始";
                this.j = 0;
            }
        }
    }
});