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
            },

            total: 0,
            prevNumber: undefined,
            lastOperand: 0,
            isNumber: false,

            commandos: {
                class: "btnDiv"
            },
            numbers: {
                class: "numDiv"
            },
            alignOps: {
                class: "alignOperators"
            },
            operands: {
                class: "operators"
            },
            rAndc: {
                class: "resultAndClear"
            },

            plus: {
                class: "addNumber",
            },
            minus: {
                class: "minusNumber",
            },
            multiply: {
                class: "multiplyNumber",
            },
            divide: {
                class: "divideNumber",
            },
            clear: {
                class: "clearNumber"
            },
            result: {
                class: "resultNumber"
            }

        },
        methods: {
            emptyInput: function (event) {
                this.input.value = "";
            },
            isNumeric: function (n) {
                return !isNaN(parseInt(n)) && isFinite(n);
            },
            returnNumber: function () {
                if ((this.isNumeric(this.input.value)) === false) {
                    this.isNumber = false;
                } else {
                    this.isNumber = true;
                }
            },

            addNumToInputF: function (event) {
                let number = parseInt(event.target.innerText)
                this.input.value += number;
                this.returnNumber();

            },

            addF: function (event) {
                if (this.isNumber) {
                    if (this.input.value === "") {
                        this.output.value = 0;
                        this.total = 0;
                    } else {
                        if (this.prevNumber !== undefined) {
                            this.lastOperand = 1;
                            this.total = parseInt(this.prevNumber) + parseInt(this.input.value);
                            this.prevNumber = this.total;
                            this.output.value = this.total;
                            //                        console.log("Totalen är : " + this.total);
                            //                        console.log("Föregående nummer är : " + this.prevNumber);
                        } else {
                            this.lastOperand = 1;
                            this.prevNumber = this.input.value;
                            this.output.value = this.input.value;
                            //                        console.log("Totalen är : " + this.total);
                            //                        console.log("Föregående nummer är : " + this.prevNumber);
                        }
                    }
                }
            },
            minusF: function (event) {
                if (this.isNumber) {
                    if (this.input.value === "") {
                        this.output.value = 0;
                        this.total = 0;
                    } else {
                        if (this.prevNumber !== undefined) {
                            this.lastOperand = 2;
                            this.total = parseInt(this.prevNumber) - parseInt(this.input.value);
                            this.prevNumber = this.total;
                            this.output.value = this.total;
                            //                        console.log("Totalen är : " + this.total);
                            //                        console.log("Föregående nummer är : " + this.prevNumber);
                        } else {
                            this.lastOperand = 2;
                            this.prevNumber = parseInt(this.input.value);
                            this.output.value = this.input.value;
                            //                        console.log("Totalen är : " + this.total);
                            //                        console.log("Föregående nummer är : " + this.prevNumber);
                        }
                    }
                }
            },
            multiplyF: function (event) {
                if (this.isNumber) {
                    if (this.input.value === "") {
                        this.output.value = 0;
                        this.total = 0;
                    } else {
                        if (this.prevNumber === undefined) {
                            this.lastOperand = 3;
                            this.prevNumber = parseInt(this.input.value);
                            this.output.value = this.input.value;
                            //                        console.log("Totalen är : " + this.total);
                            //                        console.log("Föregående nummer är : " + this.prevNumber);
                        } else {
                            this.lastOperand = 3;
                            this.total = parseInt(this.prevNumber) * parseInt(this.input.value);
                            this.prevNumber = this.total;
                            this.output.value = this.total;
                            //                        console.log("Totalen är : " + this.total);
                            //                        console.log("Föregående nummer är : " + this.prevNumber);
                        }
                    }
                }
            },
            divideF: function (event) {
                if (this.isNumber) {
                    if (this.input.value === "") {
                        this.output.value = 0;
                        this.total = 0;
                    } else {
                        if (this.prevNumber === undefined) {
                            this.lastOperand = 4;
                            this.prevNumber = parseInt(this.input.value);
                            this.output.value = this.input.value;
                            //                        console.log("Totalen är : " + this.total);
                            //                        console.log("Föregående nummer är : " + this.prevNumber);
                        } else {
                            this.lastOperand = 4;
                            this.total = parseInt(this.prevNumber) / parseInt(this.input.value);
                            this.prevNumber = this.total;
                            this.output.value = this.total;
                            //                        console.log("Totalen är : " + this.total);
                            //                        console.log("Föregående nummer är : " + this.prevNumber);
                        }
                    }
                }
            },
            clearF: function (event) {
                this.lastOperand = 0;
                this.input.value = "";
                this.output.value = 0;
                this.prevNumber = undefined;
                this.total = 0;

            },
            resultF: function (event) {

                if (this.total !== 0) {
                    if (this.lastOperand === 1) {
                        this.addF();
                        this.lastOperand = 0;
                    }
                    if (this.lastOperand === 2) {
                        this.minusF();
                        this.lastOperand = 0;
                    }
                    if (this.lastOperand === 3) {
                        this.multiplyF();
                        this.lastOperand = 0;
                    }
                    if (this.lastOperand === 4) {
                        this.divideF();
                        this.lastOperand = 0;
                    }
                    this.input.value = "";
                    this.output.value = this.total;
                    this.prevNumber = 0;
                    this.total = 0;
                    console.log(this.total);
                } else {
                    if (this.lastOperand === 1) {
                        this.addF();
                        this.lastOperand = 0;
                    }
                    if (this.lastOperand === 2) {
                        this.minusF();
                        this.lastOperand = 0;
                    }
                    if (this.lastOperand === 3) {
                        this.multiplyF();
                        this.lastOperand = 0;
                    }
                    if (this.lastOperand === 4) {
                        this.divideF();
                        this.lastOperand = 0;
                    }
                    this.input.value = "";
                    this.output.value = this.total;
                    this.prevNumber = 0;
                    this.total = 0;
                }
            }
        }
    }








    let vm = new Vue(vSettings);
};
window.addEventListener("load", loaded);