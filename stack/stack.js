module.exports = function (){
    var self = this;
    self.stack = null;

    // Element Object
    function Element(value, prev){
        this.value = value;
        this.prev  = prev;
    };

    // Remove top element
    self.pop = function(){
        self.stack = self.stack.prev;
    };

    // Add element
    self.push = function(value){
        self.stack = new Element(value, self.stack);
    };

    // Check is empty
    self.isEmpty = function(){
        return self.stack == null;
    };

    // Clear stack
    self.clear = function(){
        self.stack = null;
    };

    // Return Top element
    self.topEl = function(){
        return self.stack.value;
    };
};

