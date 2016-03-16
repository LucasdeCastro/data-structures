function Tree(){
    var self = this;
    var head = null;

    function Node(value, left, right){
        this.left  = left;
        this.right = right;
        this.value = value;
    };

    function search(value, node){
        if(value == node.value)
            return true;
        else if(value < node.value)
            return self.find(value, node.left);
        else if(value > node.value)
            return self.find(value, node.right);
    };

    function insert(value, node){
        if(value < node.value)
            if(node.left)
                return insert(value, node.left);
            else
                node.left = new Node(value, null, null);
        else if(value > node.value)
            if(node.right)
                return insert(value, node.right);
            else
                node.right = new Node(value, null, null);
        else
           node.left = new Node(value, null, null);
    };

    function walkInOrder(node, fx){
        if(node.left)
            walkInOrder(node.left, fx);
        fx(node.value);
        if(node.right)
            walkInOrder(node.right, fx);
    };

    function walkPostOrder(node, fx){
        if(node.left)
            walkPostOrder(node.left, fx);
        if(node.right)
            walkPostOrder(node.right, fx);
        fx(node.value);
    };

    function walkPreOrder(node, fx){
        fx(node.value);
        if(node.left)
            walkPreOrder(node.left, fx);
        if(node.right)
            walkPreOrder(node.right, fx);
    };

    self.insert = function(value){
        if(!head)
            head = new Node(value, null, null);
        else{
            insert(value, head);
        }
    };

    self.search = function(value){
        return search(value, head);
    };

    self.walk = function(fx){
        walkInOrder(head, fx);
        console.log('------------------------');
        walkPostOrder(head, fx);
        console.log('------------------------');
        walkPreOrder(head, fx);
    };
};

var tree = new Tree();

tree.insert(5);

tree.insert(2);
tree.insert(3);
tree.insert(1);

tree.insert(7);
tree.insert(6);
tree.insert(8);

tree.walk(function(x){
    console.log(x);
});
