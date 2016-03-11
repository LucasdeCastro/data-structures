

class List

    Node = Struct.new(:data, :next)

    def initialize
		@head = nil
		@last = nil
        @size = 0
	end

    def pushFirst(data)
        if(@head)
            @head = Node.new(data, @head)
            @last = @head.next;
        else
            tmp = Node.new(data, nil)
            @last = tmp.next
            @head = tmp
        end
        @size += 1;
    end

    def pushLast(data)
        if @last
            @last.next = Node.new(data, nil)
            @last = @last.next
        else
            @head.next = Node.new(data, nil)
            @last = @head.next;
        end
        @size += 1;
    end

    def push(key, data)
        return pushFirst(data) if key == 0
        return pushLast(data)  if key == @size
        return nil if key > @size-1
        return nil if !@head

        tmp = @head
        (1..key-1).each do |i|
            tmp = tmp.next
        end
        tmp.next = Node.new(data, tmp.next  )
        @size += 1;
    end

    def pop
        tmp = @head
        (1..@size-2).each do |i|
            tmp = tmp.next
        end
        tmp.next = nil
        @last = tmp
        @size -= 1;
    end

    def shift
        @head = @head.next
        @size -= 1;
    end


    def remove(key)
        return nil if key > @size-1
        return shift() if key == 0
        return pop() if key == @size-1

        tmp = @head
        aux = @head
        (1..key-1).each do |i|
            tmp = tmp.next
        end
        (1..key).each do |i|
            aux = aux.next
        end
        tmp.next = aux.next;
    end

    def each(&block)
        tmp = @head
        for i in 1..@size
            if(tmp)
                block.call(tmp)
                if(tmp.next)
                    tmp = tmp.next
                end
            end
        end
    end

    def size
        @size -1
    end
end

list = List.new

#Insert
list.push(0, 'value 1')
list.pushFirst('value 0')
list.pushLast('value 2')
list.pushLast('value 3')

list.pop();
list.remove(2);
list.shift();


list.each do |x|
    puts x.data
end
