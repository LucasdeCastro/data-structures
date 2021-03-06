function DoubleLinkedList(){
    let self = this;

    self.head = null;
    self.last = null;
    self.length = 0;

    // Node
    function Node(value, next, prev){
        this.value = value;
        this.next  = next;
        this.prev  = prev;
    };

    // Each LinkedList
    self.each = function(fx){
        let elem  = self.head;
        let position = 0;
        while(true){
            if(elem && elem.value !== null){
                fx(elem, position);
                elem = elem.next;
                position++;
            }else
                break;
        };
    };

    // Push elem
    self.push = function(value, index){
        if(index){
            self.each(function(val, key){
                if(key == (index -1)){
                    let next = val.next;
                    val.next = new Node(value, next);
                }
            });
        }else{
            if(self.head){
                self.last.next = new Node(value, null, self.last);
                self.last = self.last.next;
            }else{
                self.head = new Node(value, null, null);
                self.last = self.head;
            }
        }
        self.length ++;
        return true;
    };

    // Push in Head
    self.pushFirst = function(value){
        self.head = new Node(value, self.head);
    }

    // Pop Elem
    self.pop = function(index){
        self.each(function(x, key){
            if(index == key){
                if(x.next)
                    let next = x.next;
                else
                    let next = new Node(null, null, null);
                x.value = next.value;
                x.next  = next.next;
                self.length --;
                return true;
            }
        });
    };

    // Print LinkedList
    self.print = function(){
        self.each(function(elem){
            console.log(elem.value);
        });
    };
};



