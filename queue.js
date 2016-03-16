function Queue(){
    var self = this;
    self.stack = null;

    // Element Object
    function Element(value, next){
        this.value = value;
        this.next  = next;
    };

    // Remove top element
    self.pop = function(){
        self.stack = self.stack.next;
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

    self.print = function(){
        console.log(self.stack);
    }
};

var queue = new Queue;
queue.push(0);
queue.push(1);
queue.push(2);

console.log(queue.print());
