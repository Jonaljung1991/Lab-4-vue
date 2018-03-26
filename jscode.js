let loaded = function () {
    let vSettings = {
        el: "#root",
        data: {
            skeleton: {
                class: "calcSkeleton"
            },

            input: {
                class: "inputText",
                value: "",
                type: "text"
            },

            output: {
                class: "outputText",
                value: "",
                listOfVal: []
            },

            plus: {
                class: "addNumber"
            }

        },
        methods: {
            result: function (event) {
                let val = event.target.value;
                this.output.value = val;
                this.output.listOfVal.push(this.output.value);
            },
            saveInput : function(event){
            this.input.value = event.target.value;
                this.output.listOfVal.push(this.input.value);
            },

            add: function (event) {
                this.saveInput;
                
                
            console.log(this.output.listOfVal);
                if (this.output.listOfVal.length != undefined) {
                    for (let i = 0; i < this.output.listOfVal.length; i++) {
                        console.log(this.output.listOfVal[i]);
                    }
                }
            }
        }


    }





    let vm = new Vue(vSettings);
};
window.addEventListener("load", loaded);