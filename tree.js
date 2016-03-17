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

    function remove(value, node, root){
        if(value == root.left.value){
            node = root.left;
            var _node = node.left;
            while(true && node.left !== null){
                if(_node.right == null){
                    _node.right = node.right;
                    break;
                }else{
                    _node = _node.right;
                }
            };
            root.left = node.left;
        }else if(value == root.right.value){
            node = root.right;
            var _node = node.left;
            while(true && node.left !== null){
                if(_node.right == null){
                    _node.right = node.right;
                    break;
                }else{
                    _node = _node.right;
                }
            };
            root.right = node.left;
        }else if(value > node.value)
            remove(value, node.right, node);
        else
            remove(value, node.left, node);
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

    // Insert in Tree
    self.insert = function(value){
        if(!head)
            head = new Node(value, null, null);
        else{
            insert(value, head);
        }
    };

    // Search in tree
    self.search = function(value){
        return search(value, head);
    };

    // Walk in tree
    self.walk = function(fx){
        walkInOrder(head, fx);
    };

    self.remove = function(value){
        remove(value, head, head);
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

tree.remove(7);

tree.walk(x => console.log(x));
