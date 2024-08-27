var digit = function () {
    let value = 0
    return {

    crore: function(val) {
        value = value + (val * Math.pow(10,7));
        return this;
    },

    lakh: function(val) {
        value = value + (val * Math.pow(10, 5));
        return this;
    },

    thousand: function(val) {
        value = value + (val * Math.pow(10, 3));
        return this;
    },

    hundred: function(val) {
        value = value + (val * Math.pow(10, 2));
        return this;
    },

    ten: function(val) {
        value = value + (val * Math.pow(10, 1));
        return this;
    },
    one: function(val) {
        value = value + (val * 1);
        return this;
    },

    getValue: function() {
            return value
    },
    }
}

console.log(digit().crore(5).lakh(60).thousand(71).hundred(5).ten(1).one(2).getValue())

